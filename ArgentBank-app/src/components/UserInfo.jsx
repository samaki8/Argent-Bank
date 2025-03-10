// src/components/UserInfo.js

import { useSelector, useDispatch } from 'react-redux';
import { fetchUserData } from '../features/userSlice'; // Corrigez le chemin vers userSlice
import { useEffect } from 'react';

function UserInfo() {
    const { data: user, loading, error } = useSelector((state) => state.user); // Accès à l'état utilisateur
    const dispatch = useDispatch();

    // Récupération des données utilisateur au montage du composant
    useEffect(() => {
        dispatch(fetchUserData()); // Assurez-vous que fetchUserData prend un argument si nécessaire
    }, [dispatch]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error! {error}</div>;
    }

    return (
        <div>
            {/* Affichage des données utilisateur */}
            <p>Name: {user?.name}</p>
            <p>Email: {user?.email}</p>
        </div>
    );
}

export default UserInfo;

