import React, { useState } from "react";
import useMessages from "../hooks/useMessages";
import useToken from "../hooks/useToken";
import { fetched } from "../utils/fetched";
import Button from "./common/components/Button";

const ModalVacation = ({ idUser }) => {
	const [show, setShow] = useState(false);
	const [days, setDays] = useState({});
	const { token } = useToken();
	const { handleError, handleMessage } = useMessages();

	const handleChange = (e) => {
		setDays({
			...days,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const data = {
			...days,
			id: idUser,
		};
		const response = await fetched(token, "POST", data, "vacations");
		console.log(response);

		if (response?.error) {
			handleError(response.error);
			return;
		}

		handleMessage(response.msg);
		setShow(false);
	};

	return (
		<>
			<button
				className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm ml-3 px-4 text-center "
				type="button"
				onClick={() => setShow(true)}
			>
				Vacaciones
			</button>

			{show && (
				<div className="fixed translate-y-[20%] translate-x-[70%] z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full ">
					<div className="relative w-full max-w-md max-h-full">
						<div className="relative bg-white rounded-lg shadow dark:bg-gray-700 border-2 border-gray-700">
							<button
								type="button"
								className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
								onClick={() => setShow(false)}
							>
								<svg
									className="w-3 h-3"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 14 14"
								>
									<title>icon</title>
									<path
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
									/>
								</svg>
								<span className="sr-only">Close modal</span>
							</button>
							<div className="px-6 py-6 lg:px-8">
								<h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
									Asigna días de vacaciones
								</h3>
								<form className="space-y-6" onSubmit={handleSubmit}>
									<div>
										<label
											htmlFor="availableDays"
											className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
										>
											Días disponibles
										</label>
										<input
											type="number"
											min={0}
											max={100}
											name="availableDays"
											id="availableDays"
											className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
											placeholder=" "
											required
											onChange={(e) => handleChange(e)}
										/>
									</div>
									<div>
										<label
											htmlFor="daysOff"
											className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
										>
											Días ocupados
										</label>
										<input
											type="number"
											min={0}
											max={100}
											name="daysOff"
											id="daysOff"
											placeholder=" "
											className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
											required
											onChange={(e) => handleChange(e)}
										/>
									</div>
									<Button background={true} href={""} title={"Asignar"} />
								</form>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default ModalVacation;
