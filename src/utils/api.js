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


