import UsersActionTypes from "../actions/users/usersActionTypes";

const initialState = {
    user : null,
    loading : false,
    success : false,
    showMsg : 0,
    msg : null,
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case UsersActionTypes.AUTH_START:
            return {
                ...state,
                loading : true,
                showMsg : 1,
            }
        case UsersActionTypes.SIGN_UP_SUCCESS:
            return {
                ...state,
                success : true,
                loading : false,
                showMsg : 1,
            }
        case UsersActionTypes.SIGN_UP_FAIL:
            return {
                ...state,
                success : false,
                loading : false,
                showMsg : 1,
                msg : action.error,
            }
        default:
            return initialState;
    }
}

export default usersReducer;
