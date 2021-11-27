import { initializeApp } from "firebase/app";
import { getDatabase, ref } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyD9g9XlDYN_t5umsKVzuMbca18YYYgOzug",
  authDomain: "test-counter-c8c99.firebaseapp.com",
  projectId: "test-counter-c8c99",
  databaseURL:
    "https://test-counter-c8c99-default-rtdb.europe-west1.firebasedatabase.app/",
  storageBucket: "test-counter-c8c99.appspot.com",
  messagingSenderId: "719262114720",
  appId: "1:719262114720:web:310bb83a0916642f6cbac5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getDatabase(app);
export const dbRef = ref(db, "counter");
