import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAMIClzlheMM1zk1bHcb20CgW2f7hpS-Bo",
  authDomain: "spotless-d0e42.firebaseapp.com",
  projectId: "spotless-d0e42",
  storageBucket: "spotless-d0e42.appspot.com",
  messagingSenderId: "306104069912",
  appId: "1:306104069912:web:0cbfa6590cc6b112cab86d",
  measurementId: "G-C1E2YSSC9E"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export { db, auth };
