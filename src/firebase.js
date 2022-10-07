import firebase from 'firebase';
  
const firebaseConfig = {
    apiKey: "AIzaSyC6gusBI_DKohpGg3PVpOBpjcPNnxkVKPw",
    authDomain: "revol-bb930.firebaseapp.com",
    databaseURL: "https://revol-bb930.firebaseio.com",
    projectId: "revol-bb930",
    storageBucket: "revol-bb930.appspot.com",
    messagingSenderId: "60754649641",
    appId: "1:60754649641:web:91cc7ca1e5151a16687238",
    measurementId: "G-E0GZCCKQQM"
};
    
firebase.initializeApp(firebaseConfig);
var database = firebase.database();
  
export default database;