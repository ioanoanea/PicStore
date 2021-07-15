import * as UsersActions from './usersActions';
import firebase from "firebase";
import {onAuthStart, onSignUpFail, onSignUpSuccess} from "./usersActions";
import validateUser from "../../../validators/userValidator";
import Validator from "../../../validators/validator";

/**
 * Sign up user
 * @param username user username
 * @param email user email
 * @param password user password
 * @returns {(function(*): void)|*}
 */
export function signUp(username, email, password) {
    const user = {
        username : username,
        email : email,
        password : password,
    }

    // validate user
    const validationResult = validateUser(user);

    // check if user is valid
    if (validationResult !== Validator.SUCCESS){
        return ((dispatch) => {
            dispatch(onSignUpFail(validationResult));
        });
    }

    return ((dispatch) =>  {
        dispatch(onAuthStart());
        // create new user
        firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
            // register user's data
            firebase.firestore().collection("users").doc(firebase.auth().currentUser.uid).set({
                username,
                email,
            }).then(() => {
                dispatch(onSignUpSuccess());
            }).catch((err) => {
                dispatch(onSignUpFail(err));
            })
        }).catch((error) => {
            dispatch(onSignUpFail(error));
        });
    });
}
