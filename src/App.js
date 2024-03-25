import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import NavBar from './Components/NavBar';

function App() {
    return (
        <div className="App">
            <NavBar />
            <div className="content">    
                <Home />
            </div>
        </div>
    );
}

export default App;
