import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyCqeIFGng7wF8hZPDiMMG_ExXw7dHZNVHQ",
    authDomain: "login-authentication-da15b.firebaseapp.com",
    databaseURL: "https://login-authentication-da15b-default-rtdb.firebaseio.com",
    projectId: "login-authentication-da15b",
    storageBucket: "login-authentication-da15b.appspot.com",
    messagingSenderId: "106204256795",
    appId: "1:106204256795:web:74195aeeb978ebd55476be"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);