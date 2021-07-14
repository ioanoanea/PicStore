import UsersActionTypes from "./usersActionTypes";

export const onSignUpSuccess = () => {
    return {
        type : UsersActionTypes.SIGN_UP_SUCCESS,
    };
};

export const onSignUpFail = (error) => {
    return {
        type : UsersActionTypes.SIGN_UP_FAIL,
        error : error,
    };
};

export const onLogInSuccess = (user) => {
    return {
        type : UsersActionTypes.LOG_IN_SUCCESS,
        user : user,
        isLoggedIn : true,
    };
};

export const onLogInFail = (error) => {
    return {
        type : UsersActionTypes.LOG_IN_FAIL,
        error : error,
    };
};

export const onLogOut = () => {
    return {
        type : UsersActionTypes.LOG_OUT,
    }
}
