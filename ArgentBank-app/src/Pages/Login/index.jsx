import Header from '../../components/header';
import Footer from '../../components/footer';
import { useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../action/loginUser';

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const dispatch = useDispatch();
const authError = useSelector((state) => state.auth.error);
const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(email, password));
};


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
                            <input type="email" id="username" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        </div>
                        <div className="input-remember">
                            <input type="checkbox" id="remember-me" />
                            <label htmlFor="remember-me">Remember me</label>
                        </div>

                        <button type="submit" className="sign-in-button">Sign In</button>

                    </form>
                    {authError && <p style={{ color: 'red' }}>{authError}</p>}
                </section>
            </main>
            <Footer className="footer" />
        </>
    );
}

export default Login;
