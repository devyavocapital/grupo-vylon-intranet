import React, { useState } from "react";
import useUser from "../../hooks/useUser";
import Button from "../../modules/common/components/Button";
import Title from "../../modules/common/components/Title";
import Item from "../../modules/common/procedures/Item";

const Procedures = () => {
	const [currentId, setCurrentId] = useState(0);
	const [prevId, setPrevId] = useState(null);
	const [beforePrev, setBeforePrev] = useState(null);
	const { currentUser } = useUser();
	const { id_category } = currentUser;

	const proceduresList = [
		{ id: 1, name: "Procedimientos de Operaciones", parentId: 0 },
		{ id: 2, name: "Procedimientos de Recursos Humanos", parentId: 0 },
		{ id: 3, name: "Procedimientos de Comercios", parentId: 1 },
		{ id: 4, name: "Procedimientos de Aclaraciones", parentId: 1 },
		{ id: 5, name: "Procedimientos de Reclutamiento", parentId: 2 },
		{ id: 6, name: "Procedimientos de Vacaciones", parentId: 2 },
		{ id: 7, name: "Procedimientos de Alta Comercios", parentId: 3 },
		{ id: 8, name: "Procedimientos de Aclaraciones Comercios", parentId: 3 },
		{ id: 9, name: "Procedimientos de Consulta de Saldos", parentId: 4 },
		{ id: 10, name: "Procedimientos de Baja de Tarjetas", parentId: 4 },
		{ id: 11, name: "Procedimientos de Entrevistas", parentId: 5 },
		{ id: 12, name: "Procedimientos para altas ", parentId: 6 },
		{ id: 13, name: "Procedimientos de Sistemas ", parentId: 0 },
	];

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
								procedure.parentId === beforePrev && (
									<Item
										key={procedure.id}
										currentId={currentId}
										prevId={prevId}
										id={procedure.id}
										name={procedure.name}
										onclick={() =>
											handleBeforePrev(procedure.id, procedure.parentId)
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
								procedure.parentId === prevId && (
									<Item
										key={procedure.id}
										currentId={currentId}
										prevId={prevId}
										id={procedure.id}
										name={procedure.name}
										onclick={() =>
											handlePrevId(procedure.id, procedure.parentId)
										}
									/>
								),
						)}
					</div>
				)}
				<div className={classesCotainer}>
					{proceduresList.map(
						(procedure) =>
							procedure.parentId === currentId && (
								<Item
									key={procedure.id}
									currentId={currentId}
									prevId={prevId}
									id={procedure.id}
									name={procedure.name}
									onclick={() => handleCurrentId(procedure.id)}
								/>
							),
					)}
				</div>
			</section>
		</main>
	);
};

export default Procedures;
