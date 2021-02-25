import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCUZta7k1P0G6FyT6nImG7bgIq8mT2DWMo",
  authDomain: "slackclonechallenge.firebaseapp.com",
  projectId: "slackclonechallenge",
  storageBucket: "slackclonechallenge.appspot.com",
  messagingSenderId: "109298690611",
  appId: "1:109298690611:web:fdd09be083447568a79146",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
