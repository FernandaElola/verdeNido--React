import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Main } from './components/Main';
import { Contact } from './components/Contact';
import About from './components/About';
import Alojamientos from './components/admin/Alojamientos';
import AddAlojamiento from './components/admin/form/AddAlojamiento';
import AddTipoAlojamiento from './components/admin/form/AddTipoAlojamiento';
import Servicios from './components/admin/Servicios';
import EditServicios from './components/admin/EditServicios';
import AddServicios from './components/admin/form/AddServicios';
import TipoDeAlojamiento from './components/admin/TipoDeAlojamiento';
import AlojamientoDetail from './components/AlojamientoDetail';
import Imagenes from './components/admin/Imagenes';

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/main" element={<Main />} />
          <Route path="/details/:id" element={<AlojamientoDetail />} />
          <Route path="/admin" element={<Alojamientos />} />
          <Route path="/admin/alojamientos" element={<Alojamientos />} />
          <Route path="/admin/alojamiento/agregar" element={<AddAlojamiento />} />
          <Route path="/admin/tipo-alojamiento/agregar" element={<AddTipoAlojamiento />} />
          <Route path="/admin/servicios" element={<Servicios />} />
          <Route path="/admin/servicios/edit/:id" element={<EditServicios />} />
          <Route path="/admin/servicios/agregar" element={<AddServicios />} />
          <Route path="/admin/tipo-alojamiento" element={<TipoDeAlojamiento />} />
          <Route path="/admin/imagenes/edit/:id" element={<Imagenes />} />
        </Routes>
      </>
    </Router> 
  );
}

export default App;
