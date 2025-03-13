const initialState = {
  user: null,
  token: null,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'USER_LOGIN_SUCCESS':
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        error: null,
      };
    case 'USER_LOGIN_FAILURE':
      return {
        ...state,
        error: action.payload,
      };
    case 'USER_LOGOUT':
      return initialState; // Réinitialise l'état utilisateur
    default:
      return state;
  }
};

export default authReducer;


