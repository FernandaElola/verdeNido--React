import React, { useState  } from 'react';
import Nav from '../../Nav';
import './AddTipoAlojamiento.css';

const AddTipoAlojamiento = () => {

  const [descripcion, setDescription] = useState('');

  const enviar = async (e) => {
    e.preventDefault();
    const json = {
      Descripcion: descripcion
    };

    try {
      const response = await fetch('http://localhost:3001/tiposAlojamiento/createTipoAlojamiento', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(json)
      });

      const data = await response.json();
      console.log('Success:', data);

      setDescription('');
      alert('Tipo de alojamiento creado con éxito');
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <div className="main-container">
      <Nav />
      <div className="content-container">
        <div className="form-container">
          
      <h2>Agregar Tipo Alojamiento</h2>
          <form onSubmit={enviar}>
            <div>
              <label htmlFor="descripcion">Descripción</label>
              <input
                type="text"
                id="descripcion"
                value={descripcion}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <button type="submit">Enviar</button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default AddTipoAlojamiento;
