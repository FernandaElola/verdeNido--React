// Alojamientos

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

export const fetchAlojamientoById = async (idAlojamiento, idImagen) => {
  try {
    const response = await fetch(`http://localhost:3001/imagen/getImagen/${idAlojamiento}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ idImagen }),
    });

    if (!response.ok) {
      throw new Error('Error adding image');
    }

    return await response.json();
  } catch (error) {
    console.error('Error creating imagenes:', error);
    throw error;
  }
};

export const deleteAlojamiento = async (id) => {
  try {
    const response = await fetch(`http://localhost:3001/alojamiento/deleteAlojamiento/${id}`, {
      method: 'DELETE',
    });
    return response;
  } catch (error) {
    throw new Error('Error al intentar borrar el alojamiento');
  }
};

// Tipos Alojamiento

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

// Imágenes

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

export const deleteImagenes = async (id) => {
  try {
    const response = await fetch(`http://localhost:3001/imagen/deleteImagen/${id}`, {
      method: 'DELETE',
    });
    return response;
  } catch (error) {
    throw new Error('Error al intentar borrar la imagen');
  }
};

export const createImagen = async ({ idAlojamiento, RutaArchivo }) => {
  try {
    const response = await fetch('http://localhost:3001/imagen/createImagen', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ idAlojamiento, RutaArchivo }),
    });

    if (!response.ok) {
      throw new Error('Error al agregar la imagen');
    }

    return await response.json(); 
  } catch (error) {
    console.error('Error al crear la imagen:', error);
    throw error; 
  }
};

// Servicios

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

export const deleteServicios = async (id) => {
  try {
    const response = await fetch(`http://localhost:3001/servicio/deleteServicio/${id}`, {
      method: 'DELETE',
    });
    return response;
  } catch (error) {
    throw new Error('Error al intentar borrar el servicio');
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

// Alojamiento Servicio

export const deleteAlojamientoServicio = async (id) => {
  try {
    const response = await fetch(`http://localhost:3001/alojamientosServicios/deleteAlojamientoServicio/${id}`, {
      method: 'DELETE',
    });
    return response;
  } catch (error) {
    throw new Error('Error al intentar borrar el servicio');
  }
};

export const fetchAlojamientoServicios = async () => {
  try {
    const response = await fetch('http://localhost:3001/alojamientosServicios/getAllAlojamientoServicios');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching AlojamientoServicios:', error);
    throw error;
  }
};

export const createAlojamientoServicio = async ({ idAlojamiento, idServicio }) => {
  try {
    const response = await fetch('http://localhost:3001/alojamientosServicios/createAlojamientoServicio', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ idAlojamiento, idServicio }),
    });

    if (!response.ok) {
      throw new Error('Error al agregar la imagen');
    }

    return await response.json(); 
  } catch (error) {
    console.error('Error al crear la imagen:', error);
    throw error; 
  }
};




