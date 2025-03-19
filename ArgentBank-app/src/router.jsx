import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import User from "./Pages/User";
import Error from "./Pages/Error";
import Logout from "./Pages/Logout";
import ProtectedRoute from "./components/ProtectedRoute";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                {/* Route protégée */}
                <Route
                    path="/user"
                    element={
                        <ProtectedRoute>
                            <User />
                        </ProtectedRoute>
                    }
                />
                {/* Route pour la déconnexion */}
                <Route path="/logout" element={<Logout />} />
                {/* Route pour les erreurs */}
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;

