import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Main } from './components/Main';
import { Contact } from './components/Contact';
import About from './components/About';
import Alojamientos from './components/admin/Alojamientos';
import Reservas from './components/admin/Reservas';
import AddTipoAlojamiento from './components/admin/form/AddTipoAlojamiento';

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/main" element={<Main />} />
          <Route path="/admin" element={<Alojamientos />} />
          <Route path="/admin/alojamientos" element={<Alojamientos />} />
          <Route path="/admin/reservas" element={<Reservas />} />
          <Route path="/agregar-alojamiento" element={<AddTipoAlojamiento />} />
        </Routes>
      </>
    </Router> 
  );
}

export default App;
