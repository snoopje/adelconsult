# Adelfors Consult AB - Landing Page

Eine moderne, responsive Landing Page für Adelfors Consult AB, erstellt basierend auf den Informationen von [adelconsult.com](https://www.adelconsult.com/).

## Features

- 🎨 Moderne, responsive Design mit Tailwind CSS
- ⚡ Schnelle Performance mit Vite
- 📱 Mobile-first Ansatz
- 🎯 Alle wichtigen Sektionen der Original-Website:
  - Hero-Bereich
  - Consulting & Development Services
  - News-Bereich
  - Testimonials
  - Kontaktformular
  - Footer mit Kontaktinformationen

## Technologien

- React 18
- Vite
- Tailwind CSS
- PostCSS

## Installation

```bash
npm install
```

## Entwicklung

```bash
npm run dev
```

Die Anwendung läuft dann auf `http://localhost:5173`

## Build

```bash
npm run build
```

## Preview Production Build

```bash
npm run preview
```

## Projektstruktur

```
adelconsult/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Services.jsx
│   │   ├── News.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Anpassungen

Die Landing Page kann einfach angepasst werden:
- Farben in `tailwind.config.js` ändern
- Inhalte in den einzelnen Komponenten anpassen
- Styling über Tailwind CSS-Klassen modifizieren

