import styles from '../../styles/styleop.module.css';
export default function InspectorLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className={styles.sectionInspector}>
			<div className={styles.divInspector}>
				{children}
			</div>
		</section>
	);
}
