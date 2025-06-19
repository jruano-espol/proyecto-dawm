// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getDatabase, ref, set, push, get } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBWLLH89hBrj-rT5CtFWKgYXvoR0rV3VB0",
    authDomain: "proyecto-dawm-4aec4.firebaseapp.com",
    projectId: "proyecto-dawm-4aec4",
    storageBucket: "proyecto-dawm-4aec4.firebasestorage.app",
    messagingSenderId: "424458278282",
    appId: "1:424458278282:web:89475b00f267e6cc066473"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

async function incrementarContador(motivo) {
    const contadorRef = ref(database, `contadorEnvios/${motivo}`);
    const snapshot = await get(contadorRef);
    if (snapshot.exists()) {
        console.log(`Contador actual para ${motivo}:`, snapshot.val());
        await set(contadorRef, snapshot.val() + 1);
    } else {
        console.log(`Contador actual para ${motivo}:`, 1);
        await set(contadorRef, 1);
    }
} 

async function obtenerContador(motivo) {
    const contadorRef = ref(database, `contadorEnvios/${motivo}`);
    const snapshot = await get(contadorRef);
    return snapshot.exists() ? snapshot.val() : 0;
}

async function guardarEnvio(motivo) {
    const enviosRef = ref(database, 'envios');
    const envioNuevoRef = push(enviosRef);
    const envioData = {
        motivo: motivo,
        date: new Date().toISOString(),
    };
    try {
        await set(envioNuevoRef, envioData);
        await incrementarContador(motivo);
        return { success: true, message: 'Envío guardado correctamente.' };
    } catch (error) {
        return { success: false, message: 'Error al guardar el envío.', error };
    }
}

function getEnvios() {
    return get(ref(database, 'envios'))
        .then((snapshot) => {
            if (snapshot.exists()) {
                return snapshot.val();
            } else {
                return {};
            }
        })
        .catch((error) => {
            throw error;
        });
}

export { getEnvios, guardarEnvio, obtenerContador };