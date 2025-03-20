//import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "../img/argentBankLogo.png"; // Chemin corrigé pour le logo
import LogoutButton from "./LogoutButton";
//import { useEffect, useState } from "react";
//import { getUserProfile, updateUserProfile, setToken } from '../../features/userSlice';

// Composant Header qui contient le menu de navigation et les informations de l'utilisateur authentifié
function Header() {
    // Récupération des données utilisateur
    const user = useSelector((state) => state.user?.user || null);
    const token = useSelector((state) => state.user?.token || null);



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
                                {user?.firstName || 'chargement ...'}
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


