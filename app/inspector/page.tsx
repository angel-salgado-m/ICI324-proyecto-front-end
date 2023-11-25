import { title } from "@/components/primitives";
import styles from "../../styles/styleop.module.css"
export default function InspectorPage() {
	return (
		<div className={styles.base}>
			<div className={styles.boxout}>
				<div className={styles.boxout}>Sectores MD</div>
				<div className={styles.boxout}>Novedades o mapa MD</div>
			</div>
			<div className={styles.boxout}>Generar
				<div className={styles.boxout}>Novedad Boton</div>
				<div className={styles.boxout}>Revision Boton</div>
				<div className={styles.boxout}>Lectura Boton</div>
			</div>
		</div>
	);
}
