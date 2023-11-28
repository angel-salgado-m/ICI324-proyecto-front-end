"use client";
import React, { useState, useEffect, use } from 'react';
import { Input, Button, Spinner, user } from "@nextui-org/react";
import { useRut } from "react-rut-formatter";
import { useRouter, useSearchParams } from 'next/navigation'; // Importa el router de Next.js
import styles from '../../styles/styleop.module.css'
import { motion } from "framer-motion"
import { getalltrabajadores } from '../../api/trabajadorApi';
import { getallsectores } from '../../api/sectorApi';
import { getallregistros, getRNews} from '../../api/registroApi';
import Listar from '../../components/tabla';

export default function AdminPage() {
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [datosW, setDatosW] = useState([]);
  const [datosS, setDatosS] = useState([]);
  const [datosR, setDatosR] = useState([]);
  const [pending, setPending]= useState();
  const [news, setNews]= useState();
  const [datosRn, setDatosRn] = useState([]);
  const worker = {
    rut: 'rut',
    nombre: 'nombre',
    apellido: 'apellido',
    idSector: 'idSector',
    cargo: 'cargo',
    horario: 'horario',
  };
  const sector = {
    idSector: 'idSector',
    idRuta: 'idRuta',
    sucursal: 'sucursal',
    locomocion: 'locomocion',
  };
  const registro = {
    idRegistro:'idRegistro',
    idDireccion:'idDireccion',
    tipo:' tipo',
    asunto:'asunto',
    descripcion:'descripcion',
    estado:'estado',
    idImg:'idImg',
    fecha:'fecha',
  };
  const fetchWorker = async () => {
    const datosW = (await getalltrabajadores());
    setDatosW(datosW);
  };
  const fetchSector = async () => {
    const datosS = (await getallsectores());
    setDatosS(datosS.data);
  };
  const fetchpening = async () => {
    const datosR = (await getallregistros());
    setPending(datosR.length);
    setDatosR(datosR);
  };
  const fetchnews = async () => {
    const datosRn = (await getRNews());
    setNews(datosRn.length);
    setDatosRn(datosRn);
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
        	return <Listar columns={registro} data={datosR} />;
          case 'news':
            return <Listar columns={registro} data={datosRn} />;
      	default:
        	return null;
    }
  };
  useEffect(() => {
    fetchpening();
    fetchnews();
    const intervalId = setInterval(() => {fetchpening();fetchnews();}, 60000);
  }, []);
  useEffect(() => {
    // Actualiza los datos de la tabla cuando cambia la prop 'data'
    setPending(pending);
    setNews(news);
  }, [pending,news]);
  return (
    <div className={styles.bloqueadmin}>
      <div className={styles.panel1}>
        <Button className={styles.badmin} onClick={() =>{fetchpening(); setSelectedComponent('news');} }>
          <p>Registros actuales{'\n'+news}</p>
        </Button>
        <Button className={styles.badmin} onClick={() =>{fetchpening(); setSelectedComponent('pendiente');} }>
          <p>Registros pendientes{'\n'+pending}</p>
        </Button>
      </div>
      <div className={styles.panel2}>
        <p className={styles.title}>modificacion de datos</p>
        <div className={styles.itemsadmin}>
          <Button onClick={() =>{fetchWorker(); setSelectedComponent('Trabajadores');} }>Trabajadores</Button>
          <Button onClick={() =>{fetchSector(); setSelectedComponent('Sectores')}}>Sectores Boton</Button>
        </div>
      </div>
	  <div className={styles.panel3}>
	  	<Button className={styles.botonx}onClick={() => setSelectedComponent(null)}>X</Button>
	  	{renderComponent()}
	  </div>
    </div>
  );
}
