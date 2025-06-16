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
    footerLinkInformation:
      "https://developer.mozilla.org/es/docs/Learn_web_development/Core/Structuring_content/Structuring_documents",
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
    bodyText:
      "Las meta etiquetas proporcionan información crucial sobre tu página, como la codificación de caracteres, la descripción y el viewport. También se incluyen enlaces a CSS.",
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
    bodyText:
      "Usa estas etiquetas para organizar tu contenido de forma semántica y mejorar la estructura de tu documento.",
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
    bodyText:
      "Define la jerarquía de tus títulos (h1 es el más importante) y estructura el texto en párrafos.",
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
    bodyText:
      "Aplica estilos de texto como negrita, cursiva, resaltado y muestra bloques de código con estas etiquetas.",
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
  {
    id: "imagenes",
    colClasses: "col-md-6 col-lg-4",
    headerIcon: "🖼️",
    headerTitle: "Imágenes",
    codeLanguage: "html",
    codeSnippet: `&lt;img src="ruta/imagen.jpg" alt="Descripción de la imagen"&gt;
&lt;img src="logo.png" alt="Logo" width="100" height="50"&gt;

&lt;figure&gt;
  &lt;img src="ruta/foto.jpg" alt="Persona"&gt;
  &lt;figcaption&gt;Una persona sonriendo.&lt;/figcaption&gt;
&lt;/figure&gt;`,
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
    id: "lista-desordenada",
    colClasses: "col-md-6 col-lg-4",
    headerIcon: "📋",
    headerTitle: "Listas No Ordenadas",
    codeLanguage: "html",
    codeSnippet: `&lt;ul&gt;
  &lt;li&gt;Elemento uno&lt;/li&gt;
  &lt;li&gt;Elemento dos&lt;/li&gt;
  &lt;li&gt;Elemento tres&lt;/li&gt;
&lt;/ul&gt;`,
    bodyContent: null,
    bodyText: null,
    footerLinkInformation: null,
    footerLinkDemo: null,
    footerPreview: null,
    footerVideo: null,
    section: "Listas",
    order: 4,
  },
  {
    id: "lista-ordenada",
    colClasses: "col-md-6 col-lg-4",
    headerIcon: "🔢",
    headerTitle: "Listas Ordenadas",
    codeLanguage: "html",
    codeSnippet: `&lt;ol&gt;
  &lt;li&gt;Primer paso&lt;/li&gt;
  &lt;li&gt;Segundo paso&lt;/li&gt;
  &lt;li&gt;Tercer paso&lt;/li&gt;
&lt;/ol&gt;

&lt;ol type="A" start="3"&gt;
  &lt;li&gt;Paso C&lt;/li&gt;
  &lt;li&gt;Paso D&lt;/li&gt;
&lt;/ol&gt;`,
    bodyContent: null,
    bodyText: null,
    footerLinkInformation: null,
    footerLinkDemo: null,
    footerPreview: null,
    footerVideo: null,
    section: "Listas",
    order: 4,
  },
  {
    id: "lista-definiciones",
    colClasses: "col-md-6 col-lg-4",
    headerIcon: "📚",
    headerTitle: "Listas de Definiciones",
    codeLanguage: "html",
    codeSnippet: `&lt;dl&gt;
  &lt;dt&gt;HTML&lt;/dt&gt;
  &lt;dd&gt;Lenguaje de Marcado de Hipertexto.&lt;/dd&gt;
  &lt;dt&gt;CSS&lt;/dt&gt;
  &lt;dd&gt;Hojas de Estilo en Cascada.&lt;/dd&gt;
&lt;/dl&gt;`,
    bodyContent: null,
    bodyText: null,
    footerLinkInformation: null,
    footerLinkDemo: null,
    footerPreview: null,
    footerVideo: null,
    section: "Listas",
    order: 4,
  },
  {
    id: "Tablas",
    colClasses: "col-md-6 col-lg-4",
    headerIcon: "📊",
    headerTitle: "Tablas HTML",
    codeLanguage: "html",
    codeSnippet: `&lt;table class="table"&gt;
  &lt;caption&gt;Datos de Usuarios&lt;/caption&gt;
  &lt;thead&gt;
    &lt;tr&gt;
      &lt;th&gt;Nombre&lt;/th&gt;
      &lt;th&gt;Apellido&lt;/th&gt;
      &lt;th&gt;Email&lt;/th&gt;
    &lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr&gt;
      &lt;td&gt;Juan&lt;/td&gt;
      &lt;td&gt;Pérez&lt;/td&gt;
      &lt;td&gt;juan@example.com&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;td colspan="2"&gt;Juan Pablo&lt;/td&gt;
      &lt;td rowspan="2"&gt;contacto@example.com&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
  &lt;tfoot&gt;
    &lt;tr&gt;
      &lt;td colspan="3"&gt;Total de usuarios: 2&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tfoot&gt;
&lt;/table&gt;`,
    bodyContent: null,
    bodyText: null,
    footerLinkInformation: null,
    footerLinkDemo: null,
    footerPreview: null,
    footerVideo: null,
    section: "Tablas",
    order: 5,
  },
  {
    id: "Tablas",
    colClasses: "col-md-6 col-lg-4",
    headerIcon: "🔖",
    headerTitle: "Etiquetas de tabla",
    codeLanguage: "html",
    codeSnippet: null,
    bodyContent: `<div class="table-responsive">
    <table class="table">
  <thead>
    <tr>
      <th scope="col">Etiqueta</th>
      <th scope="col">Descripción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>&lt;table&gt;</td>
      <td>Define una tabla</td>
    </tr>
    <tr>
      <td>&lt;thead&gt;</td>
      <td>Contenedor del encabezado de la tabla</td>
    </tr>
    <tr>
      <td>&lt;tbody&gt;</td>
      <td>Contenedor del cuerpo de la tabla</td>
    </tr>
    <tr>
      <td>&lt;tfoot&gt;</td>
      <td>Contenedor del pie de tabla</td>
    </tr>
    <tr>
      <td>&lt;tr&gt;</td>
      <td>Fila de la tabla</td>
    </tr>
    <tr>
      <td>&lt;th&gt;</td>
      <td>Celda del encabezado</td>
    </tr>
    <tr>
      <td>&lt;td&gt;</td>
      <td>Celda del cuerpo de la tabla</td>
    </tr>
   
  </tbody>
</table>
    </div>`,
    bodyText: null,
    footerLinkInformation: null,
    footerLinkDemo: null,
    footerPreview: null,
    footerVideo: null,
    section: "Tablas",
    order: 5,
  },
  {
    id: "Tablas",
    colClasses: "col-md-6 col-lg-4",
    headerIcon: "🃏",
    headerTitle: "Atributos de tabla",
    codeLanguage: "html",
    codeSnippet: null,
    bodyContent: `<div class="table-responsive">
    <table class="table">
  <thead>
    <tr>
      <th scope="col">Atributo</th>
      <th scope="col">Etiquetas</th>
      <th scope="col">Descripción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>colspan</td>
      <td>&lt;td&gt;, &lt;th&gt;</td>
      <td>Número columnas que debe abarcar una celda</td>
    </tr>
       <tr>
      <td>rowspan</td>
      <td>&lt;td&gt;, &lt;th&gt;</td>
      <td>Número de filas que debe abarcar una celda</td>
    </tr>
     <tr>
      <td>headers</td>
      <td>&lt;td&gt;, &lt;th&gt;</td>
      <td>Asocia explícitamente una celda de datos, con una o más celdas de encabezado</td>
    </tr>
    <tr>
      <td>scope</td>
      <td>&lt;th&gt;</td>
      <td>Especifica si una celda de encabezado (th) se aplica a un grupo de celdas de datos en una fila (row), en una columna (col), en un grupo de filas (rowgroup) o en un grupo de columnas (colgroup).</td>
    </tr>
  </tbody>
</table>
    </div>`,
    bodyText: null,
    footerLinkInformation: null,
    footerLinkDemo: null,
    footerPreview: null,
    footerVideo: null,
    section: "Tablas",
    order: 5,
  },
  {
    id: "formularios",
    colClasses: "col-md-6 col-lg-4",
    headerIcon: "📝",
    headerTitle: "Estructura Básica de Formularios",
    codeLanguage: "html",
    codeSnippet: `&lt;form action="/submit-form" method="POST"&gt;
  &lt;label for="username"&gt;Usuario:&lt;/label&gt;
  &lt;input type="text" id="username" name="username" required&gt;

  &lt;label for="password"&gt;Contraseña:&lt;/label&gt;
  &lt;input type="password" id="password" name="password" placeholder="Min. 8 caracteres"&gt;

  &lt;button type="submit"&gt;Enviar&lt;/button&gt;
  &lt;button type="reset"&gt;Limpiar&lt;/button&gt;
&lt;/form&gt;`,
    bodyContent: null,
    bodyText: null,
    footerLinkInformation: null,
    footerLinkDemo: null,
    footerPreview: null,
    footerVideo: null,
    section: "Formularios",
    order: 6,
  },
  {
    id: "tipos-elementos-formulario",
    colClasses: "col-md-6 col-lg-4",
    headerIcon: "📝",
    headerTitle: "Tipos de Input y Otros Controles",
    codeLanguage: "html",
    codeSnippet: `&lt;label for="email"&gt;Email:&lt;/label&gt;
&lt;input type="email" id="email"&gt;

&lt;label for="qty"&gt;Cantidad:&lt;/label&gt;
&lt;input type="number" id="qty" min="1" max="10" value="1"&gt;

&lt;input type="checkbox" id="agree"&gt;
&lt;label for="agree"&gt;Acepto términos&lt;/label&gt;

&lt;input type="radio" id="male" name="gender" value="male"&gt;
&lt;label for="male"&gt;Masculino&lt;/label&gt;

&lt;label for="comments"&gt;Comentarios:&lt;/label&gt;
&lt;textarea id="comments" rows="3"&gt;&lt;/textarea&gt;

&lt;label for="country"&gt;País:&lt;/label&gt;
&lt;select id="country"&gt;
  &lt;option value="ar"&gt;Argentina&lt;/option&gt;
  &lt;option value="mx"&gt;México&lt;/option&gt;
&lt;/select&gt;`,
    bodyContent: null,
    bodyText: null,
    footerLinkInformation: null,
    footerLinkDemo: null,
    footerPreview: null,
    footerVideo: null,
    section: "Formularios",
    order: 6,
  },
  {
    id: "atributos-formulario",
    colClasses: "col-md-6 col-lg-4",
    headerIcon: "🃏",
    headerTitle: "Atributos de formulario",
    codeLanguage: "html",
    codeSnippet: null,
    bodyContent: `<div class="table-responsive">
    <table class="table">
  <thead>
    <tr>
      <th scope="col">Atributo</th>
      <th scope="col">Descripción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>name</td>
      <td>Nombre de formulario</td>
    </tr>
       <tr>
      <td>action</td>
      <td>URL del script del formulario</td>
    </tr>
     <tr>
      <td>method</td>
      <td>Método HTTP, post o get</td>
    </tr>
  </tbody>
</table>
    </div>`,
    bodyText: null,
    footerLinkInformation: null,
    footerLinkDemo: null,
    footerPreview: null,
    footerVideo: null,
    section: "Formularios",
    order: 6,
  },
  {
    id: "audio-video",
    colClasses: "col-md-6 col-lg-4",
    headerIcon: "🎵",
    headerTitle: "Audio",
    codeLanguage: "html",
    codeSnippet: `&lt;audio controls loop autoplay muted&gt;
  &lt;source src="audio.mp3" type="audio/mpeg"&gt;
  Tu navegador no soporta audio.
&lt;/audio&gt;`,
    bodyContent: `<audio controls class="w-100">
 <source src="../assets/audio/insecto.mp3" type="audio/mpeg">
  Tu navegador no soporta audio.
</audio>`,
    bodyText: null,
    footerLinkInformation: null,
    footerLinkDemo: null,
    footerPreview: null,
    footerVideo: null,
    section: "Media",
    order: 7,
  },
  {
    id: "video",
    colClasses: "col-md-6 col-lg-4",
    headerIcon: "🎬",
    headerTitle: "Vídeo",
    codeLanguage: "html",
    codeSnippet: `&lt;video controls width="300" height="200" poster="preview.jpg"&gt;
  &lt;source src="video.mp4" type="video/mp4"&gt;
  Tu navegador no soporta video.
&lt;/video&gt;`,
    bodyContent: `<video controls class="img-fluid" height="200" poster="../assets/img/videoframe.png">
  <source src="https://videos.pexels.com/video-files/12290609/12290609-uhd_2560_1440_30fps.mp4" type="video/mp4">
  Tu navegador no soporta video.
</video>`,
    bodyText: null,
    footerLinkInformation: null,
    footerLinkDemo: null,
    footerPreview: null,
    footerVideo: null,
    section: "Media",
    order: 7,
  },
  {
    id: "iframe",
    colClasses: "col-md-6 col-lg-4",
    headerIcon: "🖥️",
    headerTitle: "Iframes (Contenido Externo)",
    codeLanguage: "html",
    codeSnippet: `&lt;iframe 
  src="https://www.google.com/maps/embed" 
  width="560" 
  height="315" 
  title="Maps video player" 
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
  allowfullscreen&gt;
&lt;/iframe&gt;`,
    bodyContent: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14240.859733970994!2d-65.21414151420274!3d-26.833115279836335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c0febbe97db%3A0x65937e9ca09416ef!2sMuseo%20casa%20hist%C3%B3rica%20de%20la%20Independencia%20Tucum%C3%A1n!5e0!3m2!1ses-419!2sar!4v1750085099719!5m2!1ses-419!2sar" height="250" class="w-100" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
    bodyText: null,
    footerLinkInformation: null,
    footerLinkDemo: null,
    footerPreview: null,
    footerVideo: null,
    section: "Media",
    order: 7,
  },
];
