document.addEventListener("DOMContentLoaded", () => {
  // Elementos del DOM relacionados con el tema
  const themeIcon = document.getElementById("theme-icon");
  const dropdownItems = document.querySelectorAll(".dropdown-item[data-bs-theme-value]");
  const prismThemeLink = document.getElementById("prism-theme-link");

  // Detectar tema del sistema (para 'auto')
  const getSystemTheme = () => {
    if (window.matchMedia) {
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    return 'dark'; // Tema por defecto si no se puede detectar
  };

  const systemTheme = getSystemTheme();
  const savedTheme = localStorage.getItem("theme") || "auto"; // Obtener tema guardado o 'auto'
  const initialEffectiveTheme = savedTheme === "auto" ? systemTheme : savedTheme;

  // Aplicar tema inicial al cargar la página
  document.documentElement.setAttribute("data-bs-theme", initialEffectiveTheme);
  updateThemeUI(savedTheme, initialEffectiveTheme); // Actualiza la UI del selector de tema y el icono

  // Manejador de eventos para el selector de tema (dropdown)
  dropdownItems.forEach(item => {
    item.addEventListener("click", () => {
      const selectedTheme = item.getAttribute("data-bs-theme-value");
      localStorage.setItem("theme", selectedTheme); // Guardar preferencia
      
      const effectiveTheme = selectedTheme === "auto" ? getSystemTheme() : selectedTheme;
      document.documentElement.setAttribute("data-bs-theme", effectiveTheme); // Aplicar al HTML
      
      updateThemeUI(selectedTheme, effectiveTheme); // Actualizar UI
    });
  });

  // Escuchar cambios en el tema del sistema (para 'auto')
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener('change', (e) => {
    const currentSavedTheme = localStorage.getItem("theme") || "auto";
    if (currentSavedTheme === 'auto') {
      const newSystemTheme = e.matches ? "dark" : "light";
      document.documentElement.setAttribute("data-bs-theme", newSystemTheme);
      updateThemeUI('auto', newSystemTheme);
    }
  });

  // Función para actualizar la interfaz de usuario del selector de tema y el enlace de Prism
  function updateThemeUI(selectedThemePreference, effectiveTheme) {
    // 1. Actualizar ícono principal de la navbar
    themeIcon.className = selectedThemePreference === "auto" ? "bi bi-circle-half" :
                          selectedThemePreference === "dark" ? "bi bi-moon" : "bi bi-sun";
    
    // 2. Marcar ítem activo en dropdown
    dropdownItems.forEach(item => {
      item.classList.toggle("active", item.getAttribute("data-bs-theme-value") === selectedThemePreference);
    });

    // 3. Cambiar la hoja de estilos de Prism.js
    if (prismThemeLink) {
      if (effectiveTheme === "dark") {
        prismThemeLink.href = "/css/prism.css"; // Ruta relativa a la raíz del sitio (public/)
      } else {
        prismThemeLink.href = "/css/prism-default.css"; // Ruta relativa a la raíz del sitio (public/)
      }
    }
    
    // 4. Re-resaltar el código si los bloques ya estaban cargados
    // Es crucial que esto se ejecute *después* de que las cards con código se hayan añadido.
    // Esto lo manejaremos en cheatsheetLoader.js después de crear las cards.
    // Pero si el usuario cambia el tema *después* de que la página cargó,
    // necesitamos re-resaltar el código existente.
    if (window.Prism) {
      Prism.highlightAll();
    }
  }
});

// Nota: Las inicializaciones de tooltips y los manejadores de eventos de copiar
// se moverán a cheatsheetLoader.js, ya que dependen de los elementos de las cards.