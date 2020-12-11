import firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDWHYG41x7BzPqI_DdOyUd2dQmZklQchXc",
    authDomain: "fiddel.firebaseapp.com",
    databaseURL: "https://fiddel-default-rtdb.firebaseio.com",
    projectId: "fiddel",
    storageBucket: "fiddel.appspot.com",
    messagingSenderId: "797405742162",
    appId: "1:797405742162:web:7d2b5e8b6344fd8e3f4b8b"
  };

  // Initialize Firebase
export default  firebase.initializeApp(firebaseConfig);