import React from "react";
import Button from "../modules/common/components/Button";

const NoMatch = () => {
	return (
		<div className="grid h-screen justify-center content-center">
			<h1 className="text-4xl font-bold mx-auto my-5">
				Esta página no existe - Error 404
			</h1>
			<img alt="Logo vylon" src="/logo-vylon.png" className="w-6/12 mx-auto" />

			<div className="w-6/12 mx-auto my-10">
				<Button background={true} href={"/"} title={"Ir al Inicio"} />
			</div>
		</div>
	);
};

export default NoMatch;
