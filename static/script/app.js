document.addEventListener("DOMContentLoaded", function () {
    const scrollDown = document.getElementById('botonsvg');
    const modal = new bootstrap.Modal(document.getElementById('staticBackdrop'), {});
    const input = document.getElementById('cantidadM');

    // Función para mostrar el modal
    function mostrarModal() {
        if (input.value.trim() !== '') {
            modal.show();
        } else {
            // Aquí puedes agregar alguna lógica si el input está vacío, como mostrar un mensaje de error, etc.
            console.log('El input está vacío. No se muestra el modal.');
        }
        modal.show();
    }

    // Asignar evento de clic al botón SVG
    scrollDown.addEventListener("click", mostrarModal);

    // Asignar evento de scroll para mostrar el modal
   // window.addEventListener("scroll", function () {
     //   mostrarModal();
    //});
});