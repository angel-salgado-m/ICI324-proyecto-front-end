"use client";
import React, { useState } from 'react';
import { EyeFilledIcon } from "../components/EyeFilledIcon";
import { EyeSlashFilledIcon } from "../components/EyeSlashFilledIcon";
import { Input, Button, Spinner, user } from "@nextui-org/react";
import { useRut } from "react-rut-formatter";
import { useRouter,useSearchParams } from 'next/navigation'; // Importa el router de Next.js
import styles from '../styles/styleop.module.css'
import { motion } from "framer-motion"
export default function Loginbox() {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const [isLoading, setIsLoading] = useState(false);
  const [loginError, setLoginError] = useState(null);
  const { rut, updateRut, isValid } = useRut();
  const [password, setPassword] = useState('');
  const router = useRouter(); 
  const handleClickInside = (e) => {
    e.stopPropagation();
  };
  const backendUrl = 'http://localhost:3030';//cambiar al .env en un futuro
  const funcionlogin = async () => {
    if (!isValid || !rut.raw || !password) {
      alert('Rut o contraseña inválidos');
      return;
    }

    router.push('/administrador');


    // Configurar los datos para la solicitud a la API
    const userData = {
      rut: rut.raw, // rut.raw=(20111111-5);rut.formatted=(20.111.111-5)
      password: password,
    };
    // Realiza la solicitud a la API
    try {
      setIsLoading(true);
      const response = await fetch(`${backendUrl}/trabajador/login/sql,`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      if (response.status === 200) {
        // Si la respuesta es correcta, guarda el token en el localStorage
        const data = await response.json(); // Aquí asumimos que los datos se encuentran en la propiedad 'data' de la respuesta
        const userType = data.cargo;
        if(userType == 'administrador'){
          localStorage.setItem('token', data.token);
          let token = localStorage.getItem('token');
        }
        else{
          localStorage.setItem('token', data.token);
          //let token = localStorage.getItem('token');
          localStorage.setItem('cargo', data.cargo);
          localStorage.setItem('sector', data.sector);
        }
        router.push(`/${userType}`);
      } else {
        // Maneja el caso de credenciales incorrectas
        alert("Credenciales incorrectas. Por favor, inténtalo de nuevo.");
      }
    } catch (error) {
      // Maneja errores de red o de servidor
      console.error('Error al iniciar sesión:', error);
      alert("Se produjo un error al intentar iniciar sesión. Por favor, inténtalo más tarde.");
    } finally {
      setIsLoading(false);
    }
  };
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      // Si se presiona Enter, realiza la misma función que el botón Ingresar
      funcionlogin();
    }
  };
  return (
    <motion.div
      onClick={handleClickInside}
      initial={{ scale: 0 }}
      animate={{ rotate: 360, scale: 0.9 }}
      exit={{ scale: 0 }}
      transition={{
        type: "spring",
        stiffness: 160,
        damping: 20
      }} 
      className={styles.login} style={{
        position: 'absolut',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: 480,
        height: 480,
        borderRadius: 30,
    }}>
      <div className={styles.inputs}>
        <Input
          className={styles.input}
          size='lg'
          value={rut.formatted}
          type="rut"
          label="Rut"
          variant="faded"
          labelPlacement='outside'
          errorMessage={!isValid && rut.formatted && "Please enter a valid Rut"}
          onValueChange={(newValue) => updateRut(newValue)}
          color={(!isValid && rut.formatted) ? "danger" : "default"}
          maxLength={12}
          onKeyDown={handleKeyDown}
        />
        <Input
          className={styles.input}
          size='lg'
          label="Password"
          variant="faded"
          labelPlacement='outside'
          type={isVisible ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          maxLength={24}
          onKeyDown={handleKeyDown}
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
      <div className={styles.bloqueboton}>
          {loginError && (
            <div className="text-danger">{loginError}</div>
          )}
          {isLoading ? (
            <Spinner color="secondary" size="lg"/>
          ) : (
            <Button className={styles.next} onClick={funcionlogin} disabled={isLoading}>
              {isLoading ? 'Ingresando...' : 'Ingresar'}
            </Button>
          )}
        </div>
    </motion.div>
  );
}
