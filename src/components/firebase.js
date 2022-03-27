import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAXbQhm1ww0XUiBZIzhdMmnP_wJ2J7k8ek",
  authDomain: "test-19e9a.firebaseapp.com",
  databaseURL: "https://test-19e9a-default-rtdb.firebaseio.com",
  projectId: "test-19e9a",
  storageBucket: "test-19e9a.appspot.com",
  messagingSenderId: "829758639849",
  appId: "1:829758639849:web:c53abd703d9fef4cc2ea78",
  measurementId: "G-GZNDJXGPM7",
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;


