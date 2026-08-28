export const site = {
  name: 'BI',
  tagline: 'Casi Jazz',
  lang: 'es',
}

export const nav = [
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Shows 2026', href: '#shows' },
  { label: 'Prensa', href: '#prensa' },
  { label: 'Contenido audiovisual', href: '#audiovisual' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Contacto', href: '#contacto' },
]

export const hero = {
  eyebrow: 'Nuevo álbum',
  headline: 'Relatos del Futuro',
  subhead:
    'Siete canciones que capturan al cuarteto en uno de sus momentos más creativos y expresivos.',
  ctaLabel: 'Escuchar música',
  ctaHref: '#audiovisual',
  coverAlt: 'Arte de tapa de "Relatos del Futuro", el nuevo álbum de BI',
}

export const bio = {
  heading: 'Nosotros',
  paragraphs: [
    'BI es un proyecto musical original liderado por los hermanos Horacio y Agustín Ravasi, junto a André Maurel en batería e Ismael Avecilla en saxofón.',
    'Gestado desde la alegría del encuentro fraterno y el placer de compartir, predominan en su música la sencillez y claridad a nivel melódico en conjunción con ritmos y conceptos musicales que encuentran sus raíces en múltiples y variados estilos. La conjunción de estas influencias derivan en una música auto-denominada irónicamente por sus autores como Casi Jazz.',
    'Desde su primer trabajo fonográfico lanzado en 2022 (Al menos hoy) han mantenido una intensa actividad artística, destacando su participación en festivales de jazz a lo largo y ancho del país, así como en festivales internacionales en Chile; Uruguay y Grecia.'
  ],
}

export const band = {
  heading: 'Shows 2026',
  intro: 'Estos son los lugares donde nos presentaremos durante el 2026. Esperamos verte por ahí. (definir mensaje)',
  photoAlt:
    'Agustín Ravasi, Horacio Ravasi, Ismael Avecilla y André Maurel, integrantes de BI, retrato grupal.',
  shows: [
    { date: '7/1', place: 'Club de jazz Santiago de Chile' },
    { date: '8/1', place: 'Estrella Negra Club de Jazz Valparaiso - Chile' },
    { date: '9/1', place: 'Aconcagua Hostel - La Ligua Chile' },
    { date: '10/1', place: 'Festival de Jazz de Tongoy - Chile' },
    { date: '17/1', place: 'Festival de Jazz La Cumbre Córdoba' },
    { date: '13/2', place: 'Festival de Jazz San Javier - Córdoba' },
    { date: '20/2', place: 'San Felipa Gualeguaychú - Entre Ríos' },
    { date: '21/2', place: 'Festival de Jazz Colonia Valdense - Uruguay' },
    { date: '1/5', place: 'Jazz Day Villa Giardino - Córdoba' },
    { date: '15/5', place: 'La Piojera - Córdoba' },
    { date: '17/5', place: 'Festival de Jazz de Rio Ceballos - Cordoba' },
    { date: '17/6', place: 'Festival de Jazz Alta Gracia - Córdoba' },
    { date: '19/7', place: 'Noche de Jazz - Villa Ciudad Parque - Córdoba' },
    { date: '9/8', place: 'Groovin Jazz Club - Rosario' },
    {
      date: '3/10',
      place: 'Platz - Presentación Disco Relatos del Futuro',
      ticketUrl: 'https://www.antesala.com.ar/entrada/relatos-del-futuro-presentacion-de-disco',
    },
    { date: '10/10', place: 'Casa Finzi - Valle Hermoso' },
    { date: '6/11', place: 'Viña Rock - Mendoza' },
    { date: '7/11', place: 'Teatro Bicentenario - San Juan' },
    { date: '13/11', place: 'Centro Cultural Nuevo Uriarte - Buenos Aires' },
    { date: '15/11', place: 'Ciclo de Jazz de Tigre' },
  ],
}

export const press = {
  heading: 'Prensa',
  intro: 'Lo que dicen de nosotros. Hacé click en un recorte para leer la nota completa.',
  items: [
    {
      quote:
        '...tras una larga experiencia que los llevó por España, Francia, Alemania, Países Bajos, Luxemburgo, Bélgica y Grecia…',
      source: 'La Voz del Interior',
      href: 'https://www.lavoz.com.ar/espectaculos/musica/bi-el-cuarteto-que-abraza-la-cancion-instrumental-con-melodias-y-armonias-cercanas-al-oido/',
    },
    {
      quote:
        '...lo que podemos ofrecer nosotros desde nuestra música, es un espacio y un tiempo de escucha con tranquilidad y sin requisitos previos en cuanto a conocer algo, mucho o poco del género…',
      source: 'Enfant Terrible - Córdoba Cultura',
      href: 'https://enfantterrible.com.ar/cultura/bi-casi-jazz-centro-cultural-cordoba/',
    },
    {
      quote:
        '...De Córdoba a Europa: BI, la banda de “casi jazz” que tendrá 17 fechas en un menos de un mes...',
      source: 'La voz del Interior - Córdoba',
      shref: 'https://www.lavoz.com.ar/espectaculos/musica/de-cordoba-a-europa-bi-la-banda-de-casi-jazz-que-tendra-17-fechas-en-un-menos-de-un-mes/',
    },
    {
      quote:
        '...la banda nacida en Córdoba consolida una propuesta sonora única y fresca, con composiciones originales que ellos mismos definen irónicamente como "Casi Jazz"...',
      source: 'La Nueva Mañana - Córdoba',
      href: 'https://lmdiario.com.ar/contenido/494068/crecimento-e-identidad-bi-regresa-a-cordoba-con-su-casi-jazz-y-se-presenta-en-el',
    },
  ],
}

export const audiovisual = {
  heading: 'Contenido audiovisual',
  intro: 'Mirá y escuchá lo último de BI.',
  music: {
    heading: 'Música',
    eps: [
      {
        title: 'Al menos hoy (2022)',
        file: 'Al menos hoy.webp',
        href: 'https://open.spotify.com/intl-es/album/6hvlUC9jnG8ljX2ERGlDQA',
      },
      {
        title: 'Marco Wong (2023)',
        file: 'Marcos Wong.webp',
        href: 'https://open.spotify.com/intl-es/album/473SeBS7iMtXbejbuvXLOy',
      },
      {
        title: 'Bi4 (2024)',
        file: 'bi4.webp',
        href: 'https://open.spotify.com/album/0cgY8xYdr86jeB3dPPTlDE',
      },
      {
        title: 'Relatos del futuro (2026)',
        file: 'Relatos del futuro.webp',
        href: 'https://open.spotify.com/intl-es/album/0VVlQQnZzFT5pslqpXfsOR',
      },
    ],
  },
  videos: {
    heading: 'Videos',
    items: [
      { id: 'cCVctSUA4mk', title: 'Al menos hoy' },
      { id: 'AasrkvOJFPQ', title: 'Marco Wong' },
      { id: 'GOSlbhIkGTw', title: 'Juan y medio (sesión en vivo)' },
    ],
  },
}

export const gallery = {
  heading: 'Galería',
  // TODO: reemplazar por fotos reales de la banda.
  intro: 'Un vistazo detrás de escena.',
}

const WHATSAPP_NUMBER = '5493512107330'
const WHATSAPP_MESSAGE = 'Hola! Quería consultarles por BI.'

const CONTACT_EMAIL = 'brobimusic@gmail.com'
const EMAIL_SUBJECT = 'Consulta desde la web de BI'

export const social = {
  instagram: {
    href: 'https://www.instagram.com/bi.musica?igsi=MTZtMThwbmk3am82cA%3D%3D',
    handle: '@bi.musica',
  },
  youtube: {
    href: 'https://www.youtube.com/@bi.musica',
  },
  spotify: {
    href: `https://open.spotify.com/intl-es/artist/7AUWqX5D2oMvC26gRE81kw`,
  },
  whatsapp: {
    href: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`,
    label: 'Escribinos por WhatsApp',
  },
  email: {
    href: `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(EMAIL_SUBJECT)}`,
    label: 'Escribinos por mail',
  },
}

export const contact = {
  heading: 'Contacto',
  intro: 'Contrataciones, prensa o simplemente para saludar.',
}
