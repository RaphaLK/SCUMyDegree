import { Navigate } from 'react-router-dom';
import { useAuth } from '../Contexts/AuthContext';

function PrivateRoute({ children }) {
    const { currentUser } = useAuth();

    return currentUser ? <>{children}</> : <Navigate to="/" replace={true} />;
}

export default PrivateRoute;