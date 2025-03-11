import axios from "axios";
export const GET_USER = "GET_USER";
export const getuser = () => {
    return (dispatch) => {
        return axios.get("http://localhost:3001/api/v1/user/profile").then((response) => { dispatch({ type: GET_USER, payload: response.data }); }).catch((error) => { throw error; });
        
    };
}
// Compare this snippet from Project-10-Bank-API-Backend/server/routes/userRoutes.js:
