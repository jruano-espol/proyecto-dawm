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

// Lógica formulario y tabla de envíos
const envios = {
    Consulta: 0,
    Cotización: 0,
    Soporte: 0,
    Otro: 0
};

document.getElementById('form-contacto').addEventListener('submit', function(e) {
    e.preventDefault();
    const motivo = document.getElementById('motivo').value;
    if (motivo && envios.hasOwnProperty(motivo)) {
        envios[motivo]++;
        document.getElementById('envio-consulta').textContent = envios['Consulta'];
        document.getElementById('envio-cotizacion').textContent = envios['Cotización'];
        document.getElementById('envio-soporte').textContent = envios['Soporte'];
        document.getElementById('envio-otro').textContent = envios['Otro'];
        document.getElementById('mensaje-exito').classList.remove('hidden');
        setTimeout(() => {
            document.getElementById('mensaje-exito').classList.add('hidden');
        }, 2000);
        this.reset();
    }
});