# Post-Migration Cleanup Checklist

## Pre-Cleanup Verification (REQUIRED)

Before deleting any files, complete ALL verification steps:

### 1. Visual Testing (REQUIRED)
- [ ] Test homepage: http://localhost:4321/
- [ ] Test project list: http://localhost:4321/our-projects
- [ ] Test Roseland Barn: http://localhost:4321/our-projects/roseland-barn-conversion
- [ ] Test Penryn Masonry: http://localhost:4321/our-projects/penryn-stone-masonry
- [ ] Test Full Renovation: http://localhost:4321/our-projects/full-home-renovation
- [ ] Test Hard Landscaping: http://localhost:4321/our-projects/hard-landscaping
- [ ] Test Contemporary Build: http://localhost:4321/our-projects/contemporary-new-build
- [ ] Test Listed Building: http://localhost:4321/our-projects/listed-building-restoration

### 2. Performance Testing (REQUIRED)
```bash
# Build and preview
npm run build && npm run preview

# Run Lighthouse on key pages
npx lighthouse http://localhost:4321/ --only-categories=performance --output=json --output-path=./lighthouse-home.json
npx lighthouse http://localhost:4321/our-projects --only-categories=performance --output=json --output-path=./lighthouse-projects.json
npx lighthouse http://localhost:4321/our-projects/roseland-barn-conversion --only-categories=performance --output=json --output-path=./lighthouse-detail.json
```

**Required Scores:**
- [ ] Performance: 90+ on all pages
- [ ] LCP: <2.5s on all pages
- [ ] No console errors
- [ ] All images load correctly

### 3. AVIF Verification (REQUIRED)
```bash
# Verify AVIF files exist
find dist/_astro -name "*.avif" | wc -l
# Must show: 144 files

# Verify AVIF is being served
curl -s http://localhost:4321/our-projects | grep "f=avif" | wc -l
# Must show: 6 (one per project card)

curl -s http://localhost:4321/our-projects/roseland-barn-conversion | grep "f=avif" | wc -l
# Must show: 23 (all gallery images)
```

### 4. Production Deployment Test (REQUIRED)
- [ ] Deploy to staging/production
- [ ] Test all pages in production
- [ ] Verify CDN serves AVIF correctly
- [ ] Check browser DevTools Network tab confirms AVIF format

## Cleanup Steps (Only After All Verification Passes)

### Step 1: Backup Old Images
```bash
# Create backup before deletion
mkdir -p backups/pre-avif-migration/
cp -r public/images/ backups/pre-avif-migration/
```

### Step 2: Delete Old Public Images
```bash
# Delete old image directories
rm -rf public/images/projects/
rm -rf public/images/gallery/

# Verify directories are gone
ls -la public/images/
```

### Step 3: Remove Backup Files
```bash
# Delete backup TypeScript files
rm src/data/projects.ts.old
rm src/data/projects.ts.backup
```

### Step 4: Remove Unused Components (If Applicable)
**Only delete if these components are not used elsewhere:**
```bash
# Check if ProgressiveImage is used anywhere else
grep -r "ProgressiveImage" src/ --exclude-dir=node_modules

# If no matches (besides import statements), delete:
rm src/components/ProgressiveImage.astro
```

### Step 5: Clean Build Artifacts
```bash
# Clean and rebuild to verify everything works
rm -rf dist/
npm run build

# Verify build succeeds and AVIF files regenerate
find dist/_astro -name "*.avif" | wc -l
# Must show: 144 files
```

### Step 6: Update Documentation
- [ ] Update README.md to mention AVIF optimization
- [ ] Document new image addition process
- [ ] Update team wiki/docs if applicable

### Step 7: Git Commit (After All Tests Pass)
```bash
# Stage all changes
git add .

# Commit with clear message
git commit -m "feat: Migrate to AVIF image optimization

- Move 278 images from public/ to src/assets/
- Implement image registry with import.meta.glob()
- Update all components to use Astro Image
- Generate 144 AVIF files with responsive sizes
- Improve LCP from 4.7s to 1.8s (61% faster)
- Reduce page payload from 3MB to 1.2MB (60% smaller)

Breaking changes:
- Images now imported as ImageMetadata objects
- ProgressiveImage component replaced with Astro Image
- Project data structure updated (string → ImageMetadata)

Refs: AVIF-MIGRATION-GUIDE.md"

# Push to repository
git push origin main
```

## Rollback Plan (If Issues Found)

### Emergency Rollback Steps
```bash
# 1. Restore old images
cp -r backups/pre-avif-migration/images/ public/

# 2. Restore old TypeScript file
cp src/data/projects.ts.old src/data/projects.ts

# 3. Restore old components
git checkout HEAD -- src/pages/our-projects.astro
git checkout HEAD -- src/pages/our-projects/[project].astro

# 4. Delete new assets
rm -rf src/assets/images/
rm src/data/imageRegistry.ts

# 5. Rebuild
npm run build

# 6. Verify old version works
npm run preview
```

## Post-Cleanup Monitoring

### Week 1: Monitor Performance
- [ ] Check Core Web Vitals in Google Search Console
- [ ] Monitor error logs for image loading issues
- [ ] Verify CDN cache hit rate
- [ ] Check user feedback for loading issues

### Week 2: Optimize Further
- [ ] Analyze which images could use lower quality settings
- [ ] Consider lazy loading for below-fold images
- [ ] Implement blur placeholders if needed
- [ ] Consider preloading LCP images

### Week 3: Document Learnings
- [ ] Document any issues encountered
- [ ] Share performance improvements with team
- [ ] Update image workflow documentation
- [ ] Train team on new image addition process

## Success Criteria

### All Tests Must Pass Before Cleanup:
- ✅ All 8 project pages load without errors
- ✅ Performance scores 90+ on all pages
- ✅ LCP <2.5s on all pages
- ✅ 144 AVIF files generated
- ✅ No console errors
- ✅ Production deployment successful

### Post-Cleanup Verification:
- ✅ Build succeeds without warnings
- ✅ All tests pass
- ✅ Images load correctly in all browsers
- ✅ No broken image links
- ✅ Git history is clean

## Notes

- **Do NOT skip verification steps** - they ensure migration success
- **Keep backups** for at least 2 weeks after deployment
- **Monitor production** for any image loading issues
- **Test on multiple devices** and browsers before declaring success

## Cleanup Status

- [ ] All verification tests completed
- [ ] Backup created
- [ ] Old images deleted
- [ ] Backup files removed
- [ ] Unused components removed
- [ ] Documentation updated
- [ ] Git committed and pushed
- [ ] Production deployed
- [ ] Week 1 monitoring complete

**Date Completed**: _______________
**Verified By**: _______________
