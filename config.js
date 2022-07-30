import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyAX2byKH-CQ6EqlcXdFd-JKncC0kBA8Re4",
    authDomain: "pro-71-e2843.firebaseapp.com",
    projectId: "pro-71-e2843",
    storageBucket: "pro-71-e2843.appspot.com",
    messagingSenderId: "482682903606",
    appId: "1:482682903606:web:1edb572ca6011bf0cf0c97"
  };


firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
