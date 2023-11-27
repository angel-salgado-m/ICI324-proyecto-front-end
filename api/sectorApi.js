const backendUrl = 'http://localhost:3030';
const bdtype = 'sql';
export const getallsectores = async (data) => {
  try {
    const response = await fetch(`${backendUrl}/sector/allSectores/${bdtype}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      const data = await response.json();
      return data.data;
    } else {
      alert("Credenciales incorrectas. Por favor, inténtalo de nuevo.");
    }
  } catch (error) {
    alert("Se produjo un error");
    console.log(error);
  }
};