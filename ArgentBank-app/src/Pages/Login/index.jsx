import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../features/authSlice'; // Import de la fonction asynchrone
import Header from '../../components/header';
import Footer from '../../components/footer';
import { useNavigate } from 'react-router-dom';


function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const authError = useSelector((state) => state.auth?.error || null);
    const token = useSelector((state) => state.auth?.token || null); // Récupère le token depuis Redux
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginUser({ email, password }))
            .unwrap() // Permet de gérer les promesses rejetées si nécessaire
            .then((response) => {
                if (response.body.token) {
                    localStorage.setItem('token', response.body.token); // Stocke le token dans le localStorage
                    navigate('/user'); // Redirige vers /user si le token existe
                }
            })
            .catch((error) => {
                console.error('Erreur lors de la connexion :', error);
            });
    };

    return (
        <>
            <Header className="header" />
            <main className="main bg-dark">
                <section className="sign-in-content">
                    <i className="fa fa-user-circle sign-in-icon"></i>
                    <form onSubmit={handleSubmit}>
                        <h1 className="sign-in-heading">Sign In</h1>
                        <div className="input-wrapper">
                            <label htmlFor="username">Username</label>
                            <input
                                type="email"
                                id="username"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
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

