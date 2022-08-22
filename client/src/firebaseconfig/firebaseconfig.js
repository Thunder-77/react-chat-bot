
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCwLLV9YEiAYiP0Kn7bxTAAPmgXKacMliQ",
  authDomain: "chatbot-c48e4.firebaseapp.com",
  projectId: "chatbot-c48e4",
  storageBucket: "chatbot-c48e4.appspot.com",
  messagingSenderId: "826244619502",
  appId: "1:826244619502:web:a611e1b60d84d0824067ff"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export default {
  db: db
}