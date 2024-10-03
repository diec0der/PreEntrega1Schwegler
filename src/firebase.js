import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyAtv07KEe60y4lbRkXZ5tmeBQ1FtcfNVQ8",
  authDomain: "ibai-react.firebaseapp.com",
  projectId: "ibai-react",
  storageBucket: "ibai-react.appspot.com",
  messagingSenderId: "1052011790337",
  appId: "1:1052011790337:web:c90887a7c5f90476ce0000"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };