
// --------------------------------- REALTIME FIREBASE --------------------------------- 

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Realtime database
import { getDatabase, ref, set } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCTOk2rzMHCbw8PQ4wbF0ibssun2jmyOSw",
    authDomain: "carbon-290e2.firebaseapp.com",
    databaseURL: "https://carbon-290e2-default-rtdb.firebaseio.com",
    projectId: "carbon-290e2",
    storageBucket: "carbon-290e2.appspot.com",
    messagingSenderId: "234154299406",
    appId: "1:234154299406:web:83b2d41dea46a0531b2c5f",
    measurementId: "G-V2RWQNPHV2"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();

// Realtime database
export const db = getDatabase(app);
export const dbref = ref(getDatabase());


// ------------------------------------------ FIREBASE FIRESTORE ----------------------------- >

import { getFirestore ,collection , doc , setDoc } from "firebase/firestore";

// Initialize Firebase
export const dbstore = getFirestore(app)

export const insert_message = (data) => {
  try
  {
      let date = Date.now()
      setDoc(doc(dbstore, "messages", date.toString()), data)    
      document.querySelector('.input').value = ''        
  }
  catch(err)
  {   
      console.log(err)
  }
}