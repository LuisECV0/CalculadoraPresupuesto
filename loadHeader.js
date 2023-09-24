// loadHeader.js
document.addEventListener("DOMContentLoaded", function () {
    // Selecciona el elemento donde se cargará el encabezado
    const headerContainer = document.getElementById("header-container");
  
    // Carga el encabezado mediante fetch
    fetch("header.html")
      .then((response) => response.text())
      .then((data) => {
        // Inserta el HTML del encabezado en el contenedor
        headerContainer.innerHTML = data;
      })
      .catch((error) => console.error("Error al cargar el encabezado:", error));
  });
  