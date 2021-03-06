import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import store from "./redux/redux-store"
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import firebase from "firebase"
import rrfConfig from "../src/config/fbconfig";


const rrfProps = {
       firebase,
       config:  { userProfile: 'users' },
       dispatch: store.dispatch,

 }



ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <ReactReduxFirebaseProvider {...rrfProps}>
    <App />
      </ReactReduxFirebaseProvider>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
