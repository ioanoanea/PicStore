import React from 'react';
import LogInScreen from "./src/view/screens/LogInScreen";
import * as firebase from "firebase";
import FirebaseConfig from "./src/firebase/FirebaseConfig";

export default function App() {

    // initialize firebase app
    if(!firebase.app.length){
        firebase.initializeApp(FirebaseConfig);
    }

    return (
        <LogInScreen/>
    );
}
