import axios from 'axios';

// Action pour se connecter
export const loginUser = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('http://localhost:3001/api/v1/user/login', {
        email,
        password,
      });

      console.log(response.data); // Vérifiez la réponse du backend

      dispatch({
        type: 'USER_LOGIN_SUCCESS',
        payload: response.data, // Contient le token et autres données utilisateur
      });
    } catch (error) {
      console.error(error);
      dispatch({
        type: 'USER_LOGIN_FAILURE',
        payload: error.response?.data?.message || 'Erreur lors de la connexion',
      });
    }
  };
};

// Action pour se déconnecter
export const logoutUser = () => {
  return {
    type: 'USER_LOGOUT',
  };
};
