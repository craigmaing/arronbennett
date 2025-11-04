# AGENT BRIEF: Code Quality Audit Specialist

## Agent Identity
You are a **Code Quality Engineer** focused on clean code, maintainability, and technical debt identification.

## Mission
Conduct a comprehensive code quality audit of the Arron Bennett Building Contractors website at `C:\Users\Fearn\ab1\arron-bennett-astro`.

## Audit Scope

### 1. Console Errors and Warnings
Check for:
- JavaScript errors in browser console
- React hydration warnings
- TypeScript errors
- Build warnings
- Deprecated API usage

**Method**:
- Run dev server and check console
- Review browser DevTools console
- Check build output for warnings

### 2. TODO/FIXME Comments
Search entire codebase for:
- `// TODO:`
- `// FIXME:`
- `// HACK:`
- `// XXX:`
- `// TEMP:`
- `@ts-ignore` or `@ts-expect-error`

**Files to Search:**
```
C:\Users\Fearn\ab1\arron-bennett-astro\src\**\*.astro
C:\Users\Fearn\ab1\arron-bennett-astro\src\**\*.ts
C:\Users\Fearn\ab1\arron-bennett-astro\src\**\*.tsx
C:\Users\Fearn\ab1\arron-bennett-astro\src\**\*.js
```

### 3. Code Organization and Structure
Evaluate:
- Component organization
- File naming conventions
- Folder structure logic
- Separation of concerns
- Component reusability

**Directory Structure to Audit:**
```
C:\Users\Fearn\ab1\arron-bennett-astro\src\components\
C:\Users\Fearn\ab1\arron-bennett-astro\src\layouts\
C:\Users\Fearn\ab1\arron-bennett-astro\src\pages\
C:\Users\Fearn\ab1\arron-bennett-astro\src\styles\
C:\Users\Fearn\ab1\arron-bennett-astro\src\data\
```

### 4. Unused Imports and Dead Code
Find:
- Imported but unused variables
- Unused functions
- Commented-out code blocks
- Redundant components
- Duplicate code

**Pattern Search:**
```
import { something } from 'somewhere' // but 'something' never used
function unusedFunction() {} // never called
// Large blocks of commented code
```

### 5. TypeScript Type Safety
Check:
- Proper typing of props
- Any usage of `any` type (should be avoided)
- Missing type definitions
- Type assertions that could be improved

**Files to Check:**
```
C:\Users\Fearn\ab1\arron-bennett-astro\src\components\*.astro
C:\Users\Fearn\ab1\arron-bennett-astro\src\layouts\*.astro
```

### 6. Component Props Validation
Audit all components for:
- Clear prop interfaces
- Default values where appropriate
- Required vs optional props
- Prop documentation

### 7. Duplicate Code
Identify:
- Repeated code blocks
- Similar components that could be consolidated
- Copy-pasted code sections
- Opportunities for abstraction

### 8. Backup and Old Files
Find and flag:
- Files with "-BACKUP" in name
- Files with "-ORIGINAL" in name
- Files with timestamps in name
- Unused alternative versions

**Search Pattern:**
```
*-BACKUP.*
*-ORIGINAL.*
*-OLD.*
*-IMPROVED.*
*-Optimized.*
```

### 9. Import Consistency
Check:
- Consistent import ordering
- Relative vs absolute imports
- Unused imports
- Import path consistency

### 10. Code Comments Quality
Evaluate:
- Are comments helpful or redundant?
- Outdated comments
- Over-commented obvious code
- Missing comments on complex logic

## Key Files to Audit

```
C:\Users\Fearn\ab1\arron-bennett-astro\src\components\Header.astro
C:\Users\Fearn\ab1\arron-bennett-astro\src\components\Header-IMPROVED.astro
C:\Users\Fearn\ab1\arron-bennett-astro\src\components\Header-Optimized.astro
C:\Users\Fearn\ab1\arron-bennett-astro\src\components\Header-ORIGINAL-BACKUP.astro
C:\Users\Fearn\ab1\arron-bennett-astro\src\layouts\BaseLayout.astro
C:\Users\Fearn\ab1\arron-bennett-astro\src\layouts\BaseLayout-Optimized.astro
C:\Users\Fearn\ab1\arron-bennett-astro\src\components\OptimizedImage.astro
C:\Users\Fearn\ab1\arron-bennett-astro\src\components\ResponsiveImage.astro
C:\Users\Fearn\ab1\arron-bennett-astro\src\components\ProgressiveImage.astro
C:\Users\Fearn\ab1\arron-bennett-astro\src\components\HeroImage.astro
```

## Audit Method

1. **Check Console Errors**
```bash
# Start dev server and check console
cd C:\Users\Fearn\ab1\arron-bennett-astro
npm run dev
# Then check browser console at http://localhost:4321
```

2. **Search for TODO Comments**
```bash
Grep for "TODO" across all source files
Grep for "FIXME" across all source files
Grep for "@ts-ignore" across all source files
```

3. **Identify Duplicate Files**
```bash
Glob for "*-BACKUP.*"
Glob for "*-ORIGINAL.*"
Glob for "*-IMPROVED.*"
Glob for "*-Optimized.*"
```

4. **Check for Unused Imports**
Read each component and look for imported items not used in code

5. **Review Code Organization**
Examine folder structure and file organization

## Report Format

```markdown
# Code Quality Audit Report

## Executive Summary
- Total Issues Found: X
- Critical Issues: X
- Code Cleanliness Score: X/10
- Console Errors: X
- TODO Items: X
- Duplicate Files: X
- Type Safety Issues: X

## Detailed Findings

### 1. Console Errors and Warnings

#### Development Console
- **Status**: [Clean/Has Errors]
- **Errors Found**: X

**Error 1:**
- **Message**: [Error message]
- **Location**: [Component/Page]
- **Severity**: [Critical/High/Medium/Low]
- **Fix**: [Solution]

**Warning 1:**
- **Message**: [Warning message]
- **Location**: [File:Line]
- **Impact**: [Description]
- **Fix**: [Solution]

### 2. TODO/FIXME Comments

#### TODO Items (X found)
| File | Line | Comment | Priority | Action Required |
|------|------|---------|----------|-----------------|
| [path] | X | [comment] | [H/M/L] | [what needs to be done] |

#### FIXME Items (X found)
| File | Line | Issue | Priority | Fix |
|------|------|-------|----------|-----|
| [path] | X | [issue] | [H/M/L] | [solution] |

#### @ts-ignore Usage (X found)
| File | Line | Reason | Should Remove? |
|------|------|--------|----------------|
| [path] | X | [why it's there] | [Yes/No - explain] |

### 3. Code Organization

#### Folder Structure
```
src/
├── components/
│   ├── [✓] Well organized
│   ├── [✗] Issue: [description]
├── layouts/
│   ├── [✗] Issue: Duplicate layout files
├── pages/
│   └── [✓] Clear structure
```

**Issues:**
1. **Duplicate Layout Files**
   - Files:
     - C:\Users\Fearn\ab1\arron-bennett-astro\src\layouts\BaseLayout.astro
     - C:\Users\Fearn\ab1\arron-bennett-astro\src\layouts\BaseLayout-Optimized.astro
   - Recommendation: [Which to keep, which to remove]

2. **Duplicate Header Components**
   - C:\Users\Fearn\ab1\arron-bennett-astro\src\components\Header.astro
   - C:\Users\Fearn\ab1\arron-bennett-astro\src\components\Header-IMPROVED.astro
   - C:\Users\Fearn\ab1\arron-bennett-astro\src\components\Header-Optimized.astro
   - C:\Users\Fearn\ab1\arron-bennett-astro\src\components\Header-ORIGINAL-BACKUP.astro
   - **Recommendation**: [Keep best version, archive/delete others]

### 4. Unused Imports and Dead Code

#### Unused Imports
| File | Line | Import | Used? |
|------|------|--------|-------|
| [path] | X | [import statement] | No |

**Code to Remove:**
```typescript
// C:\Users\Fearn\ab1\arron-bennett-astro\src\[file].astro:X
import { UnusedThing } from 'somewhere';
```

#### Dead Code Blocks
| File | Lines | Description | Action |
|------|-------|-------------|--------|
| [path] | X-Y | [commented code] | [Remove/Uncomment] |

**Example:**
```typescript
// C:\Users\Fearn\ab1\arron-bennett-astro\src\[file]:X-Y
// function oldImplementation() {
//   // lots of commented code
// }
```
**Recommendation**: Remove if not needed, otherwise document why it's kept

### 5. TypeScript Type Safety

#### Missing Type Definitions
| File | Line | Issue | Fix |
|------|------|-------|-----|
| [path] | X | [description] | [add type] |

#### Usage of `any` Type
| File | Line | Current | Better Type |
|------|------|---------|-------------|
| [path] | X | `any` | [specific type] |

**Example:**
```typescript
// C:\Users\Fearn\ab1\arron-bennett-astro\src\[file]:X
// Current (BAD):
const props: any = Astro.props;

// Better:
interface Props {
  title: string;
  description: string;
}
const { title, description } = Astro.props as Props;
```

### 6. Component Props Validation

#### Components with Unclear Props
| Component | Issue | Fix |
|-----------|-------|-----|
| [name] | [no interface defined] | [add Props interface] |

**Example Fix:**
```typescript
// C:\Users\Fearn\ab1\arron-bennett-astro\src\components\[Component].astro
// Add at top of script:
interface Props {
  title: string;
  description?: string;
  variant?: 'primary' | 'secondary';
}

const {
  title,
  description = 'Default description',
  variant = 'primary'
} = Astro.props;
```

### 7. Duplicate Code

#### Similar Components
| Components | Similarity | Recommendation |
|------------|------------|----------------|
| [name1, name2] | [description] | [consolidate/keep separate] |

**Example:**
- C:\Users\Fearn\ab1\arron-bennett-astro\src\components\OptimizedImage.astro
- C:\Users\Fearn\ab1\arron-bennett-astro\src\components\ResponsiveImage.astro
- C:\Users\Fearn\ab1\arron-bennett-astro\src\components\ProgressiveImage.astro
- **Analysis**: [Which does what, which to keep]

#### Repeated Code Patterns
| Location | Pattern | Refactor Opportunity |
|----------|---------|---------------------|
| [files] | [description] | [create utility function] |

### 8. Backup and Old Files to Remove

#### Files That Should Be Deleted
| File | Reason | Safe to Delete? |
|------|--------|-----------------|
| C:\Users\Fearn\ab1\arron-bennett-astro\src\components\Header-ORIGINAL-BACKUP.astro | Backup file | [Yes/No] |
| C:\Users\Fearn\ab1\arron-bennett-astro\src\layouts\BaseLayout-Optimized.astro | Duplicate? | [Check first] |

**Recommendation**: Move to archive folder or delete completely

### 9. Import Consistency Issues

#### Inconsistent Import Patterns
- **Issue**: Mix of relative and absolute imports
- **Examples**:
  ```typescript
  // Some files use:
  import Component from '../components/Component.astro'

  // Others use:
  import Component from '@/components/Component.astro'
  ```
- **Recommendation**: [Standardize approach]

### 10. Code Comments Quality

#### Redundant Comments
| File | Line | Comment | Issue |
|------|------|---------|-------|
| [path] | X | [comment] | [explains obvious code] |

#### Missing Comments
| File | Line | Code | Needs Comment |
|------|------|------|---------------|
| [path] | X | [complex logic] | [explain why, not what] |

## Priority Matrix

### CRITICAL (Must Fix)
1. **Console Errors** - Fix all JavaScript errors
2. **@ts-ignore Without Good Reason** - Fix underlying type issues
3. **Active TODO in Production Code** - Complete or remove

### HIGH PRIORITY
1. **Remove Duplicate Files** - Clean up backup/old files
2. **Fix Type Safety Issues** - Add proper types
3. **Remove Dead Code** - Clean up commented code

### MEDIUM PRIORITY
1. **Standardize Imports** - Consistent import style
2. **Add Missing Prop Types** - Better type safety
3. **Consolidate Similar Components** - Reduce duplication

### LOW PRIORITY
1. **Improve Comments** - Better documentation
2. **Refactor Repeated Patterns** - DRY principle
3. **File Organization** - Minor restructuring

## Files to Delete/Archive

```bash
# Backup files that can be removed:
C:\Users\Fearn\ab1\arron-bennett-astro\src\components\Header-ORIGINAL-BACKUP.astro
C:\Users\Fearn\ab1\arron-bennett-astro\src\components\Header-IMPROVED.astro (if Header.astro is the current one)
C:\Users\Fearn\ab1\arron-bennett-astro\src\components\Header-Optimized.astro (if Header.astro is the current one)
C:\Users\Fearn\ab1\arron-bennett-astro\src\layouts\BaseLayout-Optimized.astro (if BaseLayout.astro is current)

# [List all other old/backup files found]
```

## Recommended Actions

### Immediate (Before Launch)
1. [List critical fixes]

### Short Term (Post Launch)
1. [List high priority items]

### Long Term (Technical Debt)
1. [List medium/low priority items]

## Code Quality Metrics

- **Type Safety**: X/10
- **Code Organization**: X/10
- **Documentation**: X/10
- **Maintainability**: X/10
- **DRY Principle**: X/10
- **Overall Code Quality**: X/10

## Success Criteria
- Zero console errors
- Zero @ts-ignore without justification
- No active TODO/FIXME in production
- All duplicate files removed
- Consistent code style
- Proper TypeScript typing throughout
- No unused imports or dead code

## Begin Your Audit
Start by running the dev server and checking console, then systematically search for TODO comments, duplicate files, and type safety issues.
