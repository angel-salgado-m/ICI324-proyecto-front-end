"use client";
import { title } from "@/components/primitives";
import Lectura from "../../components/forums/lectura";
import Novedad from "../../components/forums/novedad";
import Revision from "../../components/forums/revision";
import {useSearchParams } from 'next/navigation';
export default function ForumPage() {
	const searchParams = useSearchParams()
	const forum = searchParams.get('forumtype')
	return (
		<div>
			{forum === "Lectura" && <Lectura />}
			{forum === "Novedad" && <Novedad />}
			{forum === "Revision" && <Revision />}
		</div>
	);
}
