import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBNNiCFkP2ghNbM9CTj8GYEOkV5433X1S8",
  authDomain: "card-list-75c29.firebaseapp.com",
  databaseURL:
    "https://card-list-75c29-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "card-list-75c29",
  storageBucket: "card-list-75c29.appspot.com",
  messagingSenderId: "642474999178",
  appId: "1:642474999178:web:e7d9876701514c4a779c73",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase();
//write data
export const writeProductData = async (productId, name, imageUrl) => {
    const reference = ref(db, "product/" + productId);
    set(reference, {
        id: productId,
        name,
        imageUrl,
    });
};

