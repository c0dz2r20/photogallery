import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyCCRjNjYtE2r6CVmJuvlfyVucBjt0EFMis",
    authDomain: "photogallery-3c3a3.firebaseapp.com",
    projectId: "photogallery-3c3a3",
    storageBucket: "photogallery-3c3a3.appspot.com",
    messagingSenderId: "966466515517",
    appId: "1:966466515517:web:cf98f25d56ae16b073f054",
    measurementId: "G-E29N0RY5BB",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectFirestore, projectStorage };
