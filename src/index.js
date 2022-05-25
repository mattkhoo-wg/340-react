import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAARybFxshJw8bFKK9twBHZNklwf9MuJcU",
  authDomain: "info340webapp-1e45c.firebaseapp.com",
  projectId: "info340webapp-1e45c",
  storageBucket: "info340webapp-1e45c.appspot.com",
  messagingSenderId: "589323061955",
  appId: "1:589323061955:web:4f57d41e7f86bb13107076"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>  
);

