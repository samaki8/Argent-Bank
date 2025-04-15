//ArgentBank-app\src\app.jsx
import { useEffect } from 'react';


import Router from './Router.jsx'
// Importation des actions Redux
import { setToken, getUserProfile } from './features/userSlice';
// Importation du store Redux
import { useDispatch } from 'react-redux';
function App() {


  // Création du dispatch

  const dispatch = useDispatch();

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    if (token) {
      dispatch(setToken(token));
      dispatch(getUserProfile());
    }
  }, [dispatch]);


  return (

    <Router />

  );
}


export default App
