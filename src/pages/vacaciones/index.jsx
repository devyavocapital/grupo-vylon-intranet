import React, { useEffect, useState } from "react";
import useMessages from "../../hooks/useMessages";
import useToken from "../../hooks/useToken";
import ModuleDays from "../../modules/common/vacations/ModuleDays";
import ModuleOwnVacation from "../../modules/common/vacations/ModuleOwnVacation";
import ModuleRequest from "../../modules/common/vacations/ModuleRequest";
import ModuleToApprove from "../../modules/common/vacations/ModuleToApprove";
import { fetched } from "../../utils/fetched";
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
		const getUser = async () => {
			const user = await fetched(token, "GET", {}, "login");
			setIdUser(user.usuario[0][0].id);
			const idUser = user.usuario[0][0].id;
			const response = await fetched(
				token,
				"GET",
				{},
				`vacations?id=${idUser}`,
			);
			const vacations = response[0][0];
			vacations === undefined
				? setDays({ id: 0, id_user: idUser, available_days: 0, days_off: 0 })
				: setDays(vacations);

			const responseList = await fetched(
				token,
				"GET",
				{},
				`vacations/list?id=${idUser}`,
			);
			setList(responseList[0]);

			const toApprove = await fetched(
				token,
				"GET",
				{},
				`vacations/request?id=${idUser}`,
			);
			setApprove(toApprove[0]);
		};
		getUser();
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
