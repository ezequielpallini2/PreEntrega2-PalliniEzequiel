import admin from 'firebase-admin';
import serviceAccount from './entraditas-e9bcb-firebase-adminsdk-k1lz2-4c3ae5ed31.json'; // Reemplaza con la ruta a tu archivo de credenciales de Firebase
const data = require('.data.json'); // Reemplaza con la ruta a tu archivo JSON


// Inicializa la aplicación de administración de Firebase
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://console.firebase.google.com/u/0/project/entraditas-e9bcb/firestore/data', // Reemplaza con la URL de tu base de datos Firestore
});

// Obtiene una referencia a la colección en Firestore donde deseas guardar los datos
const db = admin.firestore();
const collectionRef = db.collection('eventos'); // Reemplaza con el nombre de tu colección

// Itera sobre los datos del JSON y agrégalos a Firestore
data.forEach(async (item) => {
  await collectionRef.add(item); // Agrega cada elemento del JSON a Firestore
});

// Cierra la aplicación de administración de Firebase después de completar la carga de datos
admin.app().delete();
