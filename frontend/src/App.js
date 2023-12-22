import 'simplebar/dist/simplebar.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/carusel.css'
import './css/login.css'
import './css/navbar.css'
import './css/home.css'
import './css/register.css'
import './css/chatGPT.css'
import './css/night1337blue.css'
import Navbar from './components/Navbar';
import Home from './pages/Home';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route 
            path="/"
            element={<Home />}
          />
          <Route 
            path="/home"
            element={<Home />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
