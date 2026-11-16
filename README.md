# web

Webseite von ItsNeverLupus – gebaut mit [Vite](https://vite.dev), ohne Framework.

## Lokal starten

Voraussetzung: Node.js 18 oder neuer.

```bash
npm install
npm run dev
```

Die Seite läuft dann unter http://localhost:5173.

## Build

```bash
npm run build
npm run preview
```

Der fertige Build liegt in `dist/` und kann auf jedem statischen Hosting
(GitHub Pages, Vercel, Netlify, …) veröffentlicht werden.

## Struktur

- `index.html` – Seitenaufbau
- `src/style.css` – Styles (gleicher Look wie das Portfolio)
- `src/links.js` – Projekte und Kontakt-Links, die auf der Seite angezeigt werden
- `src/main.js` – rendert die Link-Listen
- `public/` – statische Dateien wie das Favicon
