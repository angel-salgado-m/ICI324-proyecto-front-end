"use client";
import { title } from "@/components/primitives";
import NextLink from "next/link";
import {ButtonGroup,Button} from "@nextui-org/react"
import Lectura from "../../components/forums/lectura";
import Novedad from "../../components/forums/novedad";
import Revision from "../../components/forums/revision";
import styles from "../../styles/styleop.module.css";
import { useRouter,useSearchParams } from 'next/navigation';
export default function ForumPage() {
	const searchParams = useSearchParams()
	const forum = searchParams.get('forumtype')
	return (
		<div>
			<NextLink className="flex justify-start items-center gap-1" href={{pathname:'/'}} >
				<Button className={styles.boxout}>Novedad Boton</Button>
			</NextLink>
			{forum === "Lectura" && <Lectura />}
			{forum === "Novedad" && <Novedad />}
			{forum === "Revision" && <Revision />}
		</div>
	);
}
