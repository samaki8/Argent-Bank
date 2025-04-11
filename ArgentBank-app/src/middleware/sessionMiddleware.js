// src/middleware/sessionMiddleware.js
// Middleware pour gérer la session de l'utilisateur
// dans le sessionStorage

export const sessionMiddleware = (store) => (next) => (action) => {
    // Vérifie si l'action est liée à l'authentification
    if (action.type === 'user/setToken') {
        // Stocke le token dans sessionStorage
        sessionStorage.setItem('token', action.payload);
    } else if (action.type === 'user/logoutUser') {
        // Supprime le token lors de la déconnexion
        sessionStorage.removeItem('token');
    }

    return next(action); // Passe l'action au reducer suivant
};
