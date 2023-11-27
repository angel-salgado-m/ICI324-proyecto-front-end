const backendUrl = 'http://localhost:3030';
const bdtype = 'sql';
export const getallregistros = async (data) => {
  try {
    const response = await fetch(`${backendUrl}/registro/allInconclusos/${bdtype}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      return data;
    } else {
      alert("Credenciales incorrectas. Por favor, inténtalo de nuevo.");
    }
  } catch (error) {
    alert("Se produjo un error");
    console.log(error);
  }
};