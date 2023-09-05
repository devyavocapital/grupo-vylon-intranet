import React from "react";

const ModuleOwnVacation = ({ list, setEdit }) => {
	return (
		<section className="mt-5 col-span-2">
			<h3 className="text-xl font-bold">Historial</h3>
			<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
				<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
					<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
						<tr>
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
							<th scope="col" className="px-6 py-3">
								Usuario que autorizo
							</th>
						</tr>
					</thead>
					<tbody>
						{list?.map((item, index) => (
							<tr
								className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
								// rome-ignore lint/suspicious/noArrayIndexKey: <explanation>
								key={index}
							>
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
									{item.fullName === null ? "Sin autorización" : item.fullName}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</section>
	);
};

export default ModuleOwnVacation;
