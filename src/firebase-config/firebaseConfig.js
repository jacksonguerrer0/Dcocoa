import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBA-s-lzU-QyNE3JCE-oNYe__UKw5acCLw",
    authDomain: "econmerce-dcocoa.firebaseapp.com",
    projectId: "econmerce-dcocoa",
    storageBucket: "econmerce-dcocoa.appspot.com",
    messagingSenderId: "429468046512",
    appId: "1:429468046512:web:edee2619c089c7aef91775"
  };
//inicializa firebase
firebase.initializeApp(firebaseConfig);


//referencia de la base de datos 
const db = firebase.firestore();


//permite autenticacion con google 
const google = new firebase.auth.GoogleAuthProvider()


 
//se exporta 
export {firebase, db, google}