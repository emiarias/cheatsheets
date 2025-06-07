document.addEventListener("DOMContentLoaded", () => {
  // Elementos del DOM
  const themeIcon = document.getElementById("theme-icon");
  const dropdownItems = document.querySelectorAll(".dropdown-item[data-bs-theme-value]");
   const prismThemeLink = document.getElementById("prism-theme-link"); // Obtén el enlace de Prism

  
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

document.addEventListener('DOMContentLoaded', function() {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })
});