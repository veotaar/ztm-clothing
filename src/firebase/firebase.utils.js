import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyC53oyoTOadTd9DZxdn2wtlnImQUqMeWKw",
  authDomain: "ztm-db.firebaseapp.com",
  databaseURL: "https://ztm-db.firebaseio.com",
  projectId: "ztm-db",
  storageBucket: "ztm-db.appspot.com",
  messagingSenderId: "109983754094",
  appId: "1:109983754094:web:f702063e6a3804674a837f",
  measurementId: "G-QNT10NDCG9"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;