import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"; // ✅ NEW

const firebaseConfig = {
  apiKey: "AIzaSyARbABC-uIiqd99TG6x9JtqKygl0EH7HHs",
  authDomain: "personal-website-65d88.firebaseapp.com",
  projectId: "personal-website-65d88",
  storageBucket: "personal-website-65d88.firebasestorage.app",
  messagingSenderId: "150435632705",
  appId: "1:150435632705:web:462a389ff9e96c2c6698c0"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app); // ✅ EXPORT STORAGE
