"use client";
import { useState } from 'react';
import {Button, ButtonGroup} from "@nextui-org/react";
import stayles from "../styles/styleop.module.css";
import Loginbox from "../components/loginbox";
import {motion} from "framer-motion"
export default function Home() {
	const [showLogin, setShowLogin] = useState(false);

	const handleButtonClick = () => {
		setShowLogin(true);
	};

	const handleOutsideClick = () => {
		setShowLogin(false);
	};
	return (
		<div className={stayles.bloque} onClick={handleOutsideClick}>
			{!showLogin && (
				<motion.div
					initial={{ scale: 0 }}
					animate={{ rotate: 360, scale: 0.9 }}
					whileHover={{ scale: 1 }}
					whileTap={{ scale: 0.9 }}
					exit={{ scale: 0 }}
					transition={{
						type: "spring",
						stiffness: 160,
						damping: 20
					}} className={stayles.motionboton}>
				<Button className={stayles.botonHome} onClick={handleButtonClick}>
				Ingresar
				</Button>
				</motion.div>
			)}
			{showLogin && <Loginbox/>}
		</div>
	);
}
