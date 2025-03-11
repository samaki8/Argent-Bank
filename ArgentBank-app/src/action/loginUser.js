import axios from 'axios';

export const logoutUser = () => {   
    return {
        type: 'user/logout'
    };
}
///export const GET_USER = 'GET_USER';  
// Define the loginUser action
// This action will be used to log in a user
export const loginUser = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('http://localhost:3001/api/v1/user/login ', {   //http://localhost:3001/api/v1/user/signup  ou  http://localhost:3001/api/v1/user/login
        email,
        password
      });
       console.log(response.data);
      dispatch({
        type: 'user/login',
        payload: response.data
      });
    } catch (error) {
      console.error(error);
    }
  };
}