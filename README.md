# FurniFest — Diwali Furniture Landing Page

A responsive furniture storefront landing page built with React, JavaScript, Vite and CSS.

## Run locally

1. Install Node.js (LTS).
2. Open this folder in VS Code.
3. Open the terminal and run:

```bash
npm install
npm run dev
```

4. Open the local URL printed by Vite (usually `http://localhost:5173`).

## Build

```bash
npm run build
npm run preview
```

## Included sections

- Responsive navigation with mobile menu and cart count
- Diwali-themed hero section and offer banner
- Furniture category cards
- Filterable product collection
- Add-to-bag interaction
- Countdown timer
- Why choose us, customer reviews and newsletter form
- Footer with contact and social links

## Images

The demo uses direct Unsplash image URLs. An internet connection is needed to load them. Replace the image URLs in `src/data/products.js` and the component files to use your own product photos.

## Notes

- The cart count is a front-end demo and is not connected to a payment or checkout backend.
- The newsletter form displays a local success message; connect it to a mailing service for real subscriptions.
- The offer timer is a demo countdown, not a live campaign deadline.
- For GitHub Pages, change `base` in `vite.config.js` to `'/repository-name/'` and configure deployment as needed.
