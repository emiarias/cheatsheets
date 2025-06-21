document.addEventListener("DOMContentLoaded", () => {
  const themeIcon = document.getElementById("theme-icon");
  const dropdownItems = document.querySelectorAll(
    ".dropdown-item[data-bs-theme-value]"
  );
  const prismThemeLink = document.getElementById("prism-theme-link");

  const getSystemTheme = () => {
    if (window.matchMedia) {
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    return "dark";
  };

  // Manejador de eventos para el selector de tema (dropdown)
  dropdownItems.forEach((item) => {
    item.addEventListener("click", () => {
      const selectedTheme = item.getAttribute("data-bs-theme-value");
      localStorage.setItem("theme", selectedTheme);
      const effectiveTheme =
        selectedTheme === "auto" ? getSystemTheme() : selectedTheme;
      document.documentElement.setAttribute("data-bs-theme", effectiveTheme);
      updateThemeUI(selectedTheme, effectiveTheme);
    });
  });

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => {
      const currentSavedTheme = localStorage.getItem("theme") || "auto";
      if (currentSavedTheme === "auto") {
        const newSystemTheme = e.matches ? "dark" : "light";
        document.documentElement.setAttribute("data-bs-theme", newSystemTheme);
        updateThemeUI("auto", newSystemTheme);
      }
    });

  function updateThemeUI(selectedThemePreference, effectiveTheme) {
    // 1. Actualizar ícono principal de la navbar
    themeIcon.className =
      selectedThemePreference === "auto"
        ? "bi bi-circle-half"
        : selectedThemePreference === "dark"
        ? "bi bi-moon"
        : "bi bi-sun";

    // 2. Marcar ítem activo en dropdown
    dropdownItems.forEach((item) => {
      item.classList.toggle(
        "active",
        item.getAttribute("data-bs-theme-value") === selectedThemePreference
      );
    });

    // 3. Cambiar la hoja de estilos de Prism.js
    if (prismThemeLink) {
      if (effectiveTheme === "dark") {
        prismThemeLink.href = "../css/prism.css";
      } else {
        prismThemeLink.href = "../css/prism-default.css";
      }
    }

    // 4. Re-resaltar el código si los bloques ya estaban cargados
    if (window.Prism) {
      Prism.highlightAll();
    }
  }
});
