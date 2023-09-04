import React, { useEffect, useState } from "react";
import useMessages from "../../hooks/useMessages";
import useToken from "../../hooks/useToken";
import ModuleDays from "../../modules/common/vacations/ModuleDays";
import ModuleOwnVacation from "../../modules/common/vacations/ModuleOwnVacation";
import ModuleRequest from "../../modules/common/vacations/ModuleRequest";
import ModuleToApprove from "../../modules/common/vacations/ModuleToApprove";
import { getUser, getVacationPoint, getVacations } from "../../utils/fetched";
import { formatDateMin } from "../../utils/formatDate";

const Vacations = () => {
	const { token } = useToken();
	const { handleError, handleMessage } = useMessages();
	const [idUser, setIdUser] = useState();
	const [days, setDays] = useState({});
	const [request, setRequest] = useState({});
	const [list, setList] = useState();
	const [approve, setApprove] = useState([]);
	const minDate = formatDateMin();

	useEffect(() => {
		const getData = async () => {
			const user = await getUser(token);
			const idUser = user.id;
			setIdUser(idUser);

			const vacations = await getVacations(token, idUser);
			vacations === undefined
				? setDays({ id: 0, id_user: idUser, available_days: 0, days_off: 0 })
				: setDays(vacations);

			setList(await getVacationPoint(token, idUser, true));

			setApprove(await getVacationPoint(token, idUser, false));
		};
		getData();
	}, []);

	const handleChange = (e) => {
		setRequest({
			...request,
			[e.target.name]: e.target.value,
		});
	};

	const handleVacations = async () => {
		const data = { ...request, id: idUser };
		const response = await fetched(token, "POST", data, "vacations/request");
		if (response?.error) {
			handleError(response.error);
			return;
		}
		handleMessage(response.msg);
	};

	const handleApprove = async (idUser, idRequest) => {
		console.log(idUser, idRequest);
		const data = { id: idUser, idRequest };
		const response = await fetched(token, "PUT", data, "vacations/request");
		console.log(response);

		if (response?.error) {
			handleError(response.error);
			return;
		}

		handleMessage(response.msg);
	};

	return (
		<main className="principal grid mx-auto mt-10 grid-cols-2">
			<ModuleDays
				available_days={days.available_days}
				days_off={days.days_off}
			/>

			<ModuleRequest
				handleChange={handleChange}
				handleVacations={handleVacations}
				minDate={minDate}
				days={days}
			/>

			<ModuleOwnVacation list={list} />

			{approve.length > 0 && (
				<ModuleToApprove approve={approve} handleApprove={handleApprove} />
			)}
		</main>
	);
};

export default Vacations;
