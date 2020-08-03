import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAuGZja11_n-6i3C_3i9A9f4H0LsD_b8us",
    authDomain: "fire-3d6b1.firebaseapp.com",
    databaseURL: "https://fire-3d6b1.firebaseio.com",
    projectId: "fire-3d6b1",
    storageBucket: "fire-3d6b1.appspot.com",
    messagingSenderId: "263268019628",
    appId: "1:263268019628:web:0d18dd9a41073548a85e09",
    measurementId: "G-4G1TJ7KCWW"
});
const auth = firebaseApp.auth();


export  {auth};
