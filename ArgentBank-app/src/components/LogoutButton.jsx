//ArgentBank-app\src\components\LogoutButton.jsx

import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUser } from "../features/userSlice";


const LogoutButton = () => {
    const navigate = useNavigate(); // Hook pour la navigation
    const dispatch = useDispatch(); // Hook pour Redux

    const handleLogout = async () => {
        await dispatch(logoutUser()); // Déconnecte l'utilisateur via Redux
        localStorage.removeItem('token');
        navigate("/logout"); // Redirige vers la page de déconnexion ou d'accueil
    };

    return (
        <Link onClick={handleLogout} className="main-nav-item">
            <i className="fa fa-sign-out"></i>
            Sign Out
        </Link>
    );
};

export default LogoutButton;

