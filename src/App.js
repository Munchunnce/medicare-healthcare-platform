import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Navigation from './components/Nabvar/Navigation';
import Doctors from './components/Doctors/Doctors';
import Specialities from './components/Specialities/Specialities';
import Appointments from './components/Appointments/Appointments';
import About from './pages/About';
import Footer from './pages/Footer';
import Login from './pages/Login';
import Register from './pages/Register';
import SingleDoctor from './pages/SingleDoctor';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navigation />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path='/doctors' element={<Doctors />} />
          <Route path="/doctors/:id" element={<SingleDoctor />} />
          <Route path="/specialities" element={<Specialities />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
