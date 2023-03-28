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

// TODO - Add field for therapists and their specialitys
// TODO - Add how much money was donated and split between x therapists
// TODO - Add a category Table for the therapist so that they can choose what they specialise in
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export { db, auth };
