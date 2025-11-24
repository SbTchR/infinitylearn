// Configuration Firebase
// REMPLACEZ CES VALEURS PAR CELLES DE VOTRE PROJET FIREBASE
const firebaseConfig = {
    apiKey: "AIzaSyCVNcKsBP-USkaZH3l3g0QIGOSJPQEb-CU",
    authDomain: "infinitylearn-c246d.firebaseapp.com",
    projectId: "infinitylearn-c246d",
    storageBucket: "infinitylearn-c246d.firebasestorage.app",
    messagingSenderId: "1033765099504",
    appId: "1:1033765099504:web:068fc047eca964f871ef35",
    measurementId: "G-TMRWFQZ653"
};

// Clé API Pixabay
const pixabayApiKey = "39838048-edeef51c8fd008798b4ecbe51";

// Initialisation de Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
const auth = firebase.auth();
