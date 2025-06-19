import { obtenerContador, guardarEnvio } from './firebase.js';

const motivos = ['consulta', 'cotizacion', 'soporte', 'otro'];

// Cargar los conteos desde Realtime Database y actualizar la tabla
async function cargarEnvios() {
    try {
        for (const motivo of motivos) {
            const cantidad = await obtenerContador(motivo);
            document.getElementById(`envio-${motivo}`).textContent = cantidad;
        }
    } catch (error) {
        console.error("Error al cargar envíos:", error);
    }
}

// Manejo del formulario
document.addEventListener('DOMContentLoaded', () => {
    cargarEnvios();

    const form = document.getElementById('form-contacto');
    const mensajeExito = document.getElementById('mensaje-exito');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const motivo = form.motivo.value;
        if (motivos.includes(motivo)) {
            await guardarEnvio(motivo);
            await cargarEnvios();
        } else {
            console.error("Motivo no válido:", motivo);
            return;
        }
        form.reset();
        mensajeExito.classList.remove('hidden');
        setTimeout(() => mensajeExito.classList.add('hidden'), 3000);
    });
});

// Menú scroll suave
document.querySelectorAll('.scroll-link').forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
        }
    });
});