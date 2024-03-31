import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Views/Home';
import NavBar from './Components/NavBar';
import MajorPage from './Views/MajorPage';
import NotFound from './Views/NotFound';
import PrivateRoute from './Components/PrivateRoute';
import { AuthProvider } from './Contexts/AuthContext';

function App() {
    return (
        <div className="App">
            <AuthProvider>
                <NavBar />
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route 
                            path="/majors"
                            element={
                                <PrivateRoute>
                                    <MajorPage />
                                </PrivateRoute>
                        }
                        />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </div>
            </AuthProvider>
        </div>
    );
}

export default App;
