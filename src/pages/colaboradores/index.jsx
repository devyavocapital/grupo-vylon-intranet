import React, { useEffect, useState } from "react";
import useMessages from "../../hooks/useMessages";
import useToken from "../../hooks/useToken";
import Button from "../../modules/common/components/Button";
import Title from "../../modules/common/components/Title";
import Table from "../../modules/common/table/Table";
import { headersEmployee } from "../../utils/employees";
import { fetched } from "../../utils/fetched";

const Employees = () => {
	const { token } = useToken();
	const [employees, setEmployees] = useState([]);
	const { refresh } = useMessages();

	const getEmployees = async () => {
		const responseEmployees = await fetched(token, "GET", {}, "users");
		setEmployees(responseEmployees[0]);
	};
	useEffect(() => {
		getEmployees();
	}, []);

	useEffect(() => {
		refresh && getEmployees();
	}, [refresh]);

	return (
		<div className="principal grid mx-auto mt-10">
			<div className="grid place-content-start mb-5">
				<Title contentTitle="Colaboradores" />

				<Button
					background={true}
					title="Agregar Colaborador"
					href="/colaboradores/agregar-colaborador"
					iconType="add"
				/>
			</div>

			<div className="relative overflow-x-auto shadow-md sm:rounded-lg grid">
				<Table
					employees={employees}
					areas={[]}
					headersArea={[]}
					headerEmployee={headersEmployee}
					categories={[]}
					headersCategory={[]}
				/>

				{/* <Pagination /> */}
			</div>
		</div>
	);
};

export default Employees;
