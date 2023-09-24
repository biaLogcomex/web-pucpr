import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA1XahJ-Csl80C_AYb59VWdtKuZK0WE0bc",
  authDomain: "webatp-b0f40.firebaseapp.com",
  projectId: "webatp-b0f40",
  storageBucket: "webatp-b0f40.appspot.com",
  messagingSenderId: "518216131197",
  appId: "1:518216131197:web:5e2704e2dd8b5191f20714"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default firebase;