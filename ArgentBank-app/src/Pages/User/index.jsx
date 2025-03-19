import { useState, useEffect } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Account from '../../components/account';
import { getUserProfile, updateUserProfile, setToken } from '../../features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


function User() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user?.user || null);
    //const token = useSelector((state) => state.user?.token || null);
    const navigate = useNavigate();
    // const error = useSelector((state) => state.user?.error || null);
    const error = useSelector((state) => state.user?.error || null);

    useEffect(() => {
        if (error) {
            console.error('Erreur lors de la récupération du profil utilisateur :', error);
        }
    }, [error]);


    //Initialisation des champs avec les données de l'utilisateur


    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {

            dispatch(setToken(storedToken)); // Créez une action setToken si nécessaire
            console.log('Récupération des données utilisateur', getUserProfile());
            dispatch(getUserProfile());
        }
    }, [dispatch]);

    useEffect(() => {
        if (user) {
            console.log('Données utilisateur :', user);
            setFirstName(user.firstName || '');
            setLastName(user.lastName || '');
        }
    }, [user]);
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateUserProfile({ firstName, lastName }))
            .unwrap()
            .then((response) => {
                if (response.body.token) {
                    localStorage.setItem('token', response.body.token);
                    navigate('/user');
                }
            })
            .catch((error) => {
                console.error('Erreur lors de la mise à jour du profil :', error);
            });
        setIsEditing(false); // Réinitialise l'état d'édition
    };

    const handleCancel = () => {
        setIsEditing(false); // Réinitialise l'état d'édition
        setFirstName(user.firstName || ''); // Réinitialise les champs avec les données de l'utilisateur
        setLastName(user.lastName || '');
    };

    return (
        <>
            <Header className="header" />

            <main className="main bg-dark">
                <div className="header">
                    <h1>Welcome back<br /> {firstName} {lastName}!</h1>
                    <button type="button" className="edit-button" onClick={() => setIsEditing(true)}>Edit Name</button>
                    {isEditing ? (
                        <form onSubmit={handleSubmit} className="form">
                            <label htmlFor="firstName">First Name</label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                placeholder="Tony"
                                value={firstName} onChange={(e) => setFirstName(e.target.value)} />

                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" id="lastName" name="lastName" placeholder="Jarvis" value={lastName} onChange={(e) => setLastName(e.target.value)} />

                            <button type="submit" className="submit-button">Submit</button>
                            <button type="button" className="cancel-button" onClick={handleCancel}>Cancel</button>
                        </form>
                    ) : null}
                </div>
                <h2 className="sr-only">Accounts</h2>

                {/* Utilisation du composant Account */}
                <Account title="Argent Bank Checking" amount="$2,082.79" description="Available Balance" suffix="x8349" />
                <Account title="Argent Bank Savings" amount="$10,928.42" description="Available Balance" suffix="x6712" />
                <Account title="Argent Bank Credit Card" amount="$184.30" description="Current Balance" suffix="x8349" />
            </main>
            <Footer className="footer" />
        </>
    );
}

export default User;