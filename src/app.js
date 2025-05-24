document.addEventListener("DOMContentLoaded", () => {
  // Elementos del DOM
  const themeIcon = document.getElementById("theme-icon");
  const dropdownItems = document.querySelectorAll(".dropdown-item[data-bs-theme-value]");
  
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
  }
});