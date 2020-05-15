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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch(error) {
      console.log('error creating user', error.message)

    }
  }

  return userRef;
}



export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;