const initialState = { loggedIn: false, user : ''};

export default function authentication(state = initialState, action) {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {loggedIn: true, user: action.user};
        case 'LOGIN_FAILURE':
            return {loggedIn: false, user : ''};
        case 'LOGOUT':
            return {loggedIn: false, user : ''};
        default:
            return state;
    }
}