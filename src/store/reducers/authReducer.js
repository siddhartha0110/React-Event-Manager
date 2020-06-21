
const initialState = {
    authError: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_ERROR':
            console.log('Error');
            console.log(action.payload.message);
            return {
                ...state,
                authError: action.payload.message
            }
        case 'LOGIN_SUCCESS':
            console.log('Success');
            return {
                ...state,
                authError: null
            };
        case 'LOGOUT_SUCCESS':
            console.log('signout success');
            return state;
        default:
            return state;

    }
}

export default authReducer;