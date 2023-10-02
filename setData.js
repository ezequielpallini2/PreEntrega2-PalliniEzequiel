import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore"
import data from './data.json' assert { type: "json" }; 
const firebaseConfig = {
  apiKey: "AIzaSyCQLHDB0a4UbJK7YHBuS8E3iRr1Z5a6Fn0",
  authDomain: "entraditas-e9bcb.firebaseapp.com",
  projectId: "entraditas-e9bcb",
  storageBucket: "entraditas-e9bcb.appspot.com",
  messagingSenderId: "692461298885",
  appId: "1:692461298885:web:5f83c153d1f3664dbbfcac",
  measurementId: "G-927NKJCLZX"
};

const app = initializeApp(firebaseConfig);


const db = getFirestore(app);

const miColeccion = collection(db, 'eventos'); 

data.forEach(async (item) => {
  try {
    await addDoc(miColeccion, item); 
    console.log('Documento agregado:', item);
  } catch (error) {
    console.error('Error al agregar el documento:', error);
  }
});
