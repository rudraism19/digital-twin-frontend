# Digital Twin Verse — Frontend Only

This is the **frontend-only** extraction of the Digital Twin Verse project. All backend
(Express server, controllers, routes, services), database (Postgres models/migrations),
and deployment/infra config have been removed. It's set up as a single npm project
(npm workspaces) containing two frontends:

```
digital-twin-frontend/
├── main-site/     → the main digitaltwinvrs.com site (plain HTML/CSS/JS, served by Vite)
└── parent-ui/     → the Parent Dashboard (React + Vite, Tailwind v4)
```

## 1. Install (once, from the root)

```bash
npm install
```

This installs dependencies for **both** workspaces in one shot (root `node_modules` is shared).

## 2. Run in development

Run both apps at once:
```bash
npm run dev
```
- Main site → http://localhost:5173
- Parent dashboard → http://localhost:5174/parent/

Or run just one:
```bash
npm run dev:main      # main site only
npm run dev:parent    # parent dashboard only
```

## 3. Build for production

```bash
npm run build
```
This builds both into `main-site/dist` and `parent-ui/dist`. Run them individually with
`npm run build:main` / `npm run build:parent`.

## 4. Preview a production build

```bash
npm run preview:main
npm run preview:parent
```

## Notes on what's connecting where

Both frontends still call a backend over HTTP via **relative paths** (e.g. `/api/v1/...`,
`/api/v1/parent/dashboard`), because that logic lives in the frontend code itself
(fetch calls / axios client) — that part isn't "backend code," it's just how the UI
talks to whatever API you point it at. There's no server included here, so:

- In dev, `parent-ui/vite.config.js` proxies `/api` to `http://localhost:3000` — point this
  at wherever your backend actually runs (or remove the proxy and set a full API base URL).
- `main-site` doesn't have a dev proxy configured; if you stand up a backend, either serve
  `main-site` behind the same origin as the API, or add a proxy to `main-site/vite.config.js`
  the same way parent-ui does.
- `parent-ui/src/services/apiService.js` is the one file with all the API calls for the
  dashboard — reference point if you need to change endpoints or add auth handling.

## What changed from the original repo

- Removed: `src/` (Express app + controllers/routes/services), `migrations/`, `deploy-digital-twin/`,
  `.agents/`, `scripts/`, `tests/`, DB config, and the root Express `package.json`.
- `main-site`'s old custom hash-based build script (`scripts/build-frontend.js`, `public/dist/*`)
  was removed and replaced with a plain Vite setup — `app.js`, `ux-engine.js`, `css/main.css`,
  and `js/data/careers.js` are now served as-is (no more cache-busting hash in the filename).
  If you want that back, it's easy to reintroduce a hashing/versioning step on top of Vite's build.
- `parent-ui` was left as-is — it already had its own working Vite + npm setup.
