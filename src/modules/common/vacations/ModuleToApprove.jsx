import React from "react";
import Button from "../components/Button";

const ModuleToApprove = ({ approve, handleApprove }) => {
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
								<td className="px-6 py-4">{item.date_to}</td>
								<td className="px-6 py-4">{item.date_from}</td>
								<td className="px-6 py-4">
									{item.id_user_approve === null ? (
										<Button
											background={true}
											onclick={() =>
												handleApprove(item.id_user, item.id_request)
											}
											title={"Aprobar Vacaciones"}
										/>
									) : (
										<p className="uppercase text-lg text-green-700 font-bold">
											Aprobadas
										</p>
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
