import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCXj9DQmA_HsWSC3UEcVEGMDAiUBOw8AN0",
    authDomain: "sih24-f9731.firebaseapp.com",
    projectId: "sih24-f9731",
    storageBucket: "sih24-f9731.appspot.com",
    messagingSenderId: "682547016678",
    appId: "1:682547016678:web:54cd6e82f4710d8c281c27",
    measurementId: "G-ZS4H0D430K"
  };

  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app);
