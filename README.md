# Ashley Pelegrin Beauty · Landing

Sitio web one-page para **Ashley Pelegrin Beauty Nails**, salón de uñas premium en Madrid (Calle Esperanza Macarena 14, Villaverde).

> Diseño y desarrollo a medida, mobile-first, con efecto "wow" basado en datos e imágenes reales del negocio.

## Stack

- **Astro 6** (output estático)
- **Tailwind CSS v4** (`@theme` tokens, sin config.js)
- **Leaflet + OpenStreetMap** (mapa sin API key)
- **Motion** (animaciones declarativas)
- **TypeScript** estricto

## Características

- 🎨 Paleta extraída del logo oficial: chocolate cuero + cobre rosa metalizado
- 📸 Fotos reales descargadas de Booksy/Facebook (retrato editorial de la fundadora + 6 trabajos auténticos)
- 🏷️ Schema.org `BeautySalon` JSON-LD completo con 21 ofertas, rating real (4.9★ / 384 reseñas)
- 📱 Mobile-first, validado en 4 viewports (375 / 768 / 1024 / 1440) sin overflow horizontal
- ⚡ Hero con preload eager + fetchpriority high, resto lazy
- 🗺️ Mapa diferido con IntersectionObserver + skeleton shimmer
- 💬 WhatsApp flotante con pulse animation
- 🎭 Efectos: cursor-glow cards, magnetic buttons, marquee infinito, polaroids tilted, script gigante ghost, glassmorphism nav, view transitions
- ♿ WCAG 2.1 AA: skip-link, focus-visible, alt descriptivos, touch ≥ 44px, `prefers-reduced-motion`

## Estructura

```
src/
├── components/       Nav, Hero, Fundadora, Manifesto, BentoServicios,
│                     Galeria, Equipo, Precios, Resenas, Mapa, Cta, Footer
├── data/negocio.ts   Single source of truth (textos, servicios, reseñas)
├── layouts/Base.astro SEO + JSON-LD + Open Graph + ClientRouter
├── pages/index.astro  Orquesta secciones
└── styles/global.css  Tailwind v4 + tokens + animaciones
public/
├── images/           Fotos reales del negocio
├── favicon.svg
├── robots.txt
└── sitemap.xml
```

## Comandos

```bash
npm install           # Instalar dependencias
npm run dev           # Dev server (localhost:4321)
npm run build         # Build de producción → dist/
npm run preview       # Preview del build
```

## Deploy recomendado

Conectar el repo en **Vercel** o **Netlify**. Astro autodetectado, sin config adicional.

---

Hecho en Madrid · Diseño & código a medida
