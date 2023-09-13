export const mFetch = async (id) => {
    try {
      const response = await fetch('https://64cd129fbb31a268409a5658.mockapi.io/Eventos');
  
      if (!response.ok) {
        throw new Error('La solicitud no fue exitosa');
      }
  
      const data = await response.json();
  
      if (id) {
        // Verificar el encabezado CORS
        const product = await fetch(`https://64cd129fbb31a268409a5658.mockapi.io/Eventos/${id}`); 
  
        if (!product.ok) {
          throw new Error(`No se encontró ningún producto con el ID ${id}`);
        }
        return product.json(); // Devuelve los datos del producto
      }
  
      return data; // Devuelve los datos obtenidos
    } catch (error) {
      throw new Error('Error en la solicitud: ' + error.message);
    }
  };