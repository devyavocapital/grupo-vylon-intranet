import React, { useEffect, useState } from "react";
import useToken from "../../hooks/useToken";
import useUser from "../../hooks/useUser";
import Button from "../../modules/common/components/Button";
import Title from "../../modules/common/components/Title";
import Item from "../../modules/common/procedures/Item";
import { getProcedures } from "../../utils/fetched";

const Procedures = () => {
	const { token } = useToken();
	const { currentUser } = useUser();
	const [proceduresList, setProceduresList] = useState([]);
	const [currentId, setCurrentId] = useState(0);
	const [proceduresPrev, setProceduresPrev] = useState([]);
	const [prevId, setPrevId] = useState(null);
	const [proceduresBeforePrev, setProceduresBeforePrev] = useState([]);
	const [beforePrev, setBeforePrev] = useState(null);
	const { id_category } = currentUser;

	const getData = async () => {
		console.log(await getProcedures(token));
		setProceduresList(await getProcedures(token));
	};

	useEffect(() => getData(), []);

	const handleCurrentId = (id) => {
		if (prevId === null) {
			setPrevId(currentId);
			setCurrentId(id);
		}
		if (prevId !== null) {
			setBeforePrev(prevId);
			setPrevId(currentId);
			setCurrentId(id);
		}
	};

	const handlePrevId = (id, parentId) => {
		if (beforePrev === null) {
			setCurrentId(id);
			setPrevId(parentId);
		}
		if (beforePrev !== null) {
			setCurrentId(id);
		}
	};

	const handleBeforePrev = (id, parentId) => {
		if (beforePrev === 0) {
			setCurrentId(id);
			setPrevId(parentId);
			setBeforePrev(null);
		}
		if (beforePrev !== 0) {
			setCurrentId(prevId);
			setPrevId(beforePrev);
			setBeforePrev(parentId - 1);
		}
	};

	const classesCotainer = "grid border-2 border-r-black w-4/12 rounded-l-xl";

	return (
		<main className="principal grid mx-auto mt-10 grid-cols-2">
			<div className="grid place-content-start mb-5">
				<Title contentTitle={"Procedimientos"} />

				{id_category && (
					<Button
						background={true}
						href={"agregar-procedimiento"}
						iconType={"add"}
						title={"Agregar procedimiento"}
					/>
				)}
			</div>
			<section className="col-span-2 flex">
				{beforePrev !== null && (
					<div className={classesCotainer}>
						{proceduresList.map(
							(procedure) =>
								procedure.parent === beforePrev && (
									<Item
										key={procedure.id}
										currentId={currentId}
										prevId={prevId}
										id={procedure.id}
										name={procedure.control_name}
										onclick={() =>
											handleBeforePrev(procedure.id, procedure.parent)
										}
									/>
								),
						)}
					</div>
				)}
				{prevId !== null && (
					<div className={classesCotainer}>
						{proceduresList.map(
							(procedure) =>
								procedure.parent === prevId && (
									<Item
										key={procedure.id}
										currentId={currentId}
										prevId={prevId}
										id={procedure.id}
										name={procedure.control_name}
										onclick={() => handlePrevId(procedure.id, procedure.parent)}
									/>
								),
						)}
					</div>
				)}
				<div className={classesCotainer}>
					{proceduresList.map(
						(procedure) =>
							procedure.parent === currentId && (
								<Item
									key={procedure.id}
									currentId={currentId}
									prevId={prevId}
									id={procedure.id}
									name={procedure.control_name}
									onclick={() => {
										handleCurrentId(procedure.id);
										getData();
									}}
								/>
							),
					)}
				</div>
			</section>
		</main>
	);
};

export default Procedures;
