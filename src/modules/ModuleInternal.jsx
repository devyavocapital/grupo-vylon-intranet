import React from "react";

const ModuleInternal = () => {
	return (
		<section className="grid mx-auto my-1 w-full h-[300px] place-self-center px-5">
			<h2 className="text-2xl font-bold my-3">Comunicado Interno</h2>
			<img
				alt=""
				src="/comunicado.png"
				className="object-cover h-[250px] w-full rounded-xl"
			/>
		</section>
	);
};

export default ModuleInternal;
