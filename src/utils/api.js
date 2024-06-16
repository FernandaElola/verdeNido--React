// api.js
export const fetchTiposAlojamiento = async () => {
  try {
    const response = await fetch('http://localhost:3001/tiposAlojamiento/getTiposAlojamiento');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const fetchAlojamientos = async () => {
  try {
    const response = await fetch('http://localhost:3001/alojamiento/getAlojamientos');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const fetchImagenes = async () => {
  try {
    const response = await fetch('http://localhost:3001/imagen/getAllImagenes');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching images:', error);
    throw error;
  }
};

export const fetchServicios = async () => {
  try {
    const response = await fetch('http://localhost:3001/servicio/getAllServicios');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching servicios:', error);
    throw error;
  }
};

export const crearAlojamientos = async (alojamientos) => {
  try {
    await Promise.all(alojamientos.map(async (alojamiento) => {
      await fetch('http://localhost:3001/alojamiento/createAlojamiento', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(alojamiento),
      });
    }));
  } catch (error) {
    console.error('Error creating alojamientos:', error);
    throw error;
  }
};

export const crearImagenes = async (imagenes) => {
  try {
    await Promise.all(imagenes.map(async (imagen) => {
      await fetch('http://localhost:3001/imagen/createImagen', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(imagen),
      });
    }));
  } catch (error) {
    console.error('Error creating imagenes:', error);
    throw error;
  }
};

export const crearTiposAlojamiento = async (tiposAlojamiento) => {
  try {
    await Promise.all(tiposAlojamiento.map(async (tipo) => {
      await fetch('http://localhost:3001/tiposAlojamiento/createTipoAlojamiento', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(tipo),
      });
    }));
  } catch (error) {
    console.error('Error creating tipos de alojamiento:', error);
    throw error;
  }
};

export const crearServicios = async (servicios) => {
  try {
    await Promise.all(servicios.map(async (servicio) => {
      await fetch('http://localhost:3001/servicio/createServicio', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(servicio),
      });
    }));
  } catch (error) {
    console.error('Error creating servicios:', error);
    throw error;
  }
};
