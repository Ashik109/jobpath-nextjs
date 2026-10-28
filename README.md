# Jobpath Next.js

Next.js App Router conversion of the Jobpath template. Uses TypeScript and the original CSS/SCSS and assets; Tailwind is not installed.

## Run

```sh
npm install
npm run dev
```

On Windows PowerShell, use `npm.cmd` if script execution is disabled.

## Routes and content

- Home layouts: `/home-one` through `/home-six`; `/` opens home one.
- Listings: `/job-list-1`–`/job-list-5`, `/employer-1`–`/employer-3`, `/candidate-1`–`/candidate-4`, `/blog-1`–`/blog-4`.
- Details: `/job/[slug]`, `/employer/[slug]`, `/candidate/[slug]`, `/blog/[slug]`.
- Alternate detail layouts accept the same slugs, for example `/job-details-3/software-engineer-apple` and `/candidate-details-2/michael-roy`.
- Old detail entry routes redirect to a default record. Unknown record slugs return 404.

Edit `src/data/catalog.json` to change listing and detail records. `src/data/details.ts` supplies typed lookups. Page sections live under `src/app/page-sections`; shared interactions live under `src/app/components` and `src/lib`.

Search, sorting and pagination use the catalog and URL parameters (`q`, `location`, `type`, `company`, `sort`, `page`). Bootstrap handles modals, tabs, accordions and offcanvas menus. Swiper powers sliders, ApexCharts powers dashboard charts, and GLightbox opens video/image previews. AOS handles scroll animations through `data-aos` attributes and refreshes after route changes. Reduced-motion preferences are respected. Theme plugins initialize and clean up when routes change.

Shortlists, application previews and profile drafts persist in the current browser. CV download produces a text version of the sample candidate profile. These are template preview features: applications and messages are not sent to anyone. Authentication, email delivery, payments and production account storage need a backend/provider integration. Passwords are never stored in browser drafts.

## Checks

```sh
npm run lint
npm run verify:assets
npm run build
npm run test:e2e
```

Browser tests use installed Google Chrome and start the production build on port 3127. Run the build before tests. Generated Next.js output may contain HTML; authored source and public assets contain no HTML files.
