
const initialState = {};
export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case "user/login":
      return { ...state, ...action.payload };
    case "user/logout":
      return {};
    default:
      return state;
  }
}