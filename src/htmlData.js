// js/htmlData.js

export const htmlCheatsheetData = [
  {
    id: "sintaxis-html",
    colClasses: "col-md-6 ",
    headerIcon: "🧩",
    headerTitle: "Sintaxis HTML",
    codeLanguage: "html",
    codeSnippet: `&lt;elemento atributo = "valor"&gt; contenido &lt;/elemento&gt;`,
    bodyContent: null,
    bodyText: null,
    footerLinkInformation: null,
    footerLinkDemo: null,
    footerPreview: null,
    footerVideo: null,
      section: "Fundamentos", // Nueva propiedad
    order: 1, // Nueva propiedad
  },
  {
    id: "descargas",
    colClasses: "col-md-6",
    headerIcon: "🧩",
    headerTitle: "Descargas",
    codeLanguage: "html",
    codeSnippet: null,
    bodyContent: "aqui agregare recursos para descargar",
    bodyText: null,
    footerLinkInformation: null,
    footerLinkDemo: null,
    footerPreview: null,
    footerVideo: null,
      section: "Fundamentos", // Nueva propiedad
    order: 1, // Nueva propiedad
  },
  {
    id: "estructura-basica",
    colClasses: "col-md-6 col-lg-4",
    headerIcon: "📌",
    headerTitle: "Estructura básica de un documento HTML",
    codeLanguage: "html",
    codeSnippet: `&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8" /&gt;
  &lt;meta http-equiv="X-UA-Compatible" content="IE=edge" /&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1.0" /&gt;
  &lt;title&gt;Título de la página&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;!-- Contenido visible va aquí --&gt;
&lt;/body&gt;
&lt;/html&gt;`,
    bodyContent: null,
    bodyText: null,
    footerLinkInformation: "https://developer.mozilla.org/es/docs/Learn_web_development/Core/Structuring_content/Structuring_documents",
    footerLinkDemo: null,
    footerPreview: null,
    footerVideo: null,
      section: "Estructura", // Nueva propiedad
    order: 2, // Nueva propiedad
  },
  {
    id: "meta-tags",
    colClasses: "col-md-6 col-lg-4",
    headerIcon: "🌐",
    headerTitle: "Meta Tags Esenciales & Enlaces",
    codeLanguage: "html",
    codeSnippet: `&lt;meta charset="UTF-8"&gt;
&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
&lt;meta name="description" content="Una descripción breve"&gt;
&lt;meta name="keywords" content="html, css, js"&gt;
&lt;title&gt;Mi Página&lt;/title&gt;

&lt;link rel="stylesheet" href="ruta/a/estilos.css"&gt;
&lt;link rel="icon" href="favicon.ico" type="image/x-icon"&gt;`,
    bodyContent: null,
    bodyText: 'Las meta etiquetas proporcionan información crucial sobre tu página, como la codificación de caracteres, la descripción y el viewport. También se incluyen enlaces a CSS.',
    footerLinkInformation: null,
    footerLinkDemo: null,
    footerPreview: null,
    footerVideo: null,
    section: "Estructura", 
    order: 2, 
  },
  {
    id: "meta-tags",
    colClasses: "col-md-6 col-lg-4",
    headerIcon: "🌐",
    headerTitle: "Comenarios",
    codeLanguage: "html",
    codeSnippet: `&lt;!-- Esto es un comentario --&gt;

&lt;!-- tambien puedes agregar un comentario
de varias lineas --&gt;`,
    bodyContent: null,
    bodyText: `Los comentarios en HTML son súper útiles para documentar tu código, explicando secciones complejas o dejando notas para ti mismo o para otros desarrolladores que puedan trabajar en el proyecto.
     No aparecen en el navegador, son perfectos para hacer que tu código sea más claro, fácil de mantener y de entender a futuro, especialmente en proyectos grandes o cuando trabajas en equipo.`,
    footerLinkInformation: null,
    footerLinkDemo: null,
    footerPreview: null,
    footerVideo: null,
      section: "Estructura", 
    order: 2, 
  },
  {
    id: "meta-tags",
    colClasses: "col-md-6 col-lg-4",
    headerIcon: "🧱",
    headerTitle: "Contenedores y organización",
    codeLanguage: "html",
    codeSnippet: `&lt;header&gt;Encabezado&lt;/header&gt; &lt;!-- Semántica --&gt;
&lt;main&gt;Contenido principal&lt;/main&gt; &lt;!-- Semántica --&gt;
&lt;footer&gt;Pie de página &lt;/footer&gt; &lt;!-- Semántica --&gt;
&lt;nav&gt;Menú de navegación&lt;/nav&gt; &lt;!-- Semántica --&gt;
&lt;div&gt;Bloque genérico &lt;/div&gt; &lt;!-- No semántica --&gt;
&lt;section&gt;Sección &lt;/section&gt; &lt;!-- Semántica --&gt;
&lt;article&gt;Artículo independiente&lt;/article&gt; &lt;!-- Semántica --&gt;
&lt;aside&gt;Contenido lateral&lt;/aside&gt; &lt;!-- Semántica --&gt;`,
    bodyContent: null,
    bodyText: 'Usa estas etiquetas para organizar tu contenido de forma semántica y mejorar la estructura de tu documento.',
    footerLinkInformation: null,
    footerLinkDemo: null,
    footerPreview: null,
    footerVideo: null,
    section: "Etiquetas", 
    order: 3, 
  },
  {
    id: "encabezados-parrafos",
    colClasses: "col-md-6 col-lg-4",
    headerIcon: "📝",
    headerTitle: "Encabezados y Párrafos",
    codeLanguage: "html",
    codeSnippet: `&lt;h1&gt;Título Principal&lt;/h1&gt;
&lt;h2&gt;Subtítulo Nivel 2&lt;/h2&gt;
&lt;h3&gt;Subtítulo Nivel 3&lt;/h3&gt;
&lt;h4&gt;Subtítulo Nivel 4&lt;/h4&gt;
&lt;h5&gt;Subtítulo Nivel 5&lt;/h5&gt;
&lt;h6&gt;Subtítulo Nivel 6&lt;/h6&gt;

&lt;p&gt;Este es un párrafo de texto.
&lt;br&gt;Aquí hay un salto de línea.&lt;/p&gt;`,
    bodyContent: null,
    bodyText: 'Define la jerarquía de tus títulos (h1 es el más importante) y estructura el texto en párrafos.',
    footerLinkInformation: null,
    footerLinkDemo: null,
    footerPreview: null,
    footerVideo: null,
    section: "Etiquetas", 
    order: 3, 
  },
  {
    id: "formato-enfasis",
    colClasses: "col-md-6 col-lg-4",
    headerIcon: "✨",
    headerTitle: "Formato y Énfasis de Texto",
    codeLanguage: "html",
    codeSnippet: `&lt;p&gt;&lt;strong&gt;Texto semanticamente importante&lt;/strong&gt; &lt;b&gt;negrita&lt;/b&gt;.&lt;/p&gt;
&lt;p&gt;&lt;em&gt;Énfasis&lt;/em&gt; &lt;i&gt;cursiva&lt;/i&gt;.&lt;/p&gt;
&lt;p&gt;&lt;mark&gt;Texto resaltado&lt;/mark&gt;. &lt;small&gt;Texto pequeño&lt;/small&gt;.&lt;/p&gt;
&lt;p&gt;Código: &lt;code&gt;console.log("Hola");&lt;/code&gt;&lt;/p&gt;
&lt;pre&gt;&lt;code&gt;Bloque de código
con varias líneas.&lt;/code&gt;&lt;/pre&gt;
&lt;p&gt;Fórmula H&lt;sub&gt;2&lt;/sub&gt;O, potencia 2&lt;sup&gt;3&lt;/sup&gt;.&lt;/p&gt;`,
    bodyContent: null,
    bodyText: 'Aplica estilos de texto como negrita, cursiva, resaltado y muestra bloques de código con estas etiquetas.',
    footerLinkInformation: null,
    footerLinkDemo: null,
    footerPreview: null,
    footerVideo: null,
    section: "Etiquetas", 
    order: 3, 
  },
  {
    id: "citas-semantica",
    colClasses: "col-md-6 col-lg-4",
    headerIcon: "🗣️",
    headerTitle: "Citas y Semántica de Contenido",
    codeLanguage: "html",
    codeSnippet: `&lt;blockquote cite="http://www.example.com/quote"&gt;
  &lt;p&gt;Este es un bloque de cita.&lt;/p&gt;
&lt;/blockquote&gt;
&lt;p&gt;Me dijo: &lt;q&gt;Hola mundo&lt;/q&gt;.&lt;/p&gt;
&lt;p&gt;La &lt;abbr title="Organización Mundial de la Salud"&gt;OMS&lt;/abbr&gt;.&lt;/p&gt;
&lt;address&gt;
  Escrito por &lt;a href="mailto:ejemplo@email.com"&gt;John Doe&lt;/a&gt;.
&lt;/address&gt;`,
    bodyContent: null,
    bodyText: null,
    footerLinkInformation: null,
    footerLinkDemo: null,
    footerPreview: null,
    footerVideo: null,
    section: "Etiquetas", 
    order: 3, 
  },
  {
    id: "enlaces",
    colClasses: "col-md-6 col-lg-4",
    headerIcon: "🔗",
    headerTitle: "Enlaces (Hyperlinks)",
    codeLanguage: "html",
    codeSnippet: `&lt;a href="https://ejemplo.com"&gt;Visitar Ejemplo&lt;/a&gt;
&lt;a href="pagina.html"&gt;Ir a Página Interna&lt;/a&gt;
&lt;a href="https://ejemplo.com" target="_blank" rel="noopener noreferrer"&gt;
  Abrir en nueva pestaña
&lt;/a&gt;
&lt;a href="#seccion"&gt;Ir a sección en esta página&lt;/a&gt;
&lt;a href="mailto:email@example.com"&gt;Enviar Email&lt;/a&gt;
&lt;a href="tel:+123456789"&gt;Llamar&lt;/a&gt;`,
    bodyContent: null,
    bodyText: null,
    footerLinkInformation: null,
    footerLinkDemo: null,
    footerPreview: null,
    footerVideo: null,
    section: "Etiquetas", 
    order: 3, 
  },
];
