import styles from "../../styles/styleop.module.css"
export default function LectorLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className={styles.loyoutLector}>
			<div className="inline-block max-w-lg text-center justify-center">
				{children}
			</div>
		</section>
	);
}
