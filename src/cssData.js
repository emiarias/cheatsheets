export const cssCheatsheetData = [
  // --- Fundamentos de CSS ---
  {
    id: "sintaxis-css",
    colClasses: "col-md-6",
    headerIcon: "🎨",
    headerTitle: "Sintaxis CSS Básica",
    codeLanguage: "css",
    codeSnippet: `selector {
  propiedad: valor;
  propiedad-compuesta: valor1 valor2;
}`,
    bodyContent: null,
    bodyText: `La sintaxis de CSS se basa en <b>reglas</b> que seleccionan elementos HTML y aplican estilos mediante <strong>propiedades</strong> y <strong>valores</strong>. Cada regla tiene un selector, una o más declaraciones (propiedad: valor;) dentro de llaves.<br>
    💡 Tip: No olvides el punto y coma <b>';'</b> al final de cada declaración. Es un error común al principio.`,
    footerLinkInformation:
      "https://developer.mozilla.org/es/docs/Web/CSS/Syntax",
    footerLinkDemo: null,
    footerPreview: null,
    footerVideo: null,
    section: "Fundamentos CSS",
    order: 1,
  },
  {
    id: "como-aplicar-css",
    colClasses: "col-md-6",
    headerIcon: "🔗",
    headerTitle: "¿Cómo aplicar CSS?",
    codeLanguage: "html",
    codeSnippet: `&lt;link rel="stylesheet" href="style.css"&gt;
&lt;style&gt;
  h1 {
    color: blue;
  }
&lt;/style&gt;

&lt;p style="color: blue;"&gt;Texto azul&lt;/p&gt;`,
    bodyContent: null,
    bodyText:
      'Hay tres formas principales de vincular CSS a tu HTML. La más recomendada es la <b>externa</b> <code>&lt;link&gt;</code>, que mantiene tu código organizado. La interna <code>&lt;style&gt;</code> es para estilos específicos de una página, y  en línea <code>style=""</code> para cambios muy puntuales.<br>✔ Recomendación: Siempre busca usar archivos CSS externos. Facilita el mantenimiento y la reutilización de estilos.',
    footerLinkInformation:
      "https://developer.mozilla.org/es/docs/Web/CSS/Applying_CSS",
    footerLinkDemo: 'https://codepen.io/emiarias/pen/raVqKZO',
    footerPreview: null,
    footerVideo: null,
    section: "Fundamentos CSS",
    order: 2,
  },
//   selectores comunes
  {
    id: "selectores-comunes",
    colClasses: "col-md-6",
    headerIcon: "🎯",
    headerTitle: "Selectores CSS Comunes",
    codeLanguage: "css",
    codeSnippet: `/* Selector de Etiqueta (Tipo) */
h1 { color: blue; }

/* Selector de Clase */
.mi-clase { font-size: 18px; }

/* Selector de ID */
#mi-id { border: 1px solid black; }

/* Selector Universal */
* { margin: 0; padding: 0; }

/* Agrupación de Selectores */
h1, p { text-align: center; }`,
    bodyContent: null,
    bodyText:
      "Los selectores son la forma en que le decimos a CSS a qué elementos HTML aplicar estilos. Puedes seleccionar por tipo de etiqueta, por <strong>class</strong> (el más usado y flexible), por <strong>id</strong> (único por página), o todos los elementos. <br> 💡 Tip: Las clases ('.mi-clase') son tus mejores amigas para aplicar estilos a múltiples elementos similares y reutilizarlos.",
    footerLinkInformation:
      "https://developer.mozilla.org/es/docs/Web/CSS/CSS_Selectors",
    footerLinkDemo: 'https://codepen.io/emiarias/pen/EaxBpda',
    footerPreview: null,
    footerVideo: null,
    section: "Selectores",
    order: 3,
  },
  {
    id: "selectores-avanzados",
    colClasses: "col-md-6",
    headerIcon: "✨",
    headerTitle: "Selectores CSS Avanzados",
    codeLanguage: "css",
    codeSnippet: `/* Descendiente */
div p { background-color: lightgray; }

/* Hijo directo */
ul > li { list-style: none; }

/* Hermano adyacente */
h1 + p { margin-top: 20px; }

/* Hermano general */
h2 ~ p { font-style: italic; }

/* Atributo */
a[target="_blank"] { color: orange; }

/* Pseudo-clase (estado) */
a:hover { text-decoration: underline; }
input:focus { border-color: blue; }

/* Pseudo-elemento (parte de un elemento) */
p::first-line { font-weight: bold; }`,
    bodyContent: null,
    bodyText:
      "Además de los básicos, CSS tiene selectores que te permiten apuntar a elementos basándose en sus relaciones con otros (descendientes, hermanos) o en su estado (hover, focus). <br>💡 Tip: Dominar estos selectores te dará un control increíble sobre tus estilos sin necesidad de añadir más clases a tu HTML",
    footerLinkInformation:
      "https://developer.mozilla.org/es/docs/Web/CSS/CSS_Selectors",
    footerLinkDemo: 'https://codepen.io/emiarias/pen/poMPxZq',
    footerPreview: null,
    footerVideo: null,
    section: "Selectores",
    order: 4,
  },
  // --- Colores y Fondos ---
  {
    id: "colores-css",
    colClasses: "col-md-6",
    headerIcon: "🌈",
    headerTitle: "Colores en CSS",
    codeLanguage: "css",
    codeSnippet: `/* Por Nombre */
color: blue;

/* Hexadecimal */
color: #FF0000; /* Rojo */
background-color: #008000; /* Verde */

/* RGB */
color: rgb(255, 165, 0); /* Naranja */

/* RGBA (con transparencia) */
background-color: rgba(0, 0, 255, 0.5); /* Azul con 50% de opacidad */

/* HSL */
color: hsl(0, 100%, 50%); /* Rojo (hue, saturation, lightness) */

/* HSLA (con transparencia) */
background-color: hsla(120, 100%, 50%, 0.7); /* Verde con 70% de opacidad */`,
    bodyContent: null,
    bodyText:
      "CSS te da varias formas de especificar colores. Los nombres son simples, Hex y RGB son muy comunes, y RGBA/HSLA te permiten añadir transparencia (canal alfa).<br>💡 Tip: RGBA/HSLA son geniales para crear superposiciones semitransparentes o efectos de luz sutiles sin afectar la opacidad de los hijos.",
    footerLinkInformation:
      "https://developer.mozilla.org/es/docs/Web/CSS/color",
    footerLinkDemo: 'https://codepen.io/emiarias/pen/PwqyBBY',
    footerPreview: null,
    footerVideo: null,
    section: "Colores y Fondos",
    order: 5,
  },
  {
    id: "fondos-css",
    colClasses: "col-md-6",
    headerIcon: "🖼️",
    headerTitle: "Fondos (Backgrounds)",
    codeLanguage: "css",
    codeSnippet: `/* Color de fondo */
background-color: #f0f0f0;

/* Imagen de fondo */
background-image: url('imagen-fondo.jpg');

/* Repetición de imagen */
background-repeat: no-repeat; /* repeat-x, repeat-y, repeat */

/* Posición de imagen */
background-position: center top; /* top, bottom, left, right, center, o valores en px/% */

/* Tamaño de imagen (cubrir, contener, px, %) */
background-size: cover; /* o contain, 100% 100%, 200px 150px */

/* Adjunto (fijo o scroll) */
background-attachment: fixed; /* o scroll, local */

/* Propiedad shorthand para background */
background: #ccc url('pattern.png') no-repeat center / cover;`,
    bodyContent: null,
    bodyText:
      "Controlar los fondos te permite añadir colores, imágenes y patrones a tus elementos. Puedes definir cómo se repiten, dónde se posicionan, su tamaño y si se desplazan con el contenido.<br> 💡 Tip: Usa la propiedad <strong>background</strong> shorthand para escribir menos código y mantenerlo limpio cuando defines varios aspectos del fondo.",
    footerLinkInformation:
      "https://developer.mozilla.org/es/docs/Web/CSS/background",
    footerLinkDemo: null,
    footerPreview: null,
    footerVideo: null,
    section: "Colores y Fondos",
    order: 6,
  },
  // --- Modelo de Caja (Box Model) ---
  {
    id: "box-model",
    colClasses: "col-md-6",
    headerIcon: "📦",
    headerTitle: "El Modelo de Caja (Box Model)",
    codeLanguage: "css",
    codeSnippet: `/* Contenido */
width: 200px;
height: 150px;

/* Relleno (espacio entre contenido y borde) */
padding: 15px; /* Arriba, Derecha, Abajo, Izquierda */
padding-top: 10px;

/* Borde */
border: 2px solid black;
border-radius: 5px; /* Bordes redondeados */

/* Margen (espacio fuera del borde) */
margin: 20px auto; /* 20px arriba/abajo, auto izquierda/derecha (centrar) */
margin-left: 10px;

/* Cambiar cómo se calcula el tamaño */
box-sizing: border-box; /* Incluye padding y border en width/height */`,
    bodyContent: null,
    bodyText:
      "El modelo de caja es fundamental en CSS: todo elemento HTML se considera una caja con <b>contenido</b>, relleno (<strong>padding</strong>), borde (<strong>border</strong>) y margen (<strong>margin</strong>). Entender esto es clave para el diseño y el espaciado. <br>💡 Tip: Siempre usa <code>box-sizing: border-box;</code> en tus proyectos. Hace que los cálculos de tamaño sean mucho más intuitivos, ya que <b>width</b> y <b>height</b> incluirán el <b>padding</b> y el <b>border</b>.",
    footerLinkInformation:
      "https://developer.mozilla.org/es/docs/Web/CSS/CSS_Box_Model",
    footerLinkDemo: null,
    footerPreview: null,
    footerVideo: null,
    section: "Modelo de Caja",
    order: 7,
  },
  {
    id: "display-propiedad",
    colClasses: "col-md-6",
    headerIcon: "🔳",
    headerTitle: "Propiedad: display",
    codeLanguage: "css",
    codeSnippet: `/* Elementos de Bloque */
div { display: block; } /* Ocupan todo el ancho disponible */

/* Elementos en Línea */
span { display: inline; } /* Ocupan solo el ancho de su contenido */

/* Mezcla de ambos */
img { display: inline-block; } /* Se comportan como inline pero permiten width/height */

/* Para Flexbox */
.contenedor { display: flex; }

/* Para Grid */
.contenedor-grid { display: grid; }

/* Ocultar elemento */
.oculto { display: none; } /* No ocupa espacio, es como si no existiera */`,
    bodyContent: null,
    bodyText:
      "La propiedad <strong>display</strong> es una de las más importantes en CSS, ya que define el 'tipo de caja de renderizado' de un elemento. Determina cómo el elemento se comporta en relación con otros elementos.<br>💡 Tip: <code>display: inline-block;</code> es muy útil para imágenes o botones que quieres que estén uno al lado del otro pero que también puedan tener <b>width</b>, <b>height</b>, <b>padding</b> y <b>margin</b> sin romper la línea.",
    footerLinkInformation:
      "https://developer.mozilla.org/es/docs/Web/CSS/display",
    footerLinkDemo: null,
    footerPreview: null,
    footerVideo: null,
    section: "Modelo de Caja",
    order: 8,
  },
  // --- Texto y Tipografía ---
{
  id: "fuentes-css", // ID actualizado
  colClasses: "col-md-6 col-lg-4",
  headerIcon: "🖋️", // Nuevo ícono para tipografía/fuentes
  headerTitle: "Fuentes y Tipografía",
  codeLanguage: "css",
  codeSnippet: `/* Tamaño de fuente */
font-size: 16px; /* o 1em, 1.2rem, 2vw */

/* Familia de fuente */
font-family: "Helvetica Neue", Arial, sans-serif; /* Prioriza fuentes específicas, luego genéricas */

/* Peso de fuente (negrita, normal, etc.) */
font-weight: bold; /* o normal, lighter, bolder, 100-900 */

/* Estilo de fuente (cursiva, normal) */
font-style: italic; /* o normal, oblique */

/* Variantes de fuente (ej. small-caps) */
font-variant: small-caps; /* o normal */`,
  bodyContent: null,
  bodyText: "Estas propiedades controlan el tipo, tamaño y grosor de tus fuentes. Son fundamentales para la legibilidad y el estilo visual del texto.<br>✔ Recomendación: Siempre define una lista de 'font-family' con fuentes de respaldo (genéricas como 'sans-serif') por si la primera no está disponible. Además, <strong>rem</strong> o <strong>em</strong> son mejores que <strong>px</strong> para la accesibilidad del tamaño de fuente.",
  footerLinkInformation: "https://developer.mozilla.org/es/docs/Web/CSS/font", // Enlace más específico a MDN Font
  footerLinkDemo: null,
  footerPreview: null,
  footerVideo: null,
  section: "Tipografía",
  order: 9,
},
{
  id: "estilo-alineacion-texto", 
  colClasses: "col-md-6 col-lg-4",
  headerIcon: "✍️", 
  headerTitle: "Estilo y Alineación de Texto",
  codeLanguage: "css",
  codeSnippet: `/* Alineación horizontal del texto */
text-align: center; /* left, right, justify */

/* Decoración de texto (subrayado, tachado, etc.) */
text-decoration: none; /* underline, line-through, overline */
/* Puedes combinar: text-decoration: underline red wavy; */ // Propiedad adicional sugerida (combinación)

/* Transformación de texto (mayúsculas, minúsculas) */
text-transform: uppercase; /* lowercase, capitalize, none */

/* Sangría de la primera línea de un párrafo */
text-indent: 50px;`,
  bodyContent: null,
  bodyText: "Estas propiedades te permiten controlar la disposición y los efectos visuales del texto, como su alineación dentro de un elemento, si está subrayado o tachado, y su capitalización.",
  footerLinkInformation: "https://developer.mozilla.org/es/docs/Web/CSS/text-align", // Enlace más específico
  footerLinkDemo: null,
  footerPreview: null,
  footerVideo: null,
  section: "Tipografía",
  order: 10, 
},
{
  id: "espaciado-lineas-texto", 
  colClasses: "col-md-6 col-lg-4",
  headerIcon: "📏", 
  headerTitle: "Espaciado y Altura de Línea",
  codeLanguage: "css",
  codeSnippet: `/* Altura de línea (espacio entre líneas de texto) */
line-height: 1.5; /* Factor de la altura de la fuente (recomendado) o en px/em/rem */

/* Espaciado entre letras */
letter-spacing: 1px; /* Positivo para expandir, negativo para comprimir */

/* Espaciado entre palabras */
word-spacing: 2px; /* Positivo para expandir, negativo para comprimir */

/* Espacio en blanco (cómo se manejan los espacios y saltos de línea) */
white-space: normal; /* nowrap | pre | pre-wrap | pre-line */`, 
  bodyContent: null,
  bodyText: "Estas propiedades te permiten ajustar el espaciado entre líneas, letras y palabras, lo cual es crucial para la legibilidad de tu contenido.<br>💡 Tip: Un <code>line-height</code> entre '1.4' y '1.6' suele ser óptimo para la lectura en la mayoría de los textos. Experimenta para encontrar el equilibrio perfecto que evite que el texto se vea demasiado denso o disperso.",
  footerLinkInformation: "https://developer.mozilla.org/es/docs/Web/CSS/line-height", 
  footerLinkDemo: null,
  footerPreview: null,
  footerVideo: null,
  section: "Tipografía",
  order: 11, 
},
  // --- Posicionamiento ---
  {
    id: "posicionamiento",
    colClasses: "col-md-6 col-lg-8",
    headerIcon: "📍",
    headerTitle: "Posicionamiento (Position)",
    codeLanguage: "css",
    codeSnippet: `/* Posicionamiento Estático (por defecto) */
.estatico {
  position: static; /* El elemento sigue el flujo normal del documento */
}

/* Posicionamiento Relativo */
.relativo {
  position: relative;
  top: 10px; /* Se mueve 10px hacia abajo desde su posición normal */
  left: 20px; /* Se mueve 20px a la derecha */
}

/* Posicionamiento Absoluto */
.absoluto {
  position: absolute;
  top: 0;
  right: 0; /* Se posiciona con respecto al ancestro posicionado más cercano */
}

/* Posicionamiento Fijo */
.fijo {
  position: fixed;
  top: 0;
  width: 100%; /* Permanece fijo en la ventana del navegador al hacer scroll */
}

/* Posicionamiento Sticky (pegado) */
.pegado {
  position: sticky;
  top: 0; /* Permanece en el flujo hasta que alcanza 0px desde arriba del viewport, luego se fija */
}`,
    bodyContent: null,
    bodyText:
      "La propiedad <strong>position</strong> te da control sobre la ubicación exacta de los elementos en tu página. Cada valor cambia la forma en que el elemento se comporta en el flujo del documento y cómo reacciona a las propiedades <strong>top</strong>, <strong>right</strong>, <strong>bottom</strong>, <strong>left</strong>.<br>💡 Tip: <code>position: absolute;</code> se posiciona respecto al primer ancestro <b>no estático</b>. Si no hay uno, se posiciona respecto al &lt;body&gt;`. Tenlo en cuenta para evitar sorpresas.",
    footerLinkInformation:
      "https://developer.mozilla.org/es/docs/Web/CSS/position",
    footerLinkDemo: null,
    footerPreview: null,
    footerVideo: null,
    section: "Posicionamiento",
    order: 10,
  },
  {
    id: "z-index",
    colClasses: "col-md-6 col-lg-4",
    headerIcon: "⬆️",
    headerTitle: "Z-index (Capas)",
    codeLanguage: "css",
    codeSnippet: `/* Para elementos posicionados */
.capa-superior {
  position: absolute; /* o relative, fixed, sticky */
  z-index: 10; /* Este elemento aparecerá por encima de otros con menor z-index */
}

.capa-inferior {
  position: absolute;
  z-index: 5; /* Este elemento estará por debajo */
}

/* Sin z-index, el orden en el HTML y el tipo de posicionamiento definen el apilamiento */`,
    bodyContent: null,
    bodyText:
      'La propiedad <code>z-index</code> controla el orden de apilamiento de los elementos que tienen una <strong>position</strong> diferente de <strong>static</strong>. Un <code>z-index</code> mayor significa que el elemento se verá "más arriba" o por encima de otros.',
    footerLinkInformation:
      "https://developer.mozilla.org/es/docs/Web/CSS/z-index",
    footerLinkDemo: null,
    footerPreview: null,
    footerVideo: null,
    section: "Posicionamiento",
    order: 11,
  },
  // --- Flexbox ---
  {
    id: "flexbox-contenedor",
    colClasses: "col-md-6",
    headerIcon: "↔️",
    headerTitle: "Flexbox: Contenedor Flexible",
    codeLanguage: "css",
    codeSnippet: `/* Activación de Flexbox */
.flex-container {
  display: flex; /* Convierte el elemento en un contenedor flex */
  /* o display: inline-flex; para un contenedor en línea */
}

/* Dirección de los ítems */
.flex-container {
  flex-direction: row; /* row | row-reverse | column | column-reverse */
}

/* Envoltura de ítems */
.flex-container {
  flex-wrap: wrap; /* nowrap | wrap | wrap-reverse */
}

/* Alinear ítems en el eje principal */
.flex-container {
  justify-content: center; /* flex-start | flex-end | center | space-between | space-around | space-evenly */
}

/* Alinear ítems en el eje cruzado o secundario*/
.flex-container {
  align-items: center; /* flex-start | flex-end | center | baseline | stretch */
}

/* Alinear líneas de ítems (con flex-wrap) */
.flex-container {
  align-content: center; /* flex-start | flex-end | center | space-between | space-around | stretch */
}`,
    bodyContent: null,
    bodyText:
      "<strong>Flexbox</strong> es un modelo de diseño unidimensional para organizar elementos en filas o columnas de manera eficiente. Las propiedades se aplican al <b>contenedor padre</b> <code>display: flex</code>. <br>💡 Tip: Flexbox es una herramienta poderosa para alinear y distribuir elementos. Practica mucho con <code>justify-content</code> y <code>align-items</code> para controlar la distribución de tus ítems.",
    footerLinkInformation:
      "https://developer.mozilla.org/es/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox",
    footerLinkDemo: null,
    footerPreview: null,
    footerVideo: null,
    section: "Flexbox",
    order: 12,
  },
  {
    id: "flexbox-items",
    colClasses: "col-md-6 col-lg-6",
    headerIcon: "📦",
    headerTitle: "Flexbox: Ítems Flexibles",
    codeLanguage: "css",
    codeSnippet: `/* Orden de los ítems */
.flex-item {
  order: 1; /* Valor numérico; 0 es por defecto */
}

/* Cómo crece el ítem */
.flex-item {
  flex-grow: 1; /* Factor de crecimiento, 0 por defecto */
}

/* Cómo se encoge el ítem */
.flex-item {
  flex-shrink: 1; /* Factor de encogimiento, 1 por defecto */
}

/* Tamaño base del ítem */
.flex-item {
  flex-basis: 100px; /* Ancho inicial del ítem, puede ser px, % */
}

/* Shorthand para grow, shrink, basis */
.flex-item {
  flex: 1 1 auto; /* flex-grow flex-shrink flex-basis */
}

/* Auto-alineación individual */
.flex-item {
  align-self: center; /* flex-start | flex-end | center | baseline | stretch */
}`,
    bodyContent: null,
    bodyText:
      "Estas propiedades se aplican a los <b>ítems hijos</b> dentro de un contenedor Flexbox. Te permiten controlar su tamaño individual, el orden en que aparecen y su alineación, sobrescribiendo la configuración del contenedor. <br>💡 Tip: <code>flex: 1;</code> es un shorthand muy común que significa <code>flex-grow: 1; flex-shrink: 1; flex-basis: 0%;</code>, haciendo que el ítem crezca y se encoja para ocupar el espacio disponible.",
    footerLinkInformation:
      "https://developer.mozilla.org/es/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox",
    footerLinkDemo: null,
    footerPreview: null,
    footerVideo: null,
    section: "Flexbox",
    order: 13,
  },
  // --- Grid CSS ---
  {
    id: "grid-contenedor",
    colClasses: "col-md-6",
    headerIcon: "🔢",
    headerTitle: "CSS Grid: Contenedor de Cuadrícula",
    codeLanguage: "css",
    codeSnippet: `/* Activación de Grid */
.grid-container {
  display: grid; /* Convierte el elemento en un contenedor de cuadrícula */
  /* o display: inline-grid; */
}

/* Definir columnas explícitas */
.grid-container {
  grid-template-columns: 1fr 2fr 1fr; /* Tres columnas con proporciones */
  /* o grid-template-columns: 100px 1fr auto; */
}

/* Definir filas explícitas */
.grid-container {
  grid-template-rows: auto 100px 1fr;
}

/* Espacio entre celdas (filas y columnas) */
.grid-container {
  gap: 20px; /* o row-gap: 10px; column-gap: 30px; */
}

/* Alinear contenido dentro de celdas (eje horizontal) */
.grid-container {
  justify-items: center; /* start | end | center | stretch */
}

/* Alinear contenido dentro de celdas (eje vertical) */
.grid-container {
  align-items: center; /* start | end | center | stretch */
}

/* Alinear toda la cuadrícula dentro del contenedor */
.grid-container {
  justify-content: center; /* start | end | center | space-between | space-around | space-evenly */
  align-content: center; /* start | end | center | space-between | space-around | space-evenly */
}`,
    bodyContent: null,
    bodyText:
      "<strong>CSS Grid</strong> es un modelo de diseño bidimensional para organizar contenido en filas y columnas, ideal para layouts complejos. Las propiedades se aplican al <b>contenedor padre</b> <code>display: grid</code>.💡 Tip: La unidad 'fr' (fracción) es increíblemente útil para crear columnas y filas flexibles que se adaptan al espacio disponible. ¡Es una de las mayores ventajas de Grid!",
    footerLinkInformation:
      "https://developer.mozilla.org/es/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout",
    footerLinkDemo: null,
    footerPreview: null,
    footerVideo: null,
    section: "CSS Grid",
    order: 14,
  },
  {
    id: "grid-items",
    colClasses: "col-md-6",
    headerIcon: "📍",
    headerTitle: "CSS Grid: Ítems de Cuadrícula",
    codeLanguage: "css",
    codeSnippet: `/* Posicionar en columnas */
.grid-item {
  grid-column-start: 1; /* O línea de inicio */
  grid-column-end: 3; /* O línea de fin */
  /* Shorthand */
  grid-column: 1 / 3; /* De línea 1 a línea 3 */
  /* O abarcar N columnas */
  grid-column: span 2;
}

/* Posicionar en filas */
.grid-item {
  grid-row-start: 2;
  grid-row-end: 4;
  /* Shorthand */
  grid-row: 2 / 4;
  /* O abarcar N filas */
  grid-row: span 2;
}

/* Posicionar en área nombrada (si definida en el contenedor) */
.grid-item {
  grid-area: header;
}

/* Auto-alineación individual */
.grid-item {
  justify-self: center; /* start | end | center | stretch */
  align-self: center; /* start | end | center | stretch */
}`,
    bodyContent: null,
    bodyText:
      "Estas propiedades se aplican a los <b>ítems hijos</b> dentro de un contenedor Grid. Te permiten controlar dónde se ubican los ítems en la cuadrícula, cuántas celdas ocupan y su alineación individual.<br>💡 Tip: Las propiedades <strong>grid-column</strong> y <strong>grid-row</strong> con <strong>span</strong> son muy prácticas para hacer que un elemento ocupe varias celdas sin tener que preocuparte por el número exacto de líneas.",
    footerLinkInformation:
      "https://developer.mozilla.org/es/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout",
    footerLinkDemo: null,
    footerPreview: null,
    footerVideo: null,
    section: "CSS Grid",
    order: 15,
  },
  // --- Responsive Design ---
  {
    id: "media-queries",
    colClasses: "col-md-6",
    headerIcon: "📏",
    headerTitle: "Media Queries (Diseño Responsive)",
    codeLanguage: "css",
    codeSnippet: `/* Aplicar estilos solo si el ancho de la pantalla es menor o igual a 768px */
@media screen and (max-width: 768px) {
  body {
    font-size: 14px;
  }
  .sidebar {
    display: none; /* Oculta la barra lateral en pantallas pequeñas */
  }
}

/* Aplicar estilos solo para impresión */
@media print {
  body {
    color: black;
    font-size: 12pt;
  }
  a {
    text-decoration: none; /* Elimina subrayado en enlaces al imprimir */
  }
}`,
    bodyContent: null,
    bodyText:
      'Las Media Queries son la piedra angular del <strong>Diseño Responsive</strong>. Te permiten aplicar diferentes conjuntos de estilos CSS basándose en las características del dispositivo del usuario (ej. ancho de pantalla, altura, orientación, tipo de medio como impresión).<br>💡 Tip: Usa <code>max-width</code> para estilos "Mobile First" (primero móviles, luego escritorio) y <code>min-width</code> para "Desktop First". ¡Esencial para que tu web se vea bien en cualquier dispositivo!',
    footerLinkInformation:
      "https://developer.mozilla.org/es/docs/Web/CSS/CSS_media_queries",
    footerLinkDemo: null,
    footerPreview: null,
    footerVideo: null,
    section: "Diseño Responsive",
    order: 16,
  },
];
