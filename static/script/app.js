document.addEventListener("DOMContentLoaded", function () {
    const scrollDown = document.querySelector(".scroll-down");
    const modal = new bootstrap.Modal(document.getElementById('staticBackdrop'), {});

    // Función para mostrar el modal
    function mostrarModal() {
        modal.show();
    }

    // Asignar evento de clic al botón SVG
    scrollDown.addEventListener("click", mostrarModal);

    // Asignar evento de scroll para mostrar el modal
   // window.addEventListener("scroll", function () {
     //   mostrarModal();
    //});
});