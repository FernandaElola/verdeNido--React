import React, { useState  } from 'react';
import Nav from '../../Home/Nav';
import './Form.css';
import { useNavigate } from 'react-router-dom';

const AddTipoAlojamiento = () => {

  const [nombre, setNombre] = useState('');
  const navigate = useNavigate();

  const enviar = async (e) => {
    e.preventDefault();
    const json = {
      Nombre: nombre
    };

    try {
      const response = await fetch('http://localhost:3001/servicio/createServicio', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(json)
      });

      const data = await response.json();
      console.log('Success:', data);

      setNombre('');
      alert('Servicio creado con éxito');
      navigate('/admin/servicios');
    } catch (error) {
      console.error('Error:', error);
    }
  }

  const handleCancel = () => {
    navigate('/admin/servicios');
  };

  return (
    <div className="main-container">
      <Nav />
      <div className="content-container">
        <div className="form-container">
          
      <h2>Agregar Servicio</h2>
          <form onSubmit={enviar}>
            <div>
              <label htmlFor="nombre">Nombre</label>
              <input
                type="text"
                id="nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>
            <div className="buttons">
              <button className="submit" type="submit">Enviar</button>
              <button className="cancel" type="button" onClick={handleCancel}>Cancelar</button>
            </div>         
          </form>
        </div>

      </div>
    </div>
  );
};

export default AddTipoAlojamiento;
