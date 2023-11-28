const backendUrl = 'http://localhost:3030';
const bdtype = 'sql';
export const getdxs = async (id) => {
  try {
    const response = await fetch(`${backendUrl}/direccion/dxs/${id}/${bdtype}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      const data = await response.json();
      return data.direcciones;
    } else {
      alert("No hay direcciones registradas para este sector");
    }
  } catch (error) {
    alert("Se produjo un error");
    console.log(error);
  }
};