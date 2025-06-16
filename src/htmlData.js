// js/htmlData.js

export const htmlCheatsheetData = [
  {
    id: "sintaxis-html",
    colClasses: "col-md-12",
    headerIcon: "🧩",
    headerTitle: "Sintaxis HTML",
    codeLanguage: "html",
    codeSnippet: `&lt;elemento atributo = "valor"&gt; contenido &lt;/elemento&gt;`,
    bodyContent: null,
    bodyText: `La sintaxis básica de HTML se compone de <strong>etiquetas</strong> (elementos) que encierran contenido. Algunas etiquetas necesitan <strong>atributos</strong> para darles propiedades adicionales. <br>
    💡 Tip: Asegúrate siempre de cerrar tus etiquetas correctamente para evitar errores en la página`,
    footerLinkInformation: null,
    footerLinkDemo: null,
    footerPreview: null,
    footerVideo: null,
    section: "Fundamentos", 
    order: 1, 
  },
  // {
  //   id: "descargas",
  //   colClasses: "col-md-6",
  //   headerIcon: "🧩",
  //   headerTitle: "Descargas",
  //   codeLanguage: "html",
  //   codeSnippet: null,
  //   bodyContent:
  //     "Aquí encontrarás enlaces y archivos descargables que te serán útiles para tu aprendizaje y proyectos HTML, como plantillas, guías rápidas o assets comunes.",
  //   bodyText: null,
  //   footerLinkInformation: null,
  //   footerLinkDemo: null,
  //   footerPreview: null,
  //   footerVideo: null,
  //   section: "Fundamentos", // Nueva propiedad
  //   order: 1, // Nueva propiedad
  // },
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
    bodyText:
      "Todo documento HTML comienza con esta estructura. Define el tipo de documento, el idioma, y las secciones &lt;head&gt; (información para el navegador) y &lt;body&gt; (contenido visible).",
    footerLinkInformation:
      "https://developer.mozilla.org/es/docs/Learn_web_development/Core/Structuring_content/Structuring_documents",
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
      "Las meta tags  <strong>meta</strong> le dan información importante al navegador sobre tu página (codificación, descripción, cómo se ve en móviles).<br> Los <strong>link</strong> se usan para conectar tu HTML con archivos externos como hojas de estilo CSS o el pequeño icono de la pestaña del navegador (favicon).",

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
    <br> No aparecen en el navegador, son perfectos para hacer que tu código sea más claro, fácil de mantener y de entender a futuro, especialmente en proyectos grandes o cuando trabajas en equipo.`,
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
    bodyText:
      "Usar estas etiquetas ayuda a los lectores de pantalla y a los motores de búsqueda a entender mejor el contexto de tu contenido.",
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
    bodyText:
      'Los enlaces <strong>a</strong> son el corazón de la web, conectando páginas y recursos. El atributo `href` es su destino. <br>💡 Tip: Usa `target="_blank"` con `rel="noopener noreferrer"` para abrir enlaces externos en una nueva pestaña de forma segura.',
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
    bodyText:
      "La etiqueta <strong>img</strong> es para insertar imágenes. El atributo <strong>src</strong> es la ruta a la imagen y <strong>alt</strong> es una descripción alternativa crucial para la accesibilidad (¡y SEO!).<br> <strong>figure</strong> y <strong>figcaption</strong> se usan para imágenes con una leyenda.",
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
    bodyText:
      "Las listas no ordenadas se usan para agrupar elementos que no tienen un orden específico, como una lista de características o ingredientes.",
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
    bodyText:
      "Las listas ordenadas se utilizan para elementos que sí tienen un orden específico, como pasos en una receta o un ranking. Puedes personalizar el tipo de marcador (type) y el inicio (start)",
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
    bodyText: `Las listas de definiciones son perfectas para glosarios o listas de preguntas y respuestas. Tienen un término (dt) y su descripción (dd).
    <br>💡 Tip: Son muy útiles para estructurar pares de información clave-valor, como en un diccionario o una sección de 'Preguntas Frecuentes'.`,
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
    bodyText:
      "Aquí tienes un desglose de las etiquetas fundamentales para construir tablas en HTML. Cada una tiene un rol específico que ayuda a estructurar los datos de manera lógica y accesible.",
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
    bodyText:
      "Estos atributos te dan un control más fino sobre el diseño y la accesibilidad de tus tablas. `colspan` y `rowspan` son para la presentación visual, mientras que `headers` y `scope` son fundamentales para la semántica y la accesibilidad, ayudando a los lectores de pantalla a entender la estructura de datos.",
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
    bodyText:
      "El <strong>form</strong> es el contenedor principal para todos los controles de entrada del usuario. Los <strong>label</strong> asocian texto a los <strong>input</strong> (muy importante para la accesibilidad).",
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
    bodyText:
      "Esta etiqueta te permite insertar archivos de sonido directamente en tu página web. El atributo <b>controls</b> muestra los controles de reproducción, <b>loop</b> lo repite, <b>autoplay</b> lo inicia automáticamente y <b>muted</b> lo silencia por defecto",
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
    bodyText: `Con <strong>video</strong>, puedes integrar vídeos en tu sitio. <b>controls</b> muestra la barra de reproducción  y <b>poster</b> es una imagen de previsualización. <br>💡 Tip: Al igual que con el audio, usa múltiples <strong>source</strong> para ofrecer tu video en diferentes formatos (.mp4, .webm) y asegurar la compatibilidad con varios navegadores.`,
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
    bodyText: 'Los <source>iframe<source> te permiten incrustar otra página web o contenido de otra fuente (como videos de YouTube o mapas de Google) directamente en tu documento HTML. <br>💡 Tip: Aunque son muy útiles, úsalos con precaución, ya que pueden afectar el rendimiento y la seguridad de tu página. Siempre verifica la fuente del contenido que embebes',
    footerLinkInformation: null,
    footerLinkDemo: null,
    footerPreview: null,
    footerVideo: null,
    section: "Media",
    order: 7,
  },
  {
    id: "entidades",
    colClasses: "col-md-8",
    headerIcon: "📝",
    headerTitle: "Entidades HTML Comunes",
    codeLanguage: "html",
    codeSnippet: `&amp;lt;  &lt;!-- Menor que (&lt;) --&gt;
&amp;gt;  &lt;!-- Mayor que (&gt;) --&gt;
&amp;amp; &lt;!-- Ampersand (&amp;) --&gt;
&amp;quot; &lt;!-- Comillas dobles (") --&gt;
&amp;apos; &lt;!-- Apóstrofe (') --&gt;
&amp;nbsp; &lt;!-- Espacio sin ruptura --&gt;
&amp;copy; &lt;!-- Símbolo de copyright (©) --&gt;
&amp;reg; &lt;!-- Símbolo de marca registrada (®) --&gt;
&amp;euro; &lt;!-- Símbolo de Euro (€) --&gt;`,
    bodyContent: null,
    bodyText: `Las entidades HTML son códigos especiales que representan caracteres que de otra forma serían difíciles de escribir o podrían ser interpretados como parte del código HTML. <br>Son esenciales para mostrar caracteres como '<' o '>' que tienen un significado especial en HTML.`,
    footerLinkInformation: null,
    footerLinkDemo: null,
    footerPreview: null,
    footerVideo: null,
    section: "Entidades",
    order: 8,
  },
  {
    id: "meta-tags-basics-seo",
    colClasses: "col-md-6",
    headerIcon: "📝",
    headerTitle: "HTML Meta Tags Esenciales",
    codeLanguage: "html",
    codeSnippet: `&lt;!-- Codificación de caracteres --&gt;
&lt;meta charset="UTF-8" /&gt;

&lt;!-- Título de la página --&gt;
&lt;title&gt;Título de tu Página&lt;/title&gt;

&lt;!-- Título para compartir (Open Graph y Twitter) --&gt;
&lt;meta property="og:title" content="HTML Cheatsheet" /&gt;
&lt;meta name="twitter:title" content="HTML Cheatsheet" /&gt;

&lt;!-- URL Canónica --&gt;
&lt;link rel="canonical" href="https://yourwebsite.com/page.html" /&gt;

&lt;!-- Descripción del documento --&gt;
&lt;meta name="description" content="Descripción de tu página, importante para SEO." /&gt;
&lt;meta property="og:description" content="Descripción de tu página para redes sociales." /&gt;
&lt;meta name="twitter:description" content="Descripción para Twitter." /&gt;

&lt;!-- Imagen para compartir --&gt;
&lt;meta property="og:image" content="https://www.yourwebsite.com/image.jpg" /&gt;
&lt;meta name="twitter:image" content="https://www.yourwebsite.com/image.jpg" /&gt;

&lt;!-- Compatibilidad con navegadores antiguos (IE) --&gt;
&lt;meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" /&gt;

&lt;!-- Configuración del Viewport para Responsive Design --&gt;
&lt;meta name="viewport" content="width=device-width, initial-scale=1.0" /&gt;`,
    bodyContent: null,
    bodyText:
      "Este conjunto de meta tags es fundamental para cualquier página HTML. Incluye la codificación de caracteres, el título del documento, las descripciones y URLs para SEO y compartir en redes, y la configuración del viewport para asegurar la correcta visualización en todos los dispositivos.",
    footerLinkInformation: null,
    footerLinkDemo: null,
    footerPreview: null,
    footerVideo: null,
    section: "HTML meta Tags",
    order: 9,
  },
  {
    id: "meta-tags-open-graph",
    colClasses: "col-md-6",
    headerIcon: "🔗",
    headerTitle: "Meta Tags: Open Graph",
    codeLanguage: "html",
    codeSnippet: `&lt;!-- Tipo de contenido (ej. website, article) --&gt;
&lt;meta property="og:type" content="website" /&gt;
&lt;!-- Localización del contenido --&gt;
&lt;meta property="og:locale" content="es_ES" /&gt;
&lt;!-- Título del contenido --&gt;
&lt;meta property="og:title" content="Título para Open Graph" /&gt;
&lt;!-- URL del contenido --&gt;
&lt;meta property="og:url" content="https://yourwebsite.com/your-page.html" /&gt;
&lt;!-- URL de la imagen para compartir --&gt;
&lt;meta property="og:image" content="https://yourwebsite.com/image.jpg" /&gt;
&lt;!-- Nombre del sitio web --&gt;
&lt;meta property="og:site_name" content="Nombre de tu Sitio" /&gt;
&lt;!-- Descripción del contenido --&gt;
&lt;meta property="og:description" content="Descripción concisa para Facebook, LinkedIn, etc." /&gt;`,
    bodyContent: null,
    bodyText:
      "Las meta tags Open Graph controlan cómo se muestra tu contenido cuando es compartido en plataformas como Facebook, Instagram, Pinterest y LinkedIn. Son esenciales para una presentación atractiva del enlace y para maximizar el impacto visual.",
    footerLinkInformation: null,
    footerLinkDemo: null,
    footerPreview: null,
    footerVideo: null,
    section: "HTML meta Tags",
    order: 9,
  },
];
