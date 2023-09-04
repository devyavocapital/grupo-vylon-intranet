import ModuleBirthdays from "../modules/ModuleBirthdays";
import ModulePreviews from "../modules/ModulePreviews";
import Title from "../modules/common/components/Title";
import { usersHBD } from "../utils/birthdays";

const Dashboard = () => {
	return (
		<main className="principal">
			<Title contentTitle="Bienvenido 👋" />

			<ModuleBirthdays usersHBD={usersHBD} />

			<div className="grid grid-cols-[50%_50%]">
				<section className="grid mx-auto my-1 w-full h-[300px] place-self-center px-5">
					<h2 className="text-2xl font-bold my-3">Comunicado Interno</h2>
					<img
						alt=""
						src="/comunicado.png"
						className="object-cover h-[250px] w-full rounded-xl"
					/>
				</section>
				<ModulePreviews />
			</div>
		</main>
	);
};

export default Dashboard;
