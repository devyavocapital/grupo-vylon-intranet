import React from "react";
import Button from "../components/Button";
import Indicator from "./Indicator";

const ModuleToApprove = ({ approve, handleApprove, handleApproveDelete }) => {
	console.log(approve);
	return (
		<section className="mt-5 col-span-2">
			<h3 className="text-xl font-bold">Para Aprobar</h3>
			<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
				<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
					<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
						<tr>
							<th scope="col" className="px-6 py-3">
								Colaborador
							</th>
							<th scope="col" className="px-6 py-3">
								Días solicitados
							</th>
							<th scope="col" className="px-6 py-3">
								Fecha de solicitud
							</th>
							<th scope="col" className="px-6 py-3">
								Inicio
							</th>
							<th scope="col" className="px-6 py-3">
								Fin
							</th>
						</tr>
					</thead>
					<tbody>
						{approve.map((item, index) => (
							<tr
								className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
								// rome-ignore lint/suspicious/noArrayIndexKey: <explanation>
								key={index}
							>
								<th
									scope="row"
									className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
								>
									{item.colaborador}
								</th>
								<th
									scope="row"
									className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
								>
									{item.request_days}
								</th>
								<td className="px-6 py-4">{item.request_date.slice(0, 10)}</td>
								<td className="px-6 py-4">{item.date_to.slice(0, 10)}</td>
								<td className="px-6 py-4">{item.date_from.slice(0, 10)}</td>
								<td className="px-6 py-4">
									{item.id_user_approve === null ? (
										<div className="flex gap-4 mx-5">
											<Button
												background={true}
												onclick={() =>
													handleApprove(item.id_user, item.id_request)
												}
												title={"Autorizar"}
											/>
											<Button
												background={true}
												onclick={() => handleApproveDelete(item.id_request)}
												title={"NO Autorizar"}
											/>
										</div>
									) : (
										<div className="w-full text-center">
											<Indicator color={"green"} title={"Autorizadas"} />
										</div>
									)}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</section>
	);
};

export default ModuleToApprove;
