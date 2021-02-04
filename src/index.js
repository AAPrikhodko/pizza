import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import store from "./redux/redux-store"
import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyA81Xo_RFKas3gGkd6iSEXkozxHxDwubsk",
    authDomain: "pizza-44d91.firebaseapp.com",
    databaseURL: "https://pizza-44d91-default-rtdb.firebaseio.com",
    projectId: "pizza-44d91",
    storageBucket: "pizza-44d91.appspot.com",
    messagingSenderId: "6541    92684689",
    appId: "1:654192684689:web:6e87299ae6e94b4588d930",
    measurementId: "G-14X829JHZP"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
    <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
