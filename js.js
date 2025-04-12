// js.js

document.addEventListener("DOMContentLoaded", function () {
  const secciones = document.querySelectorAll(".section");
  let paginaActual = 0;

  function mostrarPagina(index) {
      secciones.forEach((seccion, i) => {
          seccion.classList.toggle("active", i === index);
      });
  }

  window.nextPage = function () {
      if (paginaActual < secciones.length - 1) {
          paginaActual++;
          mostrarPagina(paginaActual);
      }
  };

  window.prevPage = function () {
      if (paginaActual > 0) {
          paginaActual--;
          mostrarPagina(paginaActual);
      }
  };

  // Animación del ajolote (flotando de arriba hacia abajo)
  const ajolote = document.getElementById("ajolote");
  if (ajolote) {
      let posicion = 0;
      let direccion = 1; // 1: bajando, -1: subiendo

      setInterval(() => {
          // Cambia la posición vertical
          if (posicion >= 20) direccion = -1;
          if (posicion <= 0) direccion = 1;

          posicion += direccion;
          ajolote.style.transform = `translateY(${posicion}px)`;
      }, 100); // velocidad
  }
});
