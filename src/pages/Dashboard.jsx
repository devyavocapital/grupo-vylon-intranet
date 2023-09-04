import ModuleBirthdays from "../modules/ModuleBirthdays";
import ModuleInternal from "../modules/ModuleInternal";
import ModulePreviews from "../modules/ModulePreviews";
import Title from "../modules/common/components/Title";
import { usersHBD } from "../utils/birthdays";

const Dashboard = () => {
	return (
		<main className="principal">
			<Title contentTitle="Bienvenido 👋" />

			<ModuleBirthdays usersHBD={usersHBD} />

			<div className="grid grid-cols-[50%_50%]">
				<ModuleInternal />

				<ModulePreviews />
			</div>
		</main>
	);
};

export default Dashboard;
