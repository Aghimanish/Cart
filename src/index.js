import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDxjmvyBA-Wej9u76Qf33tMTUVsJt5X6-g",
  authDomain: "cart-13c56.firebaseapp.com",
  databaseURL: "https://cart-13c56.firebaseio.com",
  projectId: "cart-13c56",
  storageBucket: "cart-13c56.appspot.com",
  messagingSenderId: "417994019300",
  appId: "1:417994019300:web:f1a437661c0865cd2477f1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



