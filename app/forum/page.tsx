"use client";
import { title } from "@/components/primitives";
import { useEffect, useState } from 'react';
import NextLink from "next/link";
import {ButtonGroup,Button} from "@nextui-org/react"
import Lectura from "../../components/forums/lectura";
import Novedad from "../../components/forums/novedad";
import Revision from "../../components/forums/revision";
import styles from "../../styles/styleop.module.css";
import { useRouter, useSearchParams} from 'next/navigation';
import { getdxs } from '../../api/direccionApi';
export default function ForumPage() {
	const router = useRouter();
	const [dxs, setDxs] = useState(0);
	const [datosDxs, setDatosDxs] = useState([]);
	const searchParams = useSearchParams();
	const forum = searchParams.get('forumtype');
	const token = searchParams.get('token');
	const sector = searchParams.get('sector');
	const userType = searchParams.get('cargo');
	const queryParams = {
		token: token,
		sector: sector,
		cargo: userType,
	};

	const fetchDxs = async (sector) => {
	  const datosDxs = await getdxs(sector);
	  setDxs(datosDxs.length);
	  setDatosDxs(datosDxs);
	};
  
	useEffect(() => {
	  fetchDxs(sector);
	}, [sector]);

	const datos=datosDxs.map(direccion => ({id: direccion.idDireccion,name: direccion.pob,}));
	return (
		<div>
			<NextLink href={{pathname: `/${queryParams.cargo}`, query:queryParams}}>
            <Button className={styles.boxout}>back</Button>
          	</NextLink>
			{forum === "Lectura" && <Lectura direcciones={datos}/>}
			{forum === "Novedad" && <Novedad direcciones={datos}/>}
			{forum === "Revision" && <Revision direcciones={datos}/>}
		</div>
	);
}
