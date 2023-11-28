"use client";
import { title } from "@/components/primitives";
import NextLink from "next/link";
import {ButtonGroup,Button} from "@nextui-org/react"
import Lectura from "../../components/forums/lectura";
import Novedad from "../../components/forums/novedad";
import Revision from "../../components/forums/revision";
import styles from "../../styles/styleop.module.css";
import { useRouter, useSearchParams } from 'next/navigation';
export default function ForumPage() {
	const searchParams = useSearchParams();
	const forum = searchParams.get('forumtype');
	const queryParams = {
		token: searchParams.get('token'),
		sector: searchParams.get('sector'),
		cargo: searchParams.get('cargo'),
	  };
	return (
		<div>
			<NextLink href={{pathname: `/${queryParams.cargo}`, query:queryParams}}>
            <Button className={styles.boxout}>back</Button>
          	</NextLink>
			{forum === "Lectura" && <Lectura />}
			{forum === "Novedad" && <Novedad />}
			{forum === "Revision" && <Revision />}
		</div>
	);
}
