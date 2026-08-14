export const site = {
  name: 'BI',
  tagline: 'Casi Jazz',
  lang: 'es',
}

export const nav = [
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'La Banda', href: '#banda' },
  { label: 'Trayectoria', href: '#trayectoria' },
  { label: 'Música', href: '#musica' },
  { label: 'Contacto', href: '#contacto' },
]

export const hero = {
  eyebrow: 'Jazz contemporáneo · "Casi Jazz"',
  headline: 'Sencillez melódica, espíritu fraterno.',
  subhead:
    'BI es el proyecto de los hermanos Ravasi: composiciones propias, frescas, nacidas de la alegría del encuentro y el placer de compartir.',
  ctaLabel: 'Escuchar música',
  ctaHref: '#musica',
}

export const bio = {
  heading: 'Nosotros',
  paragraphs: [
    'BI es un proyecto de música original liderado por los hermanos Agustín y Horacio Ravasi. Desde el 2020 han coincidido nuevamente para formar BI, un proyecto musical nuevo con composiciones propias y frescas, donde se refleja la comunicación entre hermanos y la profesión.',
    'Gestados desde la alegría del encuentro fraterno y el placer de compartir, su propuesta destaca por la sencillez y claridad a nivel melódico en conjunción con ritmos y conceptos musicales de diversas índoles, derivados en una música autodenominada irónicamente como "casi jazz".',
  ],
}

// TODO (confirmar con la banda): instrumento/rol específico de cada integrante.
export const band = {
  heading: 'La Banda',
  intro: 'El cuarteto que le da forma a BI en vivo.',
  photoAlt:
    'Agustín Ravasi, Horacio Ravasi, Ismael Avecilla y André Maurel, integrantes de BI, retrato grupal.',
  members: [
    { name: 'Agustín Ravasi', role: 'Fundador' },
    { name: 'Horacio Ravasi', role: 'Fundador' },
    { name: 'Ismael Avecilla', role: 'Integrante' },
    { name: 'André Maurel', role: 'Integrante' },
  ],
}

// TODO (confirmar con la banda): fecha aproximada de las giras internacionales.
export const timeline = {
  heading: 'Trayectoria',
  intro: 'Discografía e hitos del proyecto.',
  items: [
    {
      date: 'Junio 2022',
      title: '"Al menos hoy"',
      description: 'Lanzamiento del primer material fonográfico de BI.',
    },
    {
      date: 'Mayo 2023',
      title: '"Marco Wong"',
      description: 'Simple, pieza referente de su propuesta sonora.',
    },
    {
      date: 'Febrero 2024',
      title: '"B4" (sesión en vivo)',
      description:
        'Grabación y lanzamiento de una sesión en vivo de tres temas, reflejando la sonoridad en directo del formato cuarteto.',
    },
    {
      date: '2023–2024',
      title: 'Giras internacionales',
      description: 'Presentaciones en Chile y Europa.',
    },
  ],
}

export const spotify = {
  heading: 'Música',
  intro: 'Escuchá los lanzamientos de BI.',
  tracks: [
    {
      type: 'track',
      id: '7I4LNR0SfiWaEWeP6BxDIc',
      label: 'Al menos hoy',
    },
    {
      type: 'track',
      id: '47uEjgMeUZ1vNgQCWVuPow',
      label: 'Marco Wong',
    },
    {
      type: 'album',
      id: '0cgY8xYdr86jeB3dPPTlDE',
      label: 'B4 (En vivo)',
    },
  ],
}

const WHATSAPP_NUMBER = '5493515135478'
const WHATSAPP_MESSAGE = 'Hola! Quería consultarles por BI.'

export const social = {
  instagram: {
    href: 'https://instagram.com/b.musica',
    handle: '@b.musica',
  },
  spotify: {
    href: `https://open.spotify.com/intl-es/album/${spotify.tracks[2].id}`,
  },
  whatsapp: {
    href: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`,
    label: 'Escribinos por WhatsApp',
  },
}

export const contact = {
  heading: 'Contacto',
  intro: 'Contrataciones, prensa o simplemente para saludar.',
}
