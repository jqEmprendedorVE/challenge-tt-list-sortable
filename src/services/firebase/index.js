import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/storage'

var config = {
  apiKey: "AIzaSyAgKi7WVftXQe3VZeMLhk0g_ckXsrSS1Cc",
  authDomain: "challenge-tt-list-sortable.firebaseapp.com",
  databaseURL: "https://challenge-tt-list-sortable.firebaseio.com",
  projectId: "challenge-tt-list-sortable",
  storageBucket: "challenge-tt-list-sortable.appspot.com",
  messagingSenderId: "866472567588"
};

var FirebasePlugin = {
  db: () => firebase.database(),
  storage: () => firebase.storage()
}

export default function () {
  if (!firebase.apps.length) firebase.initializeApp(config);
  return FirebasePlugin;
}