// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";
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
const db = getFirestore(app);

export { db };