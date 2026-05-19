// Single source of truth — Datos reales del negocio
// Fuentes: Booksy (https://booksy.com/es-es/2907_ashley-pelegrin-beauty_salon-de-unas_53009_madrid)
//          Fresha (https://www.fresha.com/lvp/sweet-nails-madrid-calle-esperanza-macarena-madrid-ZDnMrM)
//          Facebook Sweet Nails Madrid

export const negocio = {
  nombre: 'Ashley Pelegrin Beauty',
  marca: 'Ashley Pelegrin',
  tagline: 'El arte de la uña esculpida',
  claim: 'Manicura, pedicura y acrílicas premium en el corazón de Villaverde',
  descripcion:
    'Centro especializado en manicura, pedicura, uñas acrílicas y de gel esculpidas y esmaltado permanente. Ashley y su equipo cuidan cada detalle desde 2019, con la pasión por las manos perfectas que las clientas vuelven a recomendar mes tras mes.',
  fundadora: 'Ashley Pelegrin',
  ciudad: 'Madrid',
  barrio: 'Villaverde · Los Rosales',
  direccion: {
    calle: 'Calle Esperanza Macarena, 14',
    cp: '28021',
    ciudad: 'Madrid',
    region: 'Comunidad de Madrid',
    pais: 'ES',
    full: 'Calle Esperanza Macarena 14, 28021 Madrid',
  },
  geo: {
    lat: 40.3503386,
    lng: -3.6905645,
  },
  telefono: '+34 634 980 316',
  telefonoLink: 'tel:+34634980316',
  whatsapp: '34634980316',
  whatsappLink: 'https://wa.me/34634980316?text=Hola%20Ashley%2C%20me%20gustaría%20pedir%20una%20cita%20✨',
  email: 'hola@ashleypelegrinbeauty.es',
  web: 'https://ashleypelegrinbeauty.es',
  booking: 'https://booksy.com/es-es/2907_ashley-pelegrin-beauty_salon-de-unas_53009_madrid',
  idiomas: ['Español', 'Inglés básico'],
  rating: {
    valor: 4.9,
    total: 384,
    fuente: 'Booksy',
  },
  horario: [
    { dia: 'Lunes', abre: '10:00', cierra: '20:00' },
    { dia: 'Martes', abre: '10:00', cierra: '20:00' },
    { dia: 'Miércoles', abre: '10:00', cierra: '20:00' },
    { dia: 'Jueves', abre: '10:00', cierra: '20:00' },
    { dia: 'Viernes', abre: '10:00', cierra: '20:00' },
    { dia: 'Sábado', abre: '10:00', cierra: '14:00' },
    { dia: 'Domingo', abre: null, cierra: null },
  ],
  redes: {
    instagram: 'https://www.instagram.com/ashleypelegrinbeauty',
    facebook: 'https://www.facebook.com/sweetnailsmadrid/',
    tiktok: 'https://www.tiktok.com/@ashleypelegrinbeauty',
    booksy: 'https://booksy.com/es-es/2907_ashley-pelegrin-beauty_salon-de-unas_53009_madrid',
  },
} as const;

// Equipo — nombres reales mencionados en reseñas
export const equipo = [
  {
    nombre: 'Ashley',
    apellido: 'Pelegrin',
    rol: 'Fundadora · Nail Artist',
    bio: 'La cabeza visible del salón. Detrás de cada uña esculpida hay 6 años de oficio, mirada quirúrgica y una obsesión sana por el remate perfecto.',
    especialidad: 'Acrílicas Fantasía · XXL · BabyBoomer',
    iniciales: 'AP',
  },
  {
    nombre: 'Dahiana',
    apellido: '"Day"',
    rol: 'Senior Nail Artist',
    bio: 'Las clientas la piden por nombre: "Day muy buen trabajo, como siempre". Mano firme, ritmo constante, decoración milimétrica.',
    especialidad: 'Semipermanente · Decoración 3D',
    iniciales: 'DH',
  },
  {
    nombre: 'Fernanda',
    apellido: '"Fer"',
    rol: 'Nail Artist',
    bio: '"Fer es la mejor, trata mis uñas con mucho cariño". Pedicuras de spa, manicuras Rubber Base y diseños a mano alzada.',
    especialidad: 'Pedicura · Rubber Base · Press On',
    iniciales: 'FR',
  },
] as const;

// Servicios — extraídos del menú real de Booksy
export const servicios = [
  {
    categoria: 'Acrílicas Esculpidas',
    descripcion: 'La técnica que nos ha hecho famosas en Villaverde.',
    items: [
      { nombre: 'Nuevas Acrílicas', desde: 35, unidad: '€', duracion: '1h 30min', destacado: true },
      { nombre: 'Acrílicas BabyBoomer', desde: 35, unidad: '€', duracion: '1h 30min' },
      { nombre: 'Uñas XXL', desde: 40, unidad: '€', duracion: '2h', destacado: true },
      { nombre: 'Uñas Acrílicas Fantasía', desde: 40, unidad: '€', duracion: '1h 45min' },
      { nombre: 'Relleno acrílico', desde: 32, unidad: '€', duracion: '1h 30min' },
      { nombre: 'Retirada acrílico', desde: 10, unidad: '€', duracion: '40min' },
      { nombre: 'Reparación uña rota', desde: 2, unidad: '€', duracion: '15min' },
    ],
  },
  {
    categoria: 'Manicura & Esmaltado',
    descripcion: 'Mantenimiento semanal o capricho de fin de semana.',
    items: [
      { nombre: 'Manicura Rubber Base', desde: 28, unidad: '€', duracion: '1h', destacado: true },
      { nombre: 'Manicura completa semipermanente', desde: 22, unidad: '€', duracion: '45min' },
      { nombre: 'Esmaltado semipermanente', desde: 17, unidad: '€', duracion: '30min' },
      { nombre: 'Limar y pintar francesa semi', desde: 17, unidad: '€', duracion: '40min' },
      { nombre: 'Esmaltado permanente + decoración', desde: 25, unidad: '€', duracion: '50min' },
      { nombre: 'Manicura básica', desde: 15, unidad: '€', duracion: '45min' },
      { nombre: 'Retirada semipermanente', desde: 6, unidad: '€', duracion: '20min' },
    ],
  },
  {
    categoria: 'Pedicura',
    descripcion: 'Cuidado completo de los pies, todo el año.',
    items: [
      { nombre: 'Pedicura semipermanente', desde: 30, unidad: '€', duracion: '1h', destacado: true },
      { nombre: 'Pedicura completa esmalte', desde: 25, unidad: '€', duracion: '1h' },
      { nombre: 'Esmaltado permanente pies', desde: 17, unidad: '€', duracion: '30min' },
      { nombre: 'Reconstrucción uña del pie', desde: 2.5, unidad: '€', duracion: '10min' },
    ],
  },
  {
    categoria: 'Nail Art',
    descripcion: 'Diseños que convierten una uña en una pieza única.',
    items: [
      { nombre: 'Decoración 3D', desde: 2.5, unidad: '€', duracion: '10min' },
      { nombre: 'Decoración a mano alzada', desde: 2, unidad: '€', duracion: '10min' },
      { nombre: 'Encapsulado', desde: 2, unidad: '€', duracion: '10min' },
      { nombre: 'Uñas Press On personalizadas', desde: 35, unidad: '€', duracion: '1h 30min' },
    ],
  },
] as const;

// Reseñas — copiadas verbatim desde Booksy
export const resenas = [
  {
    autor: 'María',
    fecha: '16 abr 2026',
    rating: 5,
    texto: 'Siempre una muy buena experiencia y contenta con el resultado!',
    emoji: '🌸',
  },
  {
    autor: 'Shamara',
    fecha: '15 abr 2026',
    rating: 5,
    texto: 'Fantástica, como siempre.',
    emoji: '🥰',
  },
  {
    autor: 'Pilar',
    fecha: '7 abr 2026',
    rating: 5,
    texto: '¡Perfecto, como siempre! He probado en mil sitios hasta que encontré este y a Fernanda.',
  },
  {
    autor: 'María',
    fecha: '29 mar 2026',
    rating: 5,
    texto: '¡Las mejores en todo!',
  },
  {
    autor: 'Sarah',
    fecha: '4 mar 2026',
    rating: 5,
    texto: 'Me encantó, muy buen servicio. Dahiana es un amor, hace las cosas súper bien y se toma su tiempo. Y Ashley ni se diga: volveré sin duda.',
  },
  {
    autor: 'Arletis',
    fecha: '2 mar 2026',
    rating: 5,
    texto: 'Perfectas.',
  },
  {
    autor: 'María',
    fecha: '11 feb 2026',
    rating: 5,
    texto: 'Encantadora y profesional, ¡gracias!',
  },
  {
    autor: 'María',
    fecha: '5 feb 2026',
    rating: 5,
    texto: 'Fer es la mejor, trata mis uñas con mucho cariño y me las deja siempre perfectas.',
  },
  {
    autor: 'Patricia',
    fecha: '2 feb 2026',
    rating: 5,
    texto: 'Como siempre, Day muy buen trabajo.',
  },
  {
    autor: 'Inés',
    fecha: '30 ene 2026',
    rating: 5,
    texto: 'Muy buen trabajo.',
  },
] as const;

// Estadísticas para Manifesto
export const stats = [
  { valor: '4.9', etiqueta: 'estrellas Booksy', detalle: '384 reseñas verificadas' },
  { valor: '+6', etiqueta: 'años de oficio', detalle: 'Esculpiendo uñas desde 2019' },
  { valor: '21', etiqueta: 'servicios', detalle: 'Acrílicas, gel, nail art y spa' },
  { valor: '100%', etiqueta: 'cita previa', detalle: 'Tu tiempo, sin esperas' },
] as const;

// Galería — fotos REALES del salón (descargadas de Booksy)
export const galeria = [
  {
    src: '/images/trabajo-03.jpg',
    alt: 'Acrílicas nude rosadas con flores 3D blancas y pedrería',
    caption: 'Acrílicas 3D rosa nude',
    numero: '01',
  },
  {
    src: '/images/trabajo-01.jpg',
    alt: 'Uñas largas almendra con efectos turquesa y negro tornasol',
    caption: 'Tornasol esmeralda',
    numero: '02',
  },
  {
    src: '/images/trabajo-06.jpg',
    alt: 'Diseño invernal con corazones blancos y glitter plateado',
    caption: 'Edición invierno',
    numero: '03',
  },
  {
    src: '/images/trabajo-04.jpg',
    alt: 'Acrílicas con decoración personalizada',
    caption: 'Diseño a medida',
    numero: '04',
  },
  {
    src: '/images/trabajo-05.jpg',
    alt: 'Uñas XXL almendra con encapsulado',
    caption: 'XXL encapsulado',
    numero: '05',
  },
  {
    src: '/images/trabajo-02.jpg',
    alt: 'Diseño nail art exclusivo del salón',
    caption: 'Edición limitada',
    numero: '06',
  },
] as const;

export const fotosHero = {
  ashley: '/images/ashley-retrato.jpg',
  logo: '/images/logo-marca.jpg',
  poster1: '/images/trabajo-03.jpg',
  poster2: '/images/trabajo-01.jpg',
} as const;

export type Negocio = typeof negocio;
export type Servicio = (typeof servicios)[number];
export type Resena = (typeof resenas)[number];
