import { title } from "@/components/primitives";
import NextLink from "next/link";
import {ButtonGroup,Button} from "@nextui-org/react"
import styles from "../../styles/styleop.module.css";
export default function LectorPage() {
	return (
		<div className={styles.base}>
			<div className={styles.boxout}>
				<div className={styles.boxout}>Sectores MD</div>
			</div>
			<div className={styles.boxout}>
				Generar
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
	);
}
