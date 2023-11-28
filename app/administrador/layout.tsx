import styles from "../../styles/styleop.module.css";
export default function AdminLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className={styles.sectionAdmin}>
			<div className={styles.divladmin}>
				{children}
			</div>
		</section>
	);
}
