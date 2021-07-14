const initialState = {
    user : null,
}

const usersReducer = (state = initialState, action) => {
    return {
        ...state,
        user : action.user,
    };
}

export default usersReducer;
