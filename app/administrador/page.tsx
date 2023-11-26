import { title } from "@/components/primitives";
import styles from "../../styles/styleop.module.css"
import {ButtonGroup,Button} from "@nextui-org/react"
export default function AdminPage() {
	return (
		<div className={styles.base}>
			<div className={styles.boxout}>
				<div className={styles.base}>
					numero revisiones del dia
					<Button className={styles.boxout}>descargar</Button>
				</div>
				<div className={styles.base}>
					numero revisiones pendientes
					<Button className={styles.boxout}>descargar</Button>
				</div>
			</div>
			<div className={styles.boxout}>
				modificacion de datos
				<Button className={styles.boxout}>Trabajadores Boton</Button>
				<Button className={styles.boxout}>Sectores Boton</Button>
			</div>
		</div>
	);
}
