const { initializeApp } = require('firebase/app');
const { getFirestore, collection, addDoc } = require('firebase/firestore');
const data = require('./tu-archivo-json.json'); // Reemplaza con la ruta a tu archivo JSON

// Configura la aplicación de Firebase
const firebaseConfig = {
  apiKey: 'tu-api-key',
  authDomain: 'tu-auth-domain',
  projectId: 'tu-project-id',
  storageBucket: 'tu-storage-bucket',
  messagingSenderId: 'tu-messaging-sender-id',
  appId: 'tu-app-id'
};

const app = initializeApp(firebaseConfig);

// Obtiene una referencia a la base de datos Firestore
const db = getFirestore(app);

// Referencia a la colección en la que deseas agregar los documentos
const miColeccion = collection(db, 'nombre-de-tu-coleccion'); // Reemplaza con el nombre de tu colección

// Itera sobre los datos del JSON y agrégalos a Firestore
data.forEach(async (item) => {
  try {
    await addDoc(miColeccion, item); // Agrega cada elemento del JSON a Firestore
    console.log('Documento agregado:', item);
  } catch (error) {
    console.error('Error al agregar el documento:', error);
  }
});
