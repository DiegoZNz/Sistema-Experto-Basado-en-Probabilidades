document.addEventListener("DOMContentLoaded", function () {
    const scrollDown = document.getElementById('botonsvg');
    const modal = new bootstrap.Modal(document.getElementById('staticBackdrop'), {});
    const inputM = document.getElementById('cantidadM');
    const modalBody = document.querySelector('.modal-body');

    // Función para mostrar el modal
    function mostrarModal() {
        if (inputM.value.trim() !== '') {
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
        var cont = 0;
        for (let i = 1; i <= numMaterias; i++) {
            const row = document.createElement('tr');
            row.innerHTML = `
                <th scope="row">${i}</th>
                <td><input type="number" class="form-control parcial-input" placeholder="P 1" id="parcial1-${i}"></td>
                <td><input type="number" class="form-control parcial-input" placeholder="P 2" id="parcial2-${i}"></td>
                <td><input type="number" class="form-control parcial-input" placeholder="P 3" id="parcial3-${i}"></td>
                <td><input type="text" class="form-control final-input" placeholder="" id="final-${i}" value="" disabled></td>
            `;
            document.querySelector('.modal-body tbody').appendChild(row);

            // Obtener los inputs de los parciales
            const inputsParcial = row.querySelectorAll('.parcial-input');

            // Asignar evento 'input' a cada input de parcial
            inputsParcial.forEach(input => {
                input.addEventListener('input', function() {
                    // Obtener los valores de los tres parciales
                    const parcial1 = parseFloat(document.getElementById(`parcial1-${i}`).value) || 0;
                    const parcial2 = parseFloat(document.getElementById(`parcial2-${i}`).value) || 0;
                    const parcial3 = parseFloat(document.getElementById(`parcial3-${i}`).value) || 0;

                    const inputbaja  = document.getElementById('baja');

                    // Calcular probabilidad de irse a final                    

                    if (parcial1 >= 7 && parcial2 >= 7 && parcial3 >= 7 && (parcial1 + parcial2 + parcial3) >= 21) {
                        alert('Pasaste la materia '  + i +  ' no necesitas el final.');
                        const inputFinal = document.getElementById(`final-${i}`);
                        inputFinal.style.backgroundColor = 'green';
                        inputFinal.value = "Pasó"; 
                        if(cont > 0){
                            cont--;
                        }
                    } else if ( (parcial1 < 7 && parcial1 !== 0) && (parcial2 < 7 && parcial2 !== 0) && (parcial3 < 7 && parcial3 !== 0) ) {
                        alert('Te vas a recu con la materia ' + i);
                        const inputFinal = document.getElementById(`final-${i}`);
                        inputFinal.style.backgroundColor = 'red';
                        inputFinal.value = "Recu";     
                        cont++;
                                                
                    } 
                    else{
                        const promedio = ((parcial1 + parcial2 + parcial3) / 30) * 100;
                        // Mostrar el promedio en el input del final
                        const inputFinal = document.getElementById(`final-${i}`);
                        inputFinal.style.backgroundColor = 'yellow';
                        inputFinal.value = isNaN(promedio) ? '' : promedio.toFixed(2);
                    }
                    
                    // Calcular probabilidad de baja academica
                    
                    inputbaja.value = ((cont/inputM.value)*100).toFixed(2) + '%';

                    if(parseFloat(inputbaja.value) > 50 ){

                        inputbaja.value = "Baja academica"
                        inputbaja.style.backgroundColor = 'red';
                        alert('Eres baja academica');
                    }else{
                        inputbaja.style.backgroundColor = 'yellow';
                        inputbaja.value = ((cont/inputM.value)*100).toFixed(2) + '%';
                    }
                });
            });
        }
    }
    // Asignar evento de clic al botón SVG
    scrollDown.addEventListener("click", function () {
        mostrarModal();
        const numMaterias = parseInt(inputM.value.trim());
        if (!isNaN(numMaterias) && numMaterias > 0) {
            actualizarTabla(numMaterias);
        }
    });
});
