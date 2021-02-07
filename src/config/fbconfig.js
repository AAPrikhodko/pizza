import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyA81Xo_RFKas3gGkd6iSEXkozxHxDwubsk",
    authDomain: "pizza-44d91.firebaseapp.com",
    databaseURL: "https://pizza-44d91-default-rtdb.firebaseio.com",
    projectId: "pizza-44d91",
    storageBucket: "pizza-44d91.appspot.com",
    messagingSenderId: "6541    92684689",
    appId: "1:654192684689:web:6e87299ae6e94b4588d930",
    measurementId: "G-14X829JHZP",

};

firebase.initializeApp(firebaseConfig);


export default firebase