import React, { useEffect, useState } from "react";
import useMessages from "../../hooks/useMessages";
import useToken from "../../hooks/useToken";
import ModuleDays from "../../modules/common/vacations/ModuleDays";
import ModuleOwnVacation from "../../modules/common/vacations/ModuleOwnVacation";
import ModuleRequest from "../../modules/common/vacations/ModuleRequest";
import ModuleToApprove from "../../modules/common/vacations/ModuleToApprove";
import {
	fetched,
	getUser,
	getVacationPoint,
	getVacations,
} from "../../utils/fetched";
import { formatDateMin, getCurrentDay } from "../../utils/formatDate";

const Vacations = () => {
	const { token } = useToken();
	const { handleError, handleMessage } = useMessages();
	const [idUser, setIdUser] = useState();
	const [days, setDays] = useState({});
	const [request, setRequest] = useState({});
	const [list, setList] = useState();
	const [approve, setApprove] = useState([]);
	const minDate = formatDateMin();
	const currentDay = getCurrentDay();

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

	const showMessage = (response) => {
		if (response?.error) {
			handleError(response.error);
			return;
		}
		handleMessage(response.msg);
	};

	const handleChange = (e) => {
		setRequest({
			...request,
			[e.target.name]: e.target.value,
		});
	};

	const handleVacations = async () => {
		const data = { ...request, id: idUser };
		console.log(data);
		const response = await fetched(token, "POST", data, "vacations/request");
		showMessage(response);
		setList([
			...list,
			{
				request_days: request.requestDays,
				date_to: request.dateTo,
				date_from: request.dateFrom,
				fullName: null,
				request_date: currentDay,
			},
		]);
	};

	const handleApprove = async (idUser, idRequest) => {
		const data = { id: idUser, idRequest };
		const response = await fetched(token, "PUT", data, "vacations/request");
		showMessage(response);
	};

	const handleApproveDelete = async (idRequest) => {
		const data = { idRequest };
		const response = await fetched(token, "DELETE", data, "vacations/request");
		showMessage(response);
		setApprove(approve.filter((request) => request.id_request !== idRequest));
	};

	return (
		<main className="principal grid mx-auto mt-10 grid-cols-2">
			<ModuleDays
				available_days={days.available_days}
				days_off={days.days_off}
			/>

			{days.available_days > 0 && (
				<ModuleRequest
					handleChange={handleChange}
					handleVacations={handleVacations}
					minDate={minDate}
					days={days}
				/>
			)}

			<ModuleOwnVacation list={list} />

			{approve.length > 0 && (
				<ModuleToApprove
					approve={approve}
					handleApprove={handleApprove}
					handleApproveDelete={handleApproveDelete}
				/>
			)}
		</main>
	);
};

export default Vacations;
