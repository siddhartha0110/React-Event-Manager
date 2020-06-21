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

        case 'SIGNUP_SUCCESS':
            console.log('signup success');
            return {
                ...state,
                authError: null
            }

        case 'SIGNUP_ERROR':
            console.log('error');
            console.log(action.payload.message);
            return {
                ...state,
                authError: action.payload.message
            }

        default:
            return state;

    }
}

export default authReducer;