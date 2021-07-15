import UsersActionTypes from "../actions/users/usersActionTypes";

const initialState = {
    user : null,
    loading : false,
    success : false,
    showMsg : false,
    msg : null,
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case UsersActionTypes.AUTH_START:
            return {
                ...state,
                success : false,
                loading : true,
                showMsg : true,
            }
        case UsersActionTypes.AUTH_SUCCESS:
            return {
                ...state,
                user : action.user,
                success : true,
                loading : false,
                showMsg : true,
            }
        case UsersActionTypes.AUTH_FAIL:
            return {
                ...state,
                success : false,
                loading : false,
                showMsg : true,
                msg : action.error,
            }
        default:
            return initialState;
    }
}

export default usersReducer;
