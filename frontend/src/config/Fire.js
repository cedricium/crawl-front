// src/firebase.js
import firebase from 'firebase/app';
import 'firebase/database'; // If using Firebase database

const firebaseConfig = {
  apiKey: process.env.FIRE_KEY,
  authDomain: process.env.FIRE_DOMAIN,
  databaseURL: process.env.FIRE_DBURL,
  projectId: process.env.FIRE_PROJID,
  storageBucket: process.env.FIRE_STORAGE,
  messagingSenderId: process.env.FIRE_SENDERID,
  appId: process.env.FIRE_APPID
};

const Fire = firebase.initializeApp(firebaseConfig);
export default Fire;
