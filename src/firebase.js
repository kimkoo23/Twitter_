import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyB8MI3-mgD4rLROF4jAUllBhkVCtLkhXWs",
    authDomain: "twitter-clone-ff375.firebaseapp.com",
    projectId: "twitter-clone-ff375",
    storageBucket: "twitter-clone-ff375.appspot.com",
    messagingSenderId: "929338317748",
    appId: "1:929338317748:web:075b8ef776dc8f1b6a70e1"
  };

firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;
export const authService = firebase.auth();