import { title } from "@/components/primitives";
import styles from "../../styles/styleop.module.css"
export default function AdminPage() {
	return (
		<div className={styles.base}>
			<div className={styles.boxout}>
				<div className={styles.boxout}>Sectores Boton</div>
				<div className={styles.boxout}>Novedades Boton</div>
			</div>
			
			<div className={styles.boxout}>
				<div className={styles.boxout}>Trabajadores Boton</div>
				<div className={styles.boxout}>Sectores Boton</div>
			</div>
			
		</div>
	);
}
