// import { db } from './firebase.js';
// import { doc, getDoc, setDoc, updateDoc, increment } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";

// const motivos = ['consulta', 'cotizacion', 'soporte', 'otro'];

// // Load counts from Firestore and update table
// async function cargarEnvios() {
//     const docRef = doc(db, "envios", "contador");
//     const docSnap = await getDoc(docRef);
//     let data = docSnap.exists() 
//         ? docSnap.data() 
//         : {};
//     console.log("Firestore data:", data);
//     motivos.forEach(motivo => {
//         document.getElementById(`envio-${motivo}`).textContent = data[motivo] || 0;
//     });
// }

// // Increment count in Firestore
// async function incrementarEnvio(motivo) {
//     const docRef = doc(db, "envios", "contador");
//     // Ensure the document exists
//     await setDoc(docRef, {}, { merge: true });
//     await updateDoc(docRef, { [motivo]: increment(1) });
// }

// // Form handling
// document.addEventListener('DOMContentLoaded', () => {
//     cargarEnvios();

//     const form = document.getElementById('form-contacto');
//     const mensajeExito = document.getElementById('mensaje-exito');
//     form.addEventListener('submit', async (e) => {
//         e.preventDefault();
//         const motivo = form.motivo.value;
//         if (motivos.includes(motivo)) {
//             await incrementarEnvio(motivo);
//             await cargarEnvios();
//         }
//         form.reset();
//         mensajeExito.classList.remove('hidden');
//         setTimeout(() => mensajeExito.classList.add('hidden'), 3000);
//     });
// });

// Old
// -------------------------------------------------------------------- //

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