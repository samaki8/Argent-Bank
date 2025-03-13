import React from 'react';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../actions/loginUser';

const LogoutButton = () => {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logoutUser());
    };

    return (
        <button onClick={handleLogout}>Se déconnecter</button>
    );
};

export default LogoutButton;
