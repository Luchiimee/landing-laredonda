const hamburger = document.querySelector(".hamburger-menu");
const nav = document.querySelector(".main-nav");
const navLinks = document.querySelectorAll(".main-nav a"); // Selecciona todos los enlaces dentro del menú

if (hamburger && nav) {
  hamburger.addEventListener("click", () => {
    nav.classList.toggle("active");
    hamburger.classList.toggle("active"); // Para la animación del ícono de hamburguesa
  });

  // Agrega un event listener a cada enlace de navegación
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      // Cierra el menú hamburguesa y resetea el ícono
      nav.classList.remove("active");
      hamburger.classList.remove("active");
    });
  });
} else {
  console.warn(
    "No se encontraron los elementos '.hamburger-menu' o '.main-nav'. El menú hamburguesa no funcionará correctamente."
  );
}
