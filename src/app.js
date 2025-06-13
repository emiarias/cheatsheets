import { htmlCheatsheetData } from './data.js'; // Importa tus datos

document.addEventListener("DOMContentLoaded", () => {
  // Elementos del DOM
  const themeIcon = document.getElementById("theme-icon");
  const dropdownItems = document.querySelectorAll(".dropdown-item[data-bs-theme-value]");
   const prismThemeLink = document.getElementById("prism-theme-link"); // Obtén el enlace de Prism
  const cardsContainer = document.getElementById("cards-container"); // Nuevo: Contenedor para las cards

  
  // Detectar tema del sistema
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  const savedTheme = localStorage.getItem("theme") || "auto"; 
  const currentTheme = savedTheme === "auto" ? systemTheme : savedTheme;

  // Aplicar tema al cargar
  document.documentElement.setAttribute("data-bs-theme", currentTheme);
  updateUI(savedTheme);

  // Manejador de enventos para el icono de tema
  dropdownItems.forEach(item => {
    item.addEventListener("click", () => {
      const theme = item.getAttribute("data-bs-theme-value");
      localStorage.setItem("theme", theme);
      updateUI(theme);
    });
  });

  // Actualizar interfaz
  function updateUI(selectedTheme) {
    // 1. Actualizar ícono principal
    themeIcon.className = selectedTheme === "auto" ? "bi bi-circle-half" :
                         selectedTheme === "dark" ? "bi bi-moon" : "bi bi-sun";
    
    // 2. Marcar ítem activo en dropdown
    dropdownItems.forEach(item => {
      item.classList.toggle("active", item.getAttribute("data-bs-theme-value") === selectedTheme);
    });

    // 3. Aplicar tema efectivo
    const effectiveTheme = selectedTheme === "auto" ? systemTheme : selectedTheme;
    document.documentElement.setAttribute("data-bs-theme", effectiveTheme);

    // 4. Cambiar la hoja de estilos de Prism.js
    if (prismThemeLink) {
      if (effectiveTheme === "dark") {
        prismThemeLink.href = "../css/prism.css"; // Tu tema oscuro de Prism
      } else { // light o auto (si el sistema es light)
        prismThemeLink.href = "../css/prism-default.css"; // Tu tema claro de Prism
      }
    }

    // Opcional: Re-resaltar el código si los bloques ya estaban cargados
    // Esto es útil si el código ya era visible antes de cambiar el tema
    if (window.Prism) { // Verifica si Prism está disponible
      Prism.highlightAll();
    }
  }
  
  // Función para crear una card
  function createCard(data) {
    const colDiv = document.createElement("div");
    colDiv.className = data.colClasses; //
    colDiv.id = data.id; // Asigna el ID para posibles anclajes

    const cardDiv = document.createElement("div");
    cardDiv.className = "card h-100";

    // Card Header
    const cardHeader = document.createElement("div");
    cardHeader.className = "card-header d-flex justify-content-between align-items-center";
    cardHeader.innerHTML = `<h3 class="mb-0 fs-6">${data.headerIcon} ${data.headerTitle}</h3>`;

    // Botón de copiar (solo si hay código)
    if (data.codeSnippet) {
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

    if (data.codeSnippet) { // Si tiene un bloque de código
      const preElement = document.createElement("pre");
      const codeElement = document.createElement("code");
      codeElement.className = `language-${data.codeLanguage} code-snippet`; //
      codeElement.innerHTML = data.codeSnippet; // Asigna el código (ya codificado como entidades HTML)
      preElement.appendChild(codeElement);
      cardBody.appendChild(preElement);
    } else if (data.bodyContent) { // Si tiene contenido HTML directo
        cardBody.innerHTML = data.bodyContent;
    }

    if (data.bodyText) { // Si tiene texto adicional en el body
      const pElement = document.createElement("p");
      pElement.className = "card-text small text-muted mb-2";
      pElement.textContent = data.bodyText;
      cardBody.appendChild(pElement);
    }
    cardDiv.appendChild(cardBody);

    // Card Footer (solo si hay link)
    if (data.footerLink) {
      const cardFooter = document.createElement("div");
      cardFooter.className = "card-footer";
      const linkElement = document.createElement("a");
      linkElement.href = data.footerLink.href;
      linkElement.target = "_blank";
      linkElement.className = "link-secondary";
      linkElement.textContent = data.footerLink.text;
      cardFooter.appendChild(linkElement);
      cardDiv.appendChild(cardFooter);
    }

    colDiv.appendChild(cardDiv);
    return colDiv;
  }
 // Cargar las cards al inicio
  if (cardsContainer) {
    htmlCheatsheetData.forEach(cardData => {
      const cardElement = createCard(cardData);
      cardsContainer.appendChild(cardElement);
    });
    // Re-inicializar tooltips después de agregar nuevas cards
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Re-inicializar Prism.js después de agregar las cards
    if (window.Prism) {
      Prism.highlightAll();
    }
  }

});

document.addEventListener('DOMContentLoaded', function() {
  const copyButtons = document.querySelectorAll('.copy-code-btn');

  copyButtons.forEach(button => {
    button.addEventListener('click', function() {
      const cardBody = this.closest('.card-header').nextElementSibling;
      const codeSnippetElement = cardBody.querySelector('.code-snippet');
      const codeSnippet = codeSnippetElement.innerText;

      navigator.clipboard.writeText(codeSnippet).then(() => {
        const originalText = this.children[0].className;
        this.children[0].className ='bi bi-check-lg';
        setTimeout(() => {
          this.children[0].className = originalText;
        }, 2000); 
      }).catch(err => {
        console.error('Error al copiar el código: ', err);
        alert('Hubo un error al copiar el código. Por favor, inténtalo de nuevo.');
      });
    });
  });
});

// document.addEventListener('DOMContentLoaded', function() {
//     var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
//     var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
//         return new bootstrap.Tooltip(tooltipTriggerEl)
//     })
// });