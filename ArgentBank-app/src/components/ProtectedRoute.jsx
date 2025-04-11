//ArgentBank-app\src\components\ProtectedRoute.jsx


import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    // Vérification double - Redux ET sessionStorage
    const reduxToken = useSelector((state) => state.user.token);
    const sessionToken = sessionStorage.getItem('token');

    // L'authentification n'est valide que si les deux existent
    if (!reduxToken || !sessionToken) {
        // Redirection vers la page de login plutôt que la racine
        return <Navigate to="/login" />;
    }

    return children;
};

ProtectedRoute.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ProtectedRoute;

/*import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const token = useSelector((state) => state.user.token);

    if (!token) {
        return <Navigate to="/" />;
    }

    return children;
};
ProtectedRoute.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ProtectedRoute;*/

