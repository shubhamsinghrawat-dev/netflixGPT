import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCEEvlKVE3k7erFW085DgQEv6mfbjR4qeU",
  authDomain: "netflixgpt-9a75f.firebaseapp.com",
  projectId: "netflixgpt-9a75f",
  storageBucket: "netflixgpt-9a75f.appspot.com",
  messagingSenderId: "946331443012",
  appId: "1:946331443012:web:c27e712a5d6c1a23754111"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
