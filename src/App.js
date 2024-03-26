import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Views/Home';
import NavBar from './Components/NavBar';
import MajorPage from './Views/MajorPage';
import NotFound from './Views/NotFound';

function App() {
    return (
        <div className="App">
            <NavBar />
            <div className="content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/majors" element={<MajorPage />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
