# BI — Landing Page

Landing de una sola página para el cuarteto de jazz BI. Vite + React + Tailwind CSS.

## Desarrollo

```bash
npm install
npm run dev
```

## Build de producción

```bash
npm run build
npm run preview
```

## Contenido y assets

Toda la copy, links y datos estructurados (bio, integrantes, trayectoria, Spotify, contacto) viven en un solo archivo: `src/content.js`. Para editar textos o links, modificar ahí — no hace falta tocar los componentes.

### Pendientes a confirmar con la banda
Marcados con `TODO` en `src/content.js`:
- Instrumento/rol específico de cada integrante.
- Fecha aproximada exacta de las giras internacionales.
- Confirmar en un teléfono real que el link de WhatsApp (`wa.me/5493515135478`) abre el chat correcto antes de publicar.

### Foto/video de fondo del Hero
El Hero usa hoy un fondo 100% CSS (degradé cálido + formas orgánicas animadas), sin depender de ningún archivo. Si más adelante quieren reemplazarlo por una foto o video real de la banda tocando en vivo, hay dos opciones simples:
- Agregar el archivo en `public/media/hero-bg.jpg` (o `.mp4`) y ajustar `src/components/sections/Hero.jsx` para renderizarlo por encima del degradé actual (dejarlo como fallback si el archivo no carga).

### Assets ya incluidos
- `src/assets/logo.jpg` — isotipo de la banda, usado como insignia (círculo oscuro) en el nav y el footer, y como favicon.
- `src/assets/integrantes.png` — foto grupal real de los 4 integrantes, usada en la sección "La Banda".
