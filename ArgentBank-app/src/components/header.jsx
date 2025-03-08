
import { Link } from "react-router-dom";
import logo from "../img/argentBankLogo.png";

function Header() {
    return (
        <header>
            <nav className="main-nav">
                <Link className="main-nav-logo" href="./index.html">
                    <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
                    <h1 className="sr-only">Argent Bank</h1>
                </Link>
                <div>
                    <Link className="main-nav-item" to="./profile.html">
                        <i className="fa fa-user-circle"></i>
                        My Profile
                    </Link>
                    <Link className="main-nav-item" to="./sign-in.html">
                        <i className="fa fa-user-circle"></i>
                        Sign In     </Link>
                </div>
            </nav>
        </header>
    );
}
export default Header;