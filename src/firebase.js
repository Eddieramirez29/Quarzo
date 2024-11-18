import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBNIkNMiw-g2VydrbO_kFaeHEChPVg-asY",
    authDomain: "quarzo-b16e4.firebaseapp.com",
    projectId: "quarzo-b16e4",
    storageBucket: "quarzo-b16e4.firebasestorage.app",
    messagingSenderId: "1065688662371",
    appId: "1:1065688662371:web:3f1a8f4fade33197f69356"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Obtener la instancia de Firestore
const db = getFirestore(app);

export { db };
