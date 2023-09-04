import React from "react";
import HbdItem from "./common/HbdItem";
import Button from "./common/components/Button";

const ModuleBirthdays = ({ usersHBD }) => {
	return (
		<div className="flex w-full">
			<section className="flex w-8/12 h-[300px] border-2 border-red mx-10 rounded-xl bg-gradient-to-b from-[#589dde] to-[#002856]">
				<article className="w-[300px] grid">
					<h2 className="text-white text-3xl text-center font-bold my-3">
						¡Felicidades!
					</h2>
					<div className="text-md text-white text-center font-bold">
						{usersHBD.map((user) => (
							<HbdItem name={user.name} key={user.id} />
						))}
					</div>
					<div className="w-10/12 grid mx-auto">
						<Button
							title="Ver todos"
							background={false}
							href="/cumpleaños"
							iconType=""
						/>
					</div>
				</article>
				<img
					alt=""
					src="/hbd.jpg"
					className="w-full object-cover rounded-r-xl"
				/>
			</section>
		</div>
	);
};

export default ModuleBirthdays;
