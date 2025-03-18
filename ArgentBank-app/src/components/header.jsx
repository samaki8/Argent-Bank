//import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "../img/argentBankLogo.png"; // Chemin corrigé pour le logo
import LogoutButton from "./LogoutButton";

function Header() {
    const user = useSelector((state) => state.user); // Récupérer l'état auth depuis Redux
    const token = user?.token; // Vérifier si le token existe

    return (
        <header>
            <nav className="main-nav">
                {/* Lien vers la page d'accueil */}
                <Link className="main-nav-logo" to="/">
                    <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
                    <h1 className="sr-only">Argent Bank</h1>
                </Link>
                <div>
                    {/* Si l'utilisateur est authentifié */}
                    {token ? (
                        <>
                            {/* Lien vers la page utilisateur */}
                            <Link className="main-nav-item" to="/user">
                                <i className="fa fa-user-circle"></i>
                                My Profile
                            </Link>
                            {/* Bouton de déconnexion */}
                            <LogoutButton />
                        </>
                    ) : (
                        <>
                            {/* Lien vers la page de connexion */}
                            <Link className="main-nav-item" to="/login">
                                <i className="fa fa-user-circle"></i>
                                Sign In
                            </Link>
                        </>
                    )}
                </div>
            </nav>
        </header>
    );
}

export default Header;


