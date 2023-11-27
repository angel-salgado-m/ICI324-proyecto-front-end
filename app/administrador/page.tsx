"use client";
import React, { useState, useEffect, use } from 'react';
import { Input, Button, Spinner, user } from "@nextui-org/react";
import { useRut } from "react-rut-formatter";
import { useRouter, useSearchParams } from 'next/navigation'; // Importa el router de Next.js
import styles from '../../styles/styleop.module.css'
import { motion } from "framer-motion"
import { getalltrabajadores } from '../../api/trabajadorApi';
import { getallsectores } from '../../api/sectorApi';
import Listar from '../../components/tabla';

export default function AdminPage() {
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [datosW, setDatosW] = useState([]);
  const [datosS, setDatosS] = useState([]);

  const worker = {
    rut: 'rut',
    nombre: 'nombre',
    apellido: 'apellido',
    password: 'password',
    cargo: 'cargo',
    horario: 'horario',
  };
  const sector = {
    idSector: 'idSector',
	idRuta: 'idRuta',
	sucursal: 'sucursal',
	locomocion: 'locomocion',
  };
  const fetchWorker = async () => {
    const datosW = (await getalltrabajadores(worker)).trabajadores;
    setDatosW(datosW);
  };
  const fetchSector = async () => {
    const datosS = (await getallsectores(sector)).sectores;
    setDatosS(datosS);
  };
  const renderComponent = () => {
    switch (selectedComponent) {
		case 'Trabajadores':
    		return <Listar columns={worker} data={datosW} />;
    	case 'Sectores':
			
        	return <Listar columns={sector} data={datosS} />;
      	case 'hoy':
        	return null;
      	case 'pendiente':
        	return null;
      	default:
        	return null;
    }
  };
  return (
    <div className={styles.base}>
      <div className={styles.panel1}>
        <Button className={styles.boxout} >
          REG de hoy
        </Button>
        <Button className={styles.boxout}>
          REG pendientes
        </Button>
      </div>
      <div className={styles.panel2}>
        <p className={styles.title}>modificacion de datos</p>
        <div className={styles.items}>
          <Button onClick={() =>{fetchWorker(); setSelectedComponent('Trabajadores');} }>Trabajadores</Button>
          <Button onClick={() =>{fetchSector(); setSelectedComponent('Sectores')}}>Sectores Boton</Button>
        </div>
      </div>
	  <div className={styles.panel3}>
	  	<Button onClick={() => setSelectedComponent(null)}>X</Button>
	  	{renderComponent()}
	  </div>
    </div>
  );
}
