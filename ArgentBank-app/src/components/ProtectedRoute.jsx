
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const token = useSelector((state) => state.auth.token);

    if (!token) {
        return <Navigate to="/login" />;
    }

    return children;
};
ProtectedRoute.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ProtectedRoute;

