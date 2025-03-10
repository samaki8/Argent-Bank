
import { Link } from "react-router-dom";
import logo from "../img/argentBankLogo.png"; // Chemin corrigé pour le logo

function Header() {
    return (
        <header>
            <nav className="main-nav">
                {/* Lien vers la page d'accueil */}
                <Link className="main-nav-logo" to="/">
                    <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
                    <h1 className="sr-only">Argent Bank</h1>
                </Link>
                <div>
                    {/* Lien vers la page utilisateur */}
                    <Link className="main-nav-item" to="/user">
                        <i className="fa fa-user-circle"></i>
                        My Profile
                    </Link>
                    {/* Lien vers la page de connexion */}
                    <Link className="main-nav-item" to="/login">
                        <i className="fa fa-user-circle"></i>
                        Sign In
                    </Link>
                </div>
            </nav>
        </header>
    );
}

export default Header;
