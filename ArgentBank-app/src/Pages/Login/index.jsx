import Header from '../../components/header';
import Footer from '../../components/footer';
import { useSelector } from 'react-redux';



function Login() {
    const user = useSelector((state) => state.userReducer);
    console.log(user);
    return (
        <>
            <Header className="header" />

            <main className="main bg-dark">
                <section className="sign-in-content">
                    <i className="fa fa-user-circle sign-in-icon"></i>
                    <h1>Sign In</h1>
                    <form>
                        <div className="input-wrapper">
                            <label htmlFor="username">Username</label>
                            <input type="text" id="username" />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" />
                        </div>
                        <div className="input-remember">
                            <input type="checkbox" id="remember-me" />
                            <label htmlFor="remember-me">Remember me</label>
                        </div>

                        {/* Vous avez deux éléments "Sign In", choisissez celui que vous souhaitez garder */}
                        <a href="./user.html" className="sign-in-button">Sign In</a>
                        {/* ou */}
                        <button className="sign-in-button">Sign In</button>

                    </form>
                </section>
            </main>
            <Footer className="footer" />
        </>
    );
}

export default Login;
