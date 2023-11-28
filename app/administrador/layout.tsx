import styles from "../../styles/styleop.module.css";
export default function AdminLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className={styles.layoutAdmin}>
			<div className={styles.divladmin}>
				{children}
			</div>
		</section>
	);
}
