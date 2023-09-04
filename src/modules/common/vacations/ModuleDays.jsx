import React from "react";

const ModuleDays = ({ available_days, days_off }) => {
	return (
		<section className="w-10/12 p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
			<h3 className="mb-2 text-4xl font-bold text-gray-900 dark:text-white">
				Valida y solicita tus vacaciones
			</h3>
			<div className="flex justify-center gap-7 mt-10">
				<div className="flex flex-col items-center justify-center mb-2">
					<dt className="mb-2 text-5xl font-extrabold">{available_days}</dt>
					<dd className="text-gray-500 dark:text-gray-400">días disponibles</dd>
				</div>
				<div className="flex flex-col items-center justify-center mb-2">
					<dt className="mb-2 text-5xl font-extrabold">{days_off}</dt>
					<dd className="text-gray-500 dark:text-gray-400">días ocupados</dd>
				</div>
			</div>
		</section>
	);
};

export default ModuleDays;
