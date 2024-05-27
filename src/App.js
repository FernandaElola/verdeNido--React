import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Main } from './components/Main';
import { Contact } from './components/Contact';
import About from './components/About';
import Admin from './components/Admin';
import Cabañas from './components/Cabañas';
import Reservas from './components/Reservas';

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/main" element={<Main />} />
          <Route path="/admin" element={<Cabañas />} />
          <Route path="admin/cabañas" element={<Cabañas />} />
          <Route path="admin/reservas" element={<Reservas />} />
        </Routes>
      </>
    </Router> 
  );
}

export default App;
