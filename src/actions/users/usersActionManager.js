import firebase from "firebase";
import {onAuthFail, onAuthStart, onAuthSuccess} from "./usersActions";
import validateUser from "../../validators/userValidator";
import Validator from "../../validators/validator";

/**
 * Returns users by username
 * @param username user username
 * @returns {*}
 */
function getByUsername(username) {
    // to be implemented
    return false;
}

/**
 * Returns users by email
 * @param email user email
 * @returns {*}
 */
function getByEmail(email) {
    // to be implemented
    return false;
}

/**
 * Sign up user
 * @param username user username
 * @param email user email
 * @param password user password
 * @param confirmPassword password confirmation
 * @returns {(function(*): void)|*}
 */
export function signUp(username, email, password, confirmPassword) {
    // check if password confirmation is correct
    if (password !== confirmPassword) {
        return ((dispatch) => dispatch(onAuthFail("Passwords don't match!")));
    }

    // create constant user
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
            dispatch(onAuthFail(validationResult));
        });
    }

    // check if username already exists
    if (getByUsername(username)) {
        return ((dispatch) => {
            dispatch(onAuthFail("Username already exists!"));
        })
    }

    // check if email already exists
    if (getByEmail(email)) {
        return ((dispatch) => {
            dispatch(onAuthFail("Username already exists!"));
        })
    }

    return ((dispatch) => {
        // notify start authentication
        dispatch(onAuthStart());
        // create new user
        firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
            // register user's data
            firebase.firestore().collection("users").doc(firebase.auth().currentUser.uid).set({
                username,
                email,
            }).then(() => {
                dispatch(onAuthSuccess(firebase.auth().currentUser));
            }).catch((err) => {
                dispatch(onAuthFail(err));
            })
        }).catch((error) => {
            dispatch(onAuthFail(error));
        });
    });
}
