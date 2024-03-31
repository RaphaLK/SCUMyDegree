// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyAyKT3sPgI2RTrHOOUM4OuIObNjzunCT04',
    authDomain: "scumydegree-f4ed8.firebaseapp.com",
    projectId: "scumydegree-f4ed8",
    storageBucket: "scumydegree-f4ed8.appspot.com",
    messagingSenderId: "174532801638",
    appId: "1:174532801638:web:0410f9ece3046d300c69a7",
    measurementId: "G-QKBB5PZ73W",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export default app;