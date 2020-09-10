import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyDkBHjojHP4SOyeJPToP16U1_G5xHE4Abo",
    authDomain: "cart-99523.firebaseapp.com",
    databaseURL: "https://cart-99523.firebaseio.com",
    projectId: "cart-99523",
    storageBucket: "cart-99523.appspot.com",
    messagingSenderId: "160819604622",
    appId: "1:160819604622:web:16d374e4b14a84010f6ddf"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
ReactDOM.render(<App />, document.getElementById('root'));
