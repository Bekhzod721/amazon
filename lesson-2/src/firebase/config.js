import firebase from "firebase/app";
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyABtDepqeuBnh0JrfoS6nVYYy7f4IEodbA",
  authDomain: "hello-cda2b.firebaseapp.com",
  projectId: "hello-cda2b",
  storageBucket: "hello-cda2b.appspot.com",
  messagingSenderId: "695682821985",
  appId: "1:695682821985:web:4890cc60635e5802b25f20",
};

const backend = firebase.initializeApp(firebaseConfig);
const auth = backend.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, backend }