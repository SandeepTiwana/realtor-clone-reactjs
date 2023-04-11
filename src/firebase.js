// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJwoVn0Oa0-bzCBKZZpWlPg8FU7siaWQw",
  authDomain: "realtor-clone-react-58da7.firebaseapp.com",
  projectId: "realtor-clone-react-58da7",
  storageBucket: "realtor-clone-react-58da7.appspot.com",
  messagingSenderId: "733214317123",
  appId: "1:733214317123:web:ae205eaef4d4e7904752f6",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
