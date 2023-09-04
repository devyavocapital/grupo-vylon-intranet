import React, { useEffect, useState } from "react";
import useToken from "../../hooks/useToken";
import Button from "../../modules/common/components/Button";
import Title from "../../modules/common/components/Title";
import { fetched } from "../../utils/fetched";

const Communication = () => {
	const [showModal, setShowModal] = useState(false);
	const [imageSrc, setImageSrc] = useState("");
	const [images, setImages] = useState([]);
	const { token } = useToken();

	const handleModal = (imgSrc) => {
		setShowModal(!showModal);
		setImageSrc(imgSrc);
	};

	useEffect(() => {
		const getReleases = async () => {
			const releases = await fetched(token, "GET", {}, "releases");
			setImages(releases[0]);
		};

		getReleases();
	}, []);

	return (
		<main className="principal">
			<section className="w-11/12 mx-auto">
				<section className="w-4/12">
					<Title contentTitle={"Comunicación Interna"} />

					<Button
						background={true}
						href={"agregar-comunicado"}
						iconType={"add"}
						title={"Agregar comunicado"}
					/>
				</section>
				<section className="grid grid-cols-2 mx-auto mt-5 w-full place-self-center px-5 ">
					{images.map((image) => (
						<button
							type="button"
							className=" h-[450px] m-5 p-5"
							onClick={() => handleModal(image.image)}
							key={image.id}
						>
							<img
								alt={image.internal_name}
								src={`${import.meta.env.VITE_APP_IMAGES_URL}/${image.image}`}
								className="object-cover w-full h-full rounded-xl cursor-pointer"
							/>
						</button>
					))}
				</section>
				{showModal && (
					<button
						type="button"
						className="bg-black bg-opacity-75 fixed top-0 left-[250px] w-[calc(100%-250px)] h-screen grid cursor-default"
						onClick={handleModal}
					>
						<img
							alt=""
							src={`${import.meta.env.VITE_APP_IMAGES_URL}/${imageSrc}`}
							className="mx-auto h-[750px] rounded-xl object-cover"
						/>
					</button>
				)}
			</section>
		</main>
	);
};

export default Communication;
