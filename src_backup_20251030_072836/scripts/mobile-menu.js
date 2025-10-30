/**
 * Mobile Menu Handler
 * Extracted from Header component for conditional loading
 * Only loaded on mobile devices via client:media directive
 */

export function initializeMobileMenu() {
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');

  if (!mobileMenuButton || !mobileMenu) return;

  // Get focusable elements
  const getFocusableElements = () => {
    return mobileMenu.querySelectorAll(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
  };

  // Toggle menu function
  const toggleMenu = (forceClose = false) => {
    const isExpanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';
    const shouldClose = forceClose || isExpanded;

    if (shouldClose) {
      // Close menu
      mobileMenu.setAttribute('hidden', '');
      mobileMenuButton.setAttribute('aria-expanded', 'false');
      mobileMenuButton.classList.remove('menu-open');
      document.body.style.overflow = '';
    } else {
      // Open menu
      mobileMenu.removeAttribute('hidden');
      mobileMenuButton.setAttribute('aria-expanded', 'true');
      mobileMenuButton.classList.add('menu-open');
      document.body.style.overflow = 'hidden';

      // Focus first focusable element
      const focusableElements = Array.from(getFocusableElements());
      if (focusableElements.length > 0) {
        setTimeout(() => focusableElements[0].focus(), 100);
      }
    }
  };

  // Click handler
  mobileMenuButton.addEventListener('click', () => toggleMenu());

  // Focus trap in mobile menu
  mobileMenu.addEventListener('keydown', (event) => {
    if (event.key === 'Tab' && !mobileMenu.hasAttribute('hidden')) {
      const focusableElements = Array.from(getFocusableElements());
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey) {
        if (document.activeElement === firstElement) {
          event.preventDefault();
          lastElement?.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          event.preventDefault();
          firstElement?.focus();
        }
      }
    }
  });

  // Close menu when clicking outside
  document.addEventListener('click', (event) => {
    const target = event.target;
    if (
      !mobileMenu.hasAttribute('hidden') &&
      !mobileMenu.contains(target) &&
      !mobileMenuButton.contains(target)
    ) {
      toggleMenu(true);
    }
  });

  // Close menu on ESC key
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !mobileMenu.hasAttribute('hidden')) {
      toggleMenu(true);
      mobileMenuButton.focus();
    }
  });

  // Close menu on resize to desktop
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      if (window.innerWidth >= 1024 && !mobileMenu.hasAttribute('hidden')) {
        toggleMenu(true);
      }
    }, 250);
  });

  // Clean up body overflow on page unload
  window.addEventListener('beforeunload', () => {
    document.body.style.overflow = '';
  });
}

// Auto-initialize if this script is loaded directly
if (typeof window !== 'undefined' && document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeMobileMenu);
} else if (typeof window !== 'undefined') {
  initializeMobileMenu();
}