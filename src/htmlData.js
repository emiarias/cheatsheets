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
  },
];
