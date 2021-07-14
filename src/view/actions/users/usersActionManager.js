import * as UsersActions from './usersActions';
import firebase from "firebase";
import {onSignUpFail, onSignUpSuccess} from "./usersActions";


export default function singUp(username, email, password) {
    return ((dispatch) =>  {
        // create new user
        firebase.auth().createUserWithEmailAndPassword(email, password).then((result) => {
            if (result) {
                // register user's data
                firebase.firestore().collection("users").doc(firebase.auth().currentUser.uid).set({
                    username,
                    email,
                }).then((r) => {
                    if (r) {
                        dispatch(onSignUpSuccess());
                    } else {
                        dispatch(onSignUpFail("Failed to Sign Up!"));
                    }
                }).catch((err) => {
                    dispatch(onSignUpFail(err));
                })
            } else {
                dispatch(onSignUpFail("Failed to Sign Up!"));
            }
        }).catch((error) => {
            dispatch(onSignUpFail(error));
        });
    });
}
