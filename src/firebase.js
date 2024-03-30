// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

/*
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
let firebaseConfig = null;

fetch('/getFirebaseConfig')
    .then(response => response.json())
    .then(config => {
        firebaseConfig = config;
        console.log('config:', config);
    })
    .catch(error => {
        console.error(error);
    });

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export default app;
*/

let firebaseConfig = null;

// Function to initialize Firebase
export const initializeFirebase = () => {
    if (!firebaseConfig) {
        return Promise.reject(new Error("Firebase configuration not fetched"));
    }

    return initializeApp(firebaseConfig);
}

// Function to get Firebase authentication instance
export const getFirebaseAuth = () => {
    if (!firebaseConfig) {
        return Promise.reject(new Error("Firebase configuration not fetched"));
    }

    const app = initializeApp(firebaseConfig);
    return getAuth(app);
}