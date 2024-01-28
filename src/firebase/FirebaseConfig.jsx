// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHgu3dOSIjnDdpSUEpkfcYNZfEoroJ_no",
  authDomain: "myblog-bf75d.firebaseapp.com",
  projectId: "myblog-bf75d",
  storageBucket: "myblog-bf75d.appspot.com",
  messagingSenderId: "428895829218",
  appId: "1:428895829218:web:d04bf81f5c2bc3e0c772bb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
const storage = getStorage(app);
export { fireDB, auth, storage };
