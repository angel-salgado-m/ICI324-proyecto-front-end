"use client";
import { title } from "@/components/primitives";
import NextLink from "next/link";
import {ButtonGroup,Button} from "@nextui-org/react"
import styles from "../../styles/styleop.module.css";
import { useEffect , useState} from 'react';
import { useRouter,useSearchParams } from 'next/navigation';
import { getdxs } from "../../api/direccionApi";
export default function LectorPage() {
	const router = useRouter();
	const searchParams = useSearchParams();
	const [token, setToken] = useState();
	const [sector, setSector] = useState();
	const [dxs, setdxs]= useState();
	const [datosdxs, setDatosdxs] = useState([]);
	const fetchdxs = async (sector) => {
		const datosdxs = (await getdxs(sector));
		setdxs(datosdxs.length);
		setDatosdxs(datosdxs);
	  };

	useEffect(() => {
	  const token = searchParams.get('token');
	  const sector = searchParams.get('sector');
	  setSector(sector);
	  setToken(token);
	  fetchdxs(sector);
	}, [searchParams]);
	return (
		<div className={styles.base}>
			<div className={styles.boxout}>
				<div className={styles.boxout}>Sector Asignado:{sector}</div>
				<div className={styles.boxout}>Direcciones totales:{dxs}</div>
			</div>
			<div className={styles.boxout}>
				Generar
				<div>
					<NextLink className="flex justify-start items-center gap-1" href={{pathname:'/forum',query: {forumtype:'Novedad' }}} >
						<Button className={styles.boxout}>Novedad Boton</Button>
					</NextLink>
					<NextLink className="flex justify-start items-center gap-1" href={{pathname:'/forum',query: {forumtype:'Lectura' }}}>
						<Button className={styles.boxout}>Lectura Boton</Button>
					</NextLink>
					<NextLink className="flex justify-start items-center gap-1" href={{pathname:'/forum',query: {forumtype:'Revision' }}}>
						<Button className={styles.boxout}>Revision Boton</Button>
					</NextLink>
				</div>
			</div>
		</div>
	);
}
