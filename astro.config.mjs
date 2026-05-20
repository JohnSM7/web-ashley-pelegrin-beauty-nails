// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // URL pública del deploy. Cambia a 'https://ashleypelegrinbeauty.es'
  // cuando se conecte el dominio definitivo.
  site: 'https://web-ashley-pelegrin-beauty-nails.vercel.app',
  vite: { plugins: [tailwindcss()] },
  image: { responsiveStyles: true },
  prefetch: { prefetchAll: true, defaultStrategy: 'viewport' },
});
