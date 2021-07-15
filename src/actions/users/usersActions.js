import UsersActionTypes from "./usersActionTypes";

export const onAuthStart = () => {
    return {
        type : UsersActionTypes.AUTH_START,
    };
};

export const onAuthSuccess = (user) => {
    return {
        type : UsersActionTypes.AUTH_SUCCESS,
        user : user,
    };
};

export const onAuthFail = (error) => {
    return {
        type : UsersActionTypes.AUTH_FAIL,
        error : error,
    };
};

export const onLogOut = () => {
    return {
        type : UsersActionTypes.LOG_OUT,
    }
}
