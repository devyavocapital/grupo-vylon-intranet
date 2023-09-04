import React from "react";
import Button from "../components/Button";

const ModuleRequest = ({ handleChange, minDate, handleVacations, days }) => {
	return (
		<section>
			<div className="border-2 border-gray-200 rounded-xl w-11/12 h-[250px] grid">
				<h3 className="text-4xl font-bold text-gray-900 text-center mt-5">
					Solicitud de Vacaciones
				</h3>
				<div date-rangepicker className="flex items-center justify-center mb-5">
					<div className="mb-6">
						<label
							htmlFor="requestDays"
							className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
						>
							Días
						</label>
						<input
							type="number"
							min={1}
							max={20}
							id="requestDays"
							name="requestDays"
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
							placeholder=" "
							required
							onChange={(e) => handleChange(e)}
						/>
					</div>
					<span className="mx-4 text-gray-500">del: </span>
					<div className="relative">
						<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
							<svg
								className="w-4 h-4 text-gray-500 dark:text-gray-400"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<title>icon date</title>
								<path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
							</svg>
						</div>
						<input
							name="dateTo"
							id="dateTo"
							type="date"
							min={minDate}
							onChange={(e) => handleChange(e)}
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
						/>
					</div>
					<span className="mx-4 text-gray-500">al: </span>
					<div className="relative">
						<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
							<svg
								className="w-4 h-4 text-gray-500 dark:text-gray-400"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<title>icon date</title>
								<path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
							</svg>
						</div>
						<input
							name="dateFrom"
							id={"dateFrom"}
							type="date"
							min={minDate}
							onChange={(e) => handleChange(e)}
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 "
						/>
					</div>
				</div>
				<div className="justify-end">
					{days.available_days > 0 && (
						<Button
							background={true}
							title={"Solicitar Vacaciones"}
							onclick={handleVacations}
						/>
					)}
				</div>
			</div>
		</section>
	);
};

export default ModuleRequest;
