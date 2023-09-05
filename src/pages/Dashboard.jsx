import { useEffect, useState } from "react";
import useToken from "../hooks/useToken";
import ModuleBirthdays from "../modules/ModuleBirthdays";
import ModuleInternal from "../modules/ModuleInternal";
import ModulePreviews from "../modules/ModulePreviews";
import Title from "../modules/common/components/Title";
import { getBirthdays } from "../utils/fetched";

const Dashboard = () => {
	const { token } = useToken();
	const [usersBirthdays, setUsersBirthdays] = useState([]);

	useEffect(() => {
		const getData = async () => {
			setUsersBirthdays(await getBirthdays(token));
		};
		getData();
	}, []);

	return (
		<main className="principal">
			<Title contentTitle="Bienvenido 👋" />

			<ModuleBirthdays usersHBD={usersBirthdays} />

			<div className="grid grid-cols-[50%_50%]">
				<ModuleInternal />

				<ModulePreviews />
			</div>
		</main>
	);
};

export default Dashboard;
