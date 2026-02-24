# Positivus Landing Page

Digital marketing agency landing page built with React + Vite, converted from Figma design.

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
positivus-landing/
├── public/
│   └── favicon.svg
├── src/
│   ├── pages/
│   │   └── PositivusLandingPage.jsx   # Main landing page
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── vercel.json
└── package.json
```

## Deploy to Vercel

1. Push this repo to GitHub
2. Import at [vercel.com/new](https://vercel.com/new)
3. Select framework: **Vite**
4. Click **Deploy** — done!

Every `git push` to `main` auto-deploys.

## Tech Stack

- **React 18** — UI framework
- **Vite 5** — build tool & dev server
- **Space Grotesk** — typography (Google Fonts)
- **Vercel** — hosting & CI/CD
