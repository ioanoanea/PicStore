import React from 'react';
import LogInScreen from "./src/view/screens/LogInScreen";
import firebase from "firebase";
import FirebaseConfig from "./src/firebase/FirebaseConfig";
import SignUpScreen from "./src/view/screens/SignUpScreen";
import {Provider} from "react-redux";
import appStore from "./src/store/AppStore";

export default function App() {

    // initialize firebase app
    if (!firebase.apps.length){
        firebase.initializeApp(FirebaseConfig);
    }

    return (
        <Provider store={appStore}>
            <SignUpScreen/>
        </Provider>
    );
}
