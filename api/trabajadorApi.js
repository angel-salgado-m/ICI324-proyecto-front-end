const backendUrl = 'http://localhost:3030';
export const getalltrabajadores = async (data) => {
  try {
    const response = await fetch(`${backendUrl}/trabajador/allTrabajadores`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      alert("Credenciales incorrectas. Por favor, inténtalo de nuevo.");
    }
  } catch (error) {
    alert("Se produjo un error");
    console.log(error);
  }
};