"use client";
import {Image} from "@nextui-org/image";
import {Button, ButtonGroup} from "@nextui-org/react";
export default function Home() {
	return (
		<div className="mt-8">
			<div><Image
				isBlurred
				isZoomed
				alt="NextUI Fruit Image with Zoom"
				src="https://www.gasvalpo.cl/PublicTempStorage/multimedia/bn170a3_7209972b9805429387565edb53dea1e8.png"
				/>
			</div>
			<div className="flex items-center">
				<Image
					isBlurred
					isZoomed
					width={620}
					alt="NextUI Fruit Image with Zoom"
					src="https://www.gasvalpo.cl/PublicTempStorage/multimedia/bn170a3_7209972b9805429387565edb53dea1e8.png"
					/>
				<Image
					isBlurred
					isZoomed
					width={620}
					alt="NextUI Fruit Image with Zoom"
					src="https://www.gasvalpo.cl/PublicTempStorage/multimedia/bn170a3_7209972b9805429387565edb53dea1e8.png"
					/>
			</div>
		</div>
	);
}
