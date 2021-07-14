import React from 'react';
import LogInScreen from "./src/view/screens/LogInScreen";
import firebase from "firebase";
import FirebaseConfig from "./src/firebase/FirebaseConfig";
import SignUpScreen from "./src/view/screens/SignUpScreen";

export default function App() {

    // initialize firebase app
    let firebaseApp;
    if (!firebaseApp){
        firebaseApp = firebase.initializeApp(FirebaseConfig);
    }

    return (
        <SignUpScreen/>
    );
}
