import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBHsedXUS9PY_49M9TUeIg56XeOzsicujo",
  authDomain: "ppbi-de75f.firebaseapp.com",
  projectId: "ppbi-de75f",
  storageBucket: "ppbi-de75f.appspot.com",
  messagingSenderId: "520691332856",
  appId: "1:520691332856:web:95b11093742d99c2e9ed0d",
  measurementId: "G-W3B6123MKL"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);