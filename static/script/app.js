document.addEventListener("DOMContentLoaded", function () {
    const scrollDown = document.getElementById('botonsvg');
    const modal = new bootstrap.Modal(document.getElementById('staticBackdrop'), {});
    const input = document.getElementById('cantidadM');
    const modalBody = document.querySelector('.modal-body');

    // Función para mostrar el modal
    function mostrarModal() {
        if (input.value.trim() !== '') {
            modal.show();
        } else {
            // Aquí puedes agregar alguna lógica si el input está vacío, como mostrar un mensaje de error, etc.
            console.log('El input está vacío. No se muestra el modal.');
        }
    }

    // Función para actualizar la tabla con los parciales
   // Función para actualizar la tabla con los parciales
function actualizarTabla(numMaterias) {
    // Crear filas y celdas para cada materia y sus parciales
    for (let i = 1; i <= numMaterias; i++) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <th scope="row">${i}</th>
            <td><input type="number" class="form-control" placeholder="P 1" id="parcial1-${i}"></td>
            <td><input type="number" class="form-control" placeholder="P 2" id="parcial2-${i}"></td>
            <td><input type="number" class="form-control" placeholder="P 3" id="parcial3-${i}"></td>
            <td><input type="number" class="form-control" placeholder="Final" id="final-${i}"></td>
        `;
        document.querySelector('.modal-body tbody').appendChild(row);
        
    }
}


    // Asignar evento de clic al botón SVG
    scrollDown.addEventListener("click", function () {
        mostrarModal();
        const numMaterias = parseInt(input.value.trim());
        if (!isNaN(numMaterias) && numMaterias > 0) {
            actualizarTabla(numMaterias);
        }
    });
});
