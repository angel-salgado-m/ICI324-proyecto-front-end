"use client";
import React, { useState} from 'react';
import {Input,Select, SelectItem,Textarea,Button} from "@nextui-org/react";
import styles from '../../styles/styleop.module.css'
import { motion } from "framer-motion"
import Datosest from "../../components/datosest"
export default function SoliPage() {
	const [isVisible, setIsVisible] = useState(false);
	const toggleVisibility = () => setIsVisible(!isVisible);
	const [value, setValue] = React.useState("");
	return (
		<motion.div className={styles.base}>
			<Datosest/>
				<p className={styles.Text}>Datos de practica</p>
			<div className={styles.boxout}>
				<Select 
					isRequired
					label="Asignatura"
					placeholder="Selecciona asignaturas"
					defaultSelectedKeys={["cat"]}
					className={styles.select}
					>
					</Select>
				<Select
					isRequired
					label="Empresa"
					placeholder="Selecciona empresa"
					defaultSelectedKeys={["cat"]}
					className={styles.select}
					>
					</Select>
			</div>
			<p className={styles.Text}>Datos de Empresa</p>
			<div className={styles.datos}>
				<div className={styles.box}>
					<Input type="razon" placeholder="Razon social"/>
					<Input type="rut_empresa" placeholder="RUT"/>
					<Input type="rubro" placeholder="Rubro"/>
				</div>
				<div className={styles.textbox}>
					<Textarea isRequired label="Descripcion" labelPlacement="outside" placeholder="Enter your description" className="descripcion"/>
				</div>
			</div>
		</motion.div>
	);
	
}