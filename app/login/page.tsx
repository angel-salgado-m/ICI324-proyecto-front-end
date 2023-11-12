"use client";
import React, { useState } from 'react';
import { EyeFilledIcon } from "../../components/EyeFilledIcon";
import { EyeSlashFilledIcon } from "../../components/EyeSlashFilledIcon";
import { Input, Button, Link,Spinner} from "@nextui-org/react";
import { useRut } from "react-rut-formatter";
export default function PricingPage() {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const [isLoading, setIsLoading] = useState(false);
  const [loginError, setLoginError] = useState(null);
  const { rut, updateRut, isValid } = useRut(); 
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (!isValid) {
      return; // Evitar iniciar sesión si el RUT no es válido
    }

    // Configurar los datos para la solicitud a la API
    const userData = {
      rut: rut, // Envía el RUT sin puntos ni guión
      password: password, // Debes obtener la contraseña desde el input de contraseña
    };

    // Realiza la solicitud a la API
    try {
      setIsLoading(true);
      const response = await fetch('URL_DE_TU_API', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        return <Link href="/home_admin">Redireccionando...</Link>;
      } else {
        setLoginError("Credenciales incorrectas. Por favor, inténtalo de nuevo.");
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      setLoginError('Se produjo un error al intentar iniciar sesión. Por favor, inténtalo más tarde.');
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="mt-8 shadow-lg border border-solid border-gray-300 p-4" style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: 480,
      height: 480,
      borderRadius: 30,
    }}>
      <div className="mt-8" style={{ width: '50%', justifyContent: 'center' }}>
        <Input
          value={rut.formatted} // Utiliza rut.formatted para mostrar el RUT formateado
          type="rut"
          label="Rut"
          placeholder="Enter your Rut"
          variant="faded"
          errorMessage={!isValid && rut.formatted && "Please enter a valid Rut"} // Verifica si rut.formatted no está vacío
          onValueChange={(newValue) => updateRut(newValue)} // Utiliza updateRut para actualizar el valor del RUT
		    color={(!isValid && rut.formatted && "Please enter a valid Rut") ? "danger" : "default"}
          className="max-w-xs"
        />
      </div>
      <div className="mt-8" style={{ width: '50%', justifyContent: 'center' }}>
      <Input
        label="Password"
        variant="faded"
        placeholder="Enter your password"
        type={isVisible ? "text" : "password"} // Si isVisible es true, muestra la contraseña
        value={password} // Enlaza el valor del input al estado password
        onChange={(e) => setPassword(e.target.value)} // Actualiza el estado de la contraseña
        className="max-w-xs"
        endContent={
          <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
            {isVisible ? (
              <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
            ) : (
              <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
            )}
          </button>}
      />
      </div>
      <div className="mt-8">
      {isLoading ? (
          <Spinner size="lg" />
        ) : (
          <Button color="primary" onClick={handleLogin} disabled={isLoading}>
            {isLoading ? 'Ingresando...' : 'Ingresar'}
          </Button>
        )}
      </div>
    </div>
  );
}
