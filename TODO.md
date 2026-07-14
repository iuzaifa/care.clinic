# care-clinic optimization/fix

## Step 1 — Repo understanding
- [x] Reviewed routing shell (`src/routes/AppRoutes.tsx`, `src/layouts/WebsiteLayout.tsx`)
- [x] Reviewed key pages (`Home`, `Blog`, `Contact`, `Doctors`, `Pricing` placeholder)
- [x] Reviewed key components (`Header`, `Footer`, `HeroSection`, blog list/card)

## Step 2 — Inspect map component (defer load)
- [ ] Inspect `src/components/GoogleMap.tsx` and update strategy

## Step 3 — Implement safe performance/UX fixes (small commits)
- [x] Remove `console.log` from pages (Blog/Contact search/submit handlers)
- [x] Add image performance attributes (lazy/async/decoding) in `BlogCard`, `BlogSidebar`, and footer logo
- [ ] Improve hero background handling (reduce LCP impact)


## Step 4 — Route-level code splitting
- [ ] Add `React.lazy` + `Suspense` for pages in `src/routes/AppRoutes.tsx`

## Step 3.1 — Lint errors fixes (required)
- [x] Remove unused import from `src/pages/Services.tsx`
- [x] Fix `useEffect` dependency warning in `src/components/sections/Testimonials.tsx`

## Step 5 — SEO / accessibility
- [ ] Enhance `index.html` with meta + preconnect/dns-prefetch for external image domains
- [ ] Fix missing `name` attributes / form semantics where found

## Step 6 — Correctness
- [ ] Implement real `src/pages/Pricing.tsx` content

## Step 7 — Verify
- [x] Run `npm run lint`
- [x] Run `npm run build`
- [ ] Smoke-test navigation in dev server


