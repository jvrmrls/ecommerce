// export const API_URL = "http://localhost:3001/apitest";
export const API_URL = "https://api-digfrqbsta-uc.a.run.app/apitest";

export const OAUTH_API_CLIENT_ID =
  "394101880841-slcv06f3d8s3v9fspicvdnqnp26hs95r.apps.googleusercontent.com";

export const MAPBOX_ACCESS_TOKEN =
  "pk.eyJ1IjoianZycm1ybHMiLCJhIjoiY2xucnpyOHhmMDNkaDJyazR1c2lteXdiNCJ9.1ilke9VVwHOQX15P3OzuVg";
export const MAPBOX_ZOOM = 16;

export const THEMES = {
  LIGHT: "viva-light",
  DARK: "viva-dark",
};

export const ENCRYPT_KEY = "aLeART";

export const DEFAULT_THEME = "LIGHT";

export const IMAGES_TYPES = {
  BANNER: "BNR",
  PRODUCT: "PRD",
};

export const SUPPORT_EMAIL = "soporte@aleartsv.com";
export const SUPPORT_WHATSAPP = "50372709725";

export const FADE_ANIMATION = {
  initial: { opacity: 0, scale: 0.85 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.3 },
  exit: { opacity: 0, scale: 0.85 },
};

export const SLIDE_UP_ANIMATION = {
  initial: { y: 10, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: 10, opacity: 0 },
};

export const CURRENCY = "USD";
export const LANGUAGE = "es-SV";

export const SEARCH_PLACEHOLDER = "Buscar...";

export const COMPANY = "Ale Art";

export const PHONE_REGEX = /^\([0-9]{3}\)\s[0-9]{4}-[0-9]{4}$/;

export const DEFAULT_DAYS_TO_DELIVER = 2;
export const MIN_TIME_HOUR = "08:00";
export const MAX_TIME_HOUR = "18:00";

export const MAX_ITEMS_COUNTER = 10;

export const BOTTOM_BAR_HIDDEN_PATHS = [
  "/perfil/agregar-direccion",
  "/producto/",
  "/carrito",
  "/pago",
  "/metodo-de-entrega",
  "/fecha-y-hora",
  "/rastreo-de-orden",
  "/perfil/ordenes-y-mensajes",
  "/ajustes"
];

export const CHECKOUT_STEPS = {
  ADDRESS: 0,
  PAYMENT: 1,
  REVIEW: 2,
};


export const DELIVERY_METHODS = [
  { label: "Recoger en tienda", value: "PICKUP", isActive: true },
  { label: "Entrega a domicilio", value: "DELIVERY", isActive: false },
  { label: "Punto de encuentro", value: "MEETUP", isActive: true },
]

export const PAYMENT_METHODS = [
  { label: "Efectivo", value: 0, code: "CASH" },
  // { label: "Tarjeta", value: 1, code: "CARD" },
  { label: "Transferencia Bancaria", value: 2, code: "TRANSFER" },
];

export const ORDER_STEPS = [
  { label: "Pendiente", value: "PENDING", msg: "Tu pedido está pendiente de aprobación" },
  { label: "En Proceso", value: "INPROCESS", msg: "Tu pedido está siendo elaborado" },
  { label: "En Camino", value: "ONTHEWAY", msg: "Tu pedido está en camino" },
  { label: "Finalizada", value: "FINISHED", msg: "Tu pedido ha sido entregado" },
];

export const PAGES = {
  feed: {
    title: "Feed",
    desc: `Descubre las últimas novedades y ofertas emocionantes en Aleartsv.com, tu destino para arreglos florales, cuadros personalizados y más. ¡Explora ahora!`,
  },
  menu: {
    title: "Menú",
    desc: `Explora nuestro completo menú de productos en Aleartsv.com. Desde exquisitas flores naturales hasta deliciosos snacks preparados, tenemos algo para todos los gustos.`,
  },
  profile: {
    title: "Perfil",
    desc: `Gestiona tu perfil personal en Aleartsv.com para una experiencia de compra personalizada. Actualiza tus preferencias, revisa tu historial de pedidos y más en un solo lugar.`,
  },
  login: {
    title: "Iniciar Sesión",
    desc: `Accede a tu cuenta en Aleartsv.com para disfrutar de una experiencia de compra fluida y segura. ¡Bienvenido de vuelta!`,
  },
  addAddress: {
    title: "Agregar Dirección",
    desc: `Agrega una nueva dirección de entrega a tu cuenta en Aleartsv.com para recibir tus pedidos en el lugar que elijas. ¡Hazlo fácilmente con unos pocos clics!`,
  },
  ordersAndMessages: {
    title: "Pedidos y Mensajes",
    desc: `Mantente al tanto de tus pedidos y comunicaciones importantes en Aleartsv.com. Revisa el estado de tus envíos y comunícate con nuestro equipo de atención al cliente cuando lo necesites.`,
  },
  register: {
    title: "Registro",
    desc: `Regístrate en Aleartsv.com para acceder a ofertas exclusivas, guardar tus productos favoritos y realizar un seguimiento fácil de tus pedidos. ¡Únete a nuestra comunidad hoy mismo!`,
  },
  dateAndTime: {
    title: "Fecha y Hora",
    desc: `Selecciona la fecha y hora de entrega perfectas para tus pedidos en Aleartsv.com. Personaliza tu experiencia de compra para adaptarse a tu agenda ocupada.`,
  },
  orderConfirmation: {
    title: "Confirmación de Orden",
    desc: `Confirma tu pedido en Aleartsv.com y prepárate para recibir tus productos seleccionados con emocionantes arreglos florales, cuadros personalizados y más.`,
  },
  cart: {
    title: "Carrito",
    desc: `Revisa y edita los productos en tu carrito de compras en Aleartsv.com antes de proceder al pago. ¡Asegúrate de no perder ninguna de tus selecciones favoritas!`,
  },
  products: {
    title: "Productos",
    desc: `Explora nuestra amplia selección de productos en Aleartsv.com. Desde impresionantes arreglos florales hasta cuadros personalizados y más, encuentra el regalo perfecto para cualquier ocasión.`,
  },
  product: {
    title: "Producto",
    desc: `Descubre más sobre este emocionante producto en Aleartsv.com. Detalles, opciones de personalización y más te esperan mientras exploras nuestra colección de artículos únicos y encantadores.`,
  },
  loading: {
    title: "Cargando",
    desc: `Por favor, espera mientras cargamos tu contenido en Aleartsv.com. ¡Estamos preparando una experiencia de compra excepcional para ti!`,
  },
  checkout: {
    title: "Pago",
    desc: `Completa tu compra de manera segura y conveniente en Aleartsv.com. Selecciona tus métodos de pago preferidos y finaliza tu pedido con confianza.`,
  },
  delivery: {
    title: "Método de Entrega",
    desc: `Elige el método de entrega que mejor se adapte a tus necesidades en Aleartsv.com. Desde envíos estándar hasta opciones de entrega express, asegúrate de recibir tus productos a tiempo y en perfectas condiciones.`,
  },
  settings: {
    title: "Ajustes",
    desc: `Personaliza tu experiencia de compra en Aleartsv.com ajustando tus preferencias y configuraciones. Desde notificaciones de pedidos hasta preferencias de cuenta, haz que tu experiencia sea única y personal.`,
  },
  signup: {
    title: "Registro",
    desc: ` Regístrate en Aleartsv.com para acceder a ofertas exclusivas, guardar tus productos favoritos y disfrutar de una experiencia de compra personalizada. ¡Únete a nuestra comunidad hoy mismo!`,
  },
  signup_checkout: {
    title: "Registro",
    desc: ` Regístrate durante el proceso de compra en Aleartsv.com para agilizar tus pedidos futuros y recibir actualizaciones sobre el estado de tus envíos. ¡Haz que tu experiencia de compra sea aún más conveniente y fácil!`,
  },
  coupons: {
    title: "Cupones y Gift Cards",
    desc: `Pagina de cupones de ${COMPANY}`,
  },
  favorites: {
    title: "Favoritos",
    desc: `Pagina de favoritos de ${COMPANY}`,
  },
  password_recovery: {
    title: "Recuperar Contraseña",
    desc: `Pagina de recuperación de contraseña de ${COMPANY}`,
  },
  fullscreen_tracking: {
    title: "Rastreo",
    desc: `Pagina de rastreo en pantalla completa de ${COMPANY}`,
  },
  last_order_tracking: {
    title: "Rastreo Última Orden",
    desc: `Pagina de rastreo de última orden de ${COMPANY}`,
  },
  activate_certificate: {
    title: "Activar Certificado",
    desc: `Pagina de activación de certificado de ${COMPANY}`,
  },
  certificate_detail: {
    title: "Detalle Certificado",
    desc: `Pagina de detalle de certificado de ${COMPANY}`,
  },
  certificate_cart: {
    title: "Carrito Certificado",
    desc: `Pagina de carrito de certificado de ${COMPANY}`,
  },
  certificates_checkout: {
    title: "Checkout Certificado",
    desc: `Pagina de checkout de certificado de ${COMPANY}`,
  },
  orders: {
    title: "Pedidos recientes",
    desc: `Pagina de pedidos recientes de ${COMPANY}`,
  },
  locations: {
    title: "Direcciones",
    desc: `Pagina de direcciones de usuario de ${COMPANY}`,
  },
  personal: {
    title: "Datos Personales",
    desc: `Pagina de datos personales de usuario de ${COMPANY}`,
  },
  change_password: {
    title: "Cambiar Contraseña",
    desc: `Pagina de cambio de contraseña de usuario de ${COMPANY}`,
  },
  delete_account: {
    title: "Eliminar Cuenta",
    desc: `Pagina de eliminación de cuenta de usuario de ${COMPANY}`,
  },
};
