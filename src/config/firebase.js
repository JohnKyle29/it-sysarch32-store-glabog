import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBdrOkE39FM3-rR0aUwEWXX87Cz1x4-BA4",
  authDomain: "store-a2c8d.firebaseapp.com",
  projectId: "store-a2c8d",
  storageBucket: "store-a2c8d.appspot.com",
  messagingSenderId: "236508685481",
  appId: "1:236508685481:web:6827cc962ef37c67b975b8",
  measurementId: "G-SCJ2CX1225"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
