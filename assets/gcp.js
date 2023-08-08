// Import the functions you need from the SDKs you need

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";

import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyBexdqXejCGv3pQgPqzUqHMDGeUBKtdyGU",

  authDomain: "piton-site.firebaseapp.com",

  projectId: "piton-site",

  storageBucket: "piton-site.appspot.com",

  messagingSenderId: "346488688599",

  appId: "1:346488688599:web:233e819105f881d6898592",

  measurementId: "G-JE1SHMQ5S6"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
