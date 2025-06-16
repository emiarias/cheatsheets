import { htmlCheatsheetData } from "./htmlData.js";
import { cssCheatsheetData } from "./cssData.js";
import { jsCheatsheetData } from "./jsData.js";

document.addEventListener("DOMContentLoaded", () => {
  const cardsContainer = document.getElementById("cards-container");

  if (!cardsContainer) {
    console.warn(
      "Contenedor de cards no encontrado. No se cargarán las cheatsheets."
    );
    return;
  }

  let dataToLoad = [];
  // Detectar la página actual para cargar los datos correctos
  const currentPagePath = window.location.pathname;

  if (currentPagePath.includes("/cheatsheets-html.html")) {
    dataToLoad = htmlCheatsheetData;
  } else if (currentPagePath.includes("/cheatsheets-js.html")) {
    dataToLoad = jsCheatsheetData;
    } else if (currentPagePath.includes("/cheatsheets-css.html")) {
    dataToLoad = cssCheatsheetData;
  }

  // Función para crear una card
  function createCard(data) {
    const colDiv = document.createElement("div");
    colDiv.className = data.colClasses;
    colDiv.id = data.id;

    const cardDiv = document.createElement("div");
    cardDiv.className = "card h-100";

    // Card Header
    const cardHeader = document.createElement("div");
    cardHeader.className =
      "card-header d-flex justify-content-between align-items-center";
    cardHeader.innerHTML = `<h3 class="mb-0 fs-6">${data.headerIcon} ${data.headerTitle}</h3>`;

    // Botón de copiar (solo si hay código)
    if (data.codeSnippet !== null) {
      const copyButton = document.createElement("button");
      copyButton.className = "btn btn-outline-primary copy-code-btn";
      copyButton.setAttribute("data-bs-toggle", "tooltip");
      copyButton.setAttribute("data-bs-placement", "top");
      copyButton.setAttribute("data-bs-title", "Copiar");
      copyButton.innerHTML = '<i class="bi bi-copy"></i>';
      cardHeader.appendChild(copyButton);
    }
    cardDiv.appendChild(cardHeader);

    // Card Body
    const cardBody = document.createElement("div");
    cardBody.className = "card-body";

    // Inserta el snippet de código si existe
    if (data.codeSnippet !== null) {
      const preElement = document.createElement("pre");
      const codeElement = document.createElement("code");
      codeElement.className = `language-${data.codeLanguage} code-snippet`;
      codeElement.innerHTML = data.codeSnippet;
      preElement.appendChild(codeElement);
      cardBody.appendChild(preElement);
    }

    // Inserta el bodyContent si existe (contenido HTML directo)
    if (data.bodyContent !== null) {
      const contentDiv = document.createElement("div");
      contentDiv.innerHTML = data.bodyContent;
      cardBody.appendChild(contentDiv);
    }

    // Inserta el bodyText si existe (texto simple con clase)
    if (data.bodyText !== null) {
      const pElement = document.createElement("p");
      pElement.className = "card-text small text-muted mb-2";
      pElement.innerHTML = data.bodyText;
      cardBody.appendChild(pElement);
    }

    cardDiv.appendChild(cardBody);

    // Card Footer (solo se genera si hay al menos un elemento de pie de página)
    const hasFooterContent =
      data.footerLinkInformation !== null ||
      data.footerVideo !== null ||
      data.footerPreview !== null ||
      data.footerLinkDemo !== null;

    if (hasFooterContent) {
      const cardFooter = document.createElement("div");
      cardFooter.className =
        "card-footer d-flex justify-content-between align-items-center";

      // Footer Link Information
      if (data.footerLinkInformation !== null) {
        const linkInfo = document.createElement("a");
        linkInfo.href = data.footerLinkInformation;
        linkInfo.target = "_blank";
        linkInfo.className = "link-secondary text-decoration-none";
        linkInfo.textContent = "Más información";
        cardFooter.appendChild(linkInfo);
      } else {
        const emptyPlaceholder = document.createElement("div");
        cardFooter.appendChild(emptyPlaceholder);
      }

      // Contenedor para los botones del footer a la derecha
      const buttonsContainer = document.createElement("div");
      buttonsContainer.className = "d-flex gap-2";

      // Botón de Video
      if (data.footerVideo !== null) {
        const videoButton = document.createElement("button");
        videoButton.className = "btn btn-outline-primary";
        videoButton.setAttribute("data-bs-toggle", "tooltip");
        videoButton.setAttribute("data-bs-placement", "top");
        videoButton.setAttribute("data-bs-title", "Ver Video");
        videoButton.innerHTML = '<i class="bi bi-play-fill"></i>';
        buttonsContainer.appendChild(videoButton);
      }

      // Botón de Preview (Post/Imagen)
      if (data.footerPreview !== null) {
        const previewButton = document.createElement("button");
        previewButton.className = "btn btn-outline-primary";
        previewButton.setAttribute("data-bs-toggle", "tooltip");
        previewButton.setAttribute("data-bs-placement", "top");
        previewButton.setAttribute("data-bs-title", "Ver Previsualización");
        previewButton.innerHTML = '<i class="bi bi-image"></i>';
        buttonsContainer.appendChild(previewButton);
      }

      // Botón de Demo
      if (data.footerLinkDemo !== null) {
        const demoButton = document.createElement("a");
        demoButton.href = data.footerLinkDemo;
        demoButton.target = "_blank";
        demoButton.className = "btn btn-outline-primary";
        demoButton.setAttribute("data-bs-toggle", "tooltip");
        demoButton.setAttribute("data-bs-placement", "top");
        demoButton.setAttribute("data-bs-title", "Ver Demo");
        demoButton.innerHTML = '<i class="bi bi-code-slash"></i>';
        buttonsContainer.appendChild(demoButton);
      }

      if (buttonsContainer.children.length > 0) {
        cardFooter.appendChild(buttonsContainer);
      }

      cardDiv.appendChild(cardFooter);
    }

    colDiv.appendChild(cardDiv);
    return colDiv;
  }

  // --- Agrupar y cargar las cards por sección ---
  const sections = {};

  // Agrupar las tarjetas por sección
  dataToLoad.forEach((cardData) => {
    const sectionName = cardData.section || "Sin Sección"; // Usa "Sin Sección" si la propiedad no existe
    const sectionOrder = cardData.order || 999; // Un número alto para secciones sin orden

    if (!sections[sectionName]) {
      sections[sectionName] = {
        order: sectionOrder,
        cards: [],
      };
    }
    sections[sectionName].cards.push(cardData);
  });

  // Convertir las secciones a un array y ordenar por el número de orden
  const sortedSections = Object.entries(sections).sort(
    ([, a], [, b]) => a.order - b.order
  );

  // Recorrer las secciones ordenadas y añadir al DOM
  sortedSections.forEach(([sectionName, sectionData]) => {
    // Crear el elemento <section>
    const sectionElement = document.createElement("section");
    sectionElement.className = "mb-5";

    // Crear el título <h2> para la sección
    const sectionTitle = document.createElement("h2");
    sectionTitle.className = "mb-4 section-title";
    sectionTitle.textContent = sectionName;
    sectionElement.appendChild(sectionTitle);

    // Crear un contenedor row para las cards dentro de esta sección
    const sectionRow = document.createElement("div");
    sectionRow.className = "row g-4";

    sectionData.cards.forEach((cardData) => {
      const cardElement = createCard(cardData);
      sectionRow.appendChild(cardElement);
    });

    sectionElement.appendChild(sectionRow);
    cardsContainer.appendChild(sectionElement);
  });

  // Re-inicializar Prism.js DESPUÉS de que las cards con código se hayan añadido al DOM
  if (window.Prism) {
    Prism.highlightAll();
  } else {
    console.warn(
      "Prism.js no cargado o no se pudo inicializar resaltado de código."
    );
  }

  // Inicializar tooltips de Bootstrap DESPUÉS de que las cards se hayan agregado al DOM
  if (
    typeof bootstrap !== "undefined" &&
    typeof bootstrap.Tooltip !== "undefined"
  ) {
    var tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });
  } else {
    console.warn("Bootstrap JS no cargado o no se pudo inicializar tooltips.");
  }
});

// Listener delegado para los botones de copiar código
document.addEventListener("click", function (event) {
  const button = event.target.closest(".copy-code-btn");
  if (button) {
    const cardBody = button.closest(".card-header").nextElementSibling;
    const codeSnippetElement = cardBody.querySelector(".code-snippet");
    const codeSnippet = codeSnippetElement.innerText;

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard
        .writeText(codeSnippet)
        .then(() => {
          updateCopyButtonUI(button);
        })
        .catch((err) => {
          console.error("Error al copiar el código (clipboard API): ", err);
          fallbackCopyTextToClipboard(codeSnippet, button);
        });
    } else {
      fallbackCopyTextToClipboard(codeSnippet, button);
    }
  }
});

function updateCopyButtonUI(button) {
  const iconElement = button.querySelector("i");
  const originalClass = iconElement.className;
  iconElement.className = "bi bi-check-lg"; // Icono de "check"
  setTimeout(() => {
    iconElement.className = originalClass; // Vuelve al icono original
  }, 2000);
}

function fallbackCopyTextToClipboard(text, button) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.style.position = "fixed";
  textArea.style.left = "-9999px";
  textArea.style.top = "0";
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    const successful = document.execCommand("copy");
    if (successful) {
      updateCopyButtonUI(button);
    } else {
      console.error("Fallback: Error al copiar el código (execCommand).");
    }
  } catch (err) {
    console.error("Fallback: Error inesperado al copiar el código.", err);
  }
  document.body.removeChild(textArea);
}

// Añadir aquí las funciones openVideoModal, openPreviewModal si las necesitas
// function openVideoModal(videoUrl) {
//   // Lógica para abrir un modal con el video
//   alert(`Abriendo video: ${videoUrl}`);
// }

// function openPreviewModal(previewUrl) {
//   // Lógica para abrir un modal con la previsualización (imagen/post)
//   alert(`Abriendo previsualización: ${previewUrl}`);
// }
