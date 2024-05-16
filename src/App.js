import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Nav } from './components/Nav';
import { Main } from './components/Main';
import { Footer } from './components/Footer';
import { Contact } from './components/Contact';

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/main" element={<Main nroClase="8" tituloTema="Como hacer uso de las props" />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
