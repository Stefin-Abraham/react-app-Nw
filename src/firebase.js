import firebase from 'firebase';
  
const firebaseConfig = {
    apiKey: "AIzaSyD6VOTOZvTNzcGpekT6F1gdD6eD8gNWvR0",
    authDomain: "ticket-3d115.firebaseapp.com",
    projectId: "ticket-3d115",
    storageBucket: "ticket-3d115.appspot.com",
    messagingSenderId: "749510324276",
    appId: "1:749510324276:web:a1abf24a343de940079a61"
};
  
firebase.initializeApp(firebaseConfig);
var auth = firebase.auth();
export {auth , firebase};