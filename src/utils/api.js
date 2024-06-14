export const fetchTiposAlojamiento = async () => {
  try {
    const response = await fetch(`http://localhost:3001/tiposAlojamiento/getTiposAlojamiento`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const fetchAlojamientos = async () => {
  try {
    const response = await fetch(`http://localhost:3001/alojamiento/getAlojamientos`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const fetchImagenesByAlojamientoId = async () => {
  try {
    const response = await fetch(`http://localhost:3001/imagen/getAllImagenes`);
    if (!response.ok) {
      throw new Error('Error al obtener las imágenes');
    }
    const data = await response.json();

    // Objeto para almacenar imágenes agrupadas por idAlojamiento
    const imagenesPorAlojamiento = {};

    // Organizar las imágenes por idAlojamiento
    data.forEach(imagen => {
      const { idImagen, idAlojamiento, RutaArchivo } = imagen;
      if (!imagenesPorAlojamiento[idAlojamiento]) {
        imagenesPorAlojamiento[idAlojamiento] = [];
      }
      imagenesPorAlojamiento[idAlojamiento].push({ idImagen, RutaArchivo });
    });

    console.log('Imágenes por idAlojamiento:', imagenesPorAlojamiento);

    return imagenesPorAlojamiento;
  } catch (error) {
    console.error('Error fetching images:', error);
    throw error;
  }
};




