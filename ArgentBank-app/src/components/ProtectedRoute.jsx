//ArgentBank-app\src\components\ProtectedRoute.jsx

// ArgentBank-app\src\components\ProtectedRoute.jsx
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const token = sessionStorage.getItem('token');
    return token ? children : <Navigate to="/login" replace />;
};


ProtectedRoute.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ProtectedRoute;



/*
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    // Vérification double - Redux ET sessionStorage
    const reduxToken = useSelector((state) => state.user.token);
    const sessionToken = sessionStorage.getItem('token');
    const user = useSelector((state) => state.user?.user);

    // L'authentification n'est valide que si les deux existent
    if (!reduxToken || !sessionToken || !user) {
        // Redirection vers la page de login plutôt que la racine
        return <Navigate to="/login" replace />;
    }

    return children;
};

ProtectedRoute.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
*/