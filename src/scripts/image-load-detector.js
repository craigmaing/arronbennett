/**
 * Consolidated Image Load Detector
 * Reduces code duplication across multiple image components
 * Adds 'loaded' class to images for fade-in effects
 */

export function initializeImageLoadDetection() {
  // Use IntersectionObserver for better performance
  const imageObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;

          // Check if image is already loaded
          if (img.complete && img.naturalHeight !== 0) {
            img.classList.add('loaded');
            imageObserver.unobserve(img);
          } else {
            // Add load listener
            img.addEventListener('load', () => {
              img.classList.add('loaded');
              imageObserver.unobserve(img);
            }, { once: true });

            // Handle error case
            img.addEventListener('error', () => {
              console.error(`Failed to load image: ${img.alt || img.src}`);
              img.classList.add('loaded', 'error');
              imageObserver.unobserve(img);
            }, { once: true });
          }
        }
      });
    },
    {
      // Start loading when image is 50px from viewport
      rootMargin: '50px',
      threshold: 0.01
    }
  );

  // Function to observe images
  const observeImages = () => {
    // Select all images that need load detection
    const selectors = [
      'img[loading="lazy"]',
      '.gallery-image-item img',
      '.progressive-image-main',
      'picture img',
      '.responsive-image img'
    ];

    const images = document.querySelectorAll(selectors.join(', '));

    images.forEach((img) => {
      // Skip if already has loaded class
      if (!img.classList.contains('loaded')) {
        // For eager/above-fold images, check immediately
        if (img.loading === 'eager' || img.fetchpriority === 'high') {
          if (img.complete && img.naturalHeight !== 0) {
            img.classList.add('loaded');
          } else {
            img.addEventListener('load', () => {
              img.classList.add('loaded');
            }, { once: true });
          }
        } else {
          // For lazy images, use IntersectionObserver
          imageObserver.observe(img);
        }
      }
    });
  };

  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', observeImages);
  } else {
    observeImages();
  }

  // Handle dynamically added images (e.g., from client-side routing)
  const mutationObserver = new MutationObserver((mutations) => {
    let hasNewImages = false;

    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType === 1) { // Element node
          if (node.tagName === 'IMG' || node.querySelector?.('img')) {
            hasNewImages = true;
          }
        }
      });
    });

    if (hasNewImages) {
      // Debounce to avoid multiple calls
      clearTimeout(window.__imageDetectorTimeout);
      window.__imageDetectorTimeout = setTimeout(observeImages, 100);
    }
  });

  // Start observing for dynamic content
  mutationObserver.observe(document.body, {
    childList: true,
    subtree: true
  });

  // Cleanup function
  return () => {
    imageObserver.disconnect();
    mutationObserver.disconnect();
  };
}

// Auto-initialize if loaded directly
if (typeof window !== 'undefined') {
  initializeImageLoadDetection();
}