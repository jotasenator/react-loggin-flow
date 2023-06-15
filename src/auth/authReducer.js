export const authReducer = ( state, action ) =>
{
    switch ( action.type )
    {
        case "LOGIN":
            localStorage.setItem( "user", JSON.stringify( action.payload.user ) );
            localStorage.setItem( "isAuthenticated", true );
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload.user,
            };
        case "LOGIN_ERROR":
            return {
                ...state,
                error: action.payload.error,
            };
        case "LOGOUT":
            localStorage.clear();
            return {
                ...state,
                isAuthenticated: false,
                user: null,
            };
        default:
            return state;
    }
};
