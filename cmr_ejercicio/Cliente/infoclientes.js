
const formContactos = document.getElementById('form_contactos');
const btnAgregar = document.getElementById('btn_agregar');
const tablaC = document.getElementById('tablaC');
const mensaje = document.getElementById('mensaje');

formContactos.addEventListener('submit', async (event) => {
    event.preventDefault();

  
    const nombre = formContactos.nombre.value;
    const fecha = formContactos.fecha.value;
    const estado = formContactos.estado.value;
    const tipo = formContactos.tipo.value;


    try {
        const response = await axios.post('/clientes', { nombre, fecha, estado, tipo });
        const contacto = response.data;
        agregarFilaTabla(contacto);
        mostrarMensaje('Contacto agregado exitosamente.', 'success');
        formContactos.reset();
    } catch (error) {
        mostrarMensaje('Error al agregar contacto. Por favor, inténtelo nuevamente.', 'danger');
    }
});


function agregarFilaTabla(contacto) {
    const fila = document.createElement('tr');
    fila.innerHTML = `
        <td>${contacto.nombre}</td>
        <td>${contacto.fecha}</td>
        <td>${contacto.estado}</td>
        <td>${contacto.tipo}</td>
    `;
    tablaC.appendChild(fila);
}


function mostrarMensaje(mensajeText, tipo) {
    mensaje.textContent = mensajeText;
    mensaje.classList.add(`text-${tipo}`);
    setTimeout(() => {
        mensaje.textContent = '';
        mensaje.classList.remove(`text-${tipo}`);
    }, 3000);
}
