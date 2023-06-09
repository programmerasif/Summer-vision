// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBvm3YvUjQdD4fr5Jvgw2K8BO_Xsb6Crw0",
  authDomain: "summer-vision.firebaseapp.com",
  projectId: "summer-vision",
  storageBucket: "summer-vision.appspot.com",
  messagingSenderId: 443869756713,
  appId: "443869756713:web:f4ddb01e53f32f26e5cb38",
}


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app