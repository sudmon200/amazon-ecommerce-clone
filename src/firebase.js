import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAU8gBwLqGOXADIc4hxzjs2gAVHXNBbHEk',
  authDomain: 'ecommerce-clone-12a49.firebaseapp.com',
  databaseURL: 'https://ecommerce-clone-12a49.firebaseio.com',
  projectId: 'ecommerce-clone-12a49',
  storageBucket: 'ecommerce-clone-12a49.appspot.com',
  messagingSenderId: '320772641628',
  appId: '1:320772641628:web:33fdb7b61214c252646799',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
