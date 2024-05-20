import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCMOEpkrpy_wQkYAmZuI617RBfEQwq6074",
    authDomain: "condoalert-mvp-senac.firebaseapp.com",
    projectId: "condoalert-mvp-senac",
    storageBucket: "condoalert-mvp-senac.appspot.com",
    messagingSenderId: "818936063830",
    appId: "1:818936063830:web:317e4891eb470f395218f7",
    measurementId: "G-9ZKB7FCGWZ",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
