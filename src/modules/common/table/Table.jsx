import { Link } from "react-router-dom";
import useMessages from "../../../hooks/useMessages";
import useToken from "../../../hooks/useToken";
import { fetched } from "../../../utils/fetched";
import ModalVacation from "../../ModalVacation";

const Table = ({
	employees = [],
	headerEmployee,
	areas = [],
	headersArea,
	categories = [],
	headersCategory,
}) => {
	const { handleMessage, handleError, handleRefresh } = useMessages();
	const { token } = useToken();

	const handleDelete = async (id, endpoint) => {
		const response = await fetched(token, "DELETE", {}, `${endpoint}?id=${id}`);
		if (response?.error) {
			handleError(response.error);
		}
		handleMessage(response.msg);
		handleRefresh(true);
	};

	return (
		<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
			<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
				<tr>
					{headerEmployee.map((header) => (
						<th scope="col" className="px-6 py-3" key={header.name}>
							{header.name}
						</th>
					))}
					{headersArea.map((header) => (
						<th scope="col" className="px-6 py-3" key={header.name}>
							{header.name}
						</th>
					))}
					{headersCategory.map((header) => (
						<th scope="col" className="px-6 py-3" key={header.name}>
							{header.name}
						</th>
					))}
				</tr>
			</thead>
			<tbody>
				{employees.map((employee) => (
					<tr
						className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
						key={employee.id_user}
					>
						<td className="px-6 py-4">{employee.fullname}</td>
						<td className="px-6 py-4">{employee.name_area}</td>
						<th
							scope="row"
							className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
						>
							{employee.email}
						</th>
						<td className="px-6 py-4 flex">
							<Link
								to={`/colaboradores/${employee.id_user}`}
								className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="w-6 h-6"
								>
									<title>Editar icon</title>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
									/>
								</svg>
							</Link>
							<button
								type="button"
								className="font-medium text-blue-600 dark:text-blue-500 hover:underline ml-5"
								onClick={() => handleDelete(employee.id_user, "users")}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="w-6 h-6"
								>
									<title>Eliminar icon</title>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
									/>
								</svg>
							</button>
							<ModalVacation idUser={employee.id_user} />
						</td>
					</tr>
				))}

				{areas.map((area) => (
					<tr
						className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
						key={area.id}
					>
						<th
							scope="row"
							className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
						>
							{area.name_area}
						</th>
						<td className="px-6 py-4 flex">
							<Link
								to={`/areas/${area.id}`}
								className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="w-6 h-6"
								>
									<title>Editar icon</title>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
									/>
								</svg>
							</Link>
							<button
								type="button"
								className="font-medium text-blue-600 dark:text-blue-500 hover:underline ml-5"
								onClick={() => handleDelete(area.id, "areas")}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="w-6 h-6"
								>
									<title>Eliminar icon</title>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
									/>
								</svg>
							</button>
						</td>
					</tr>
				))}
				{categories.map((category) => (
					<tr
						className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
						key={category.id}
					>
						<th
							scope="row"
							className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
						>
							{category.category}
						</th>
						<th
							scope="row"
							className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
						>
							{category.name_area}
						</th>
						<td className="px-6 py-4 flex">
							<Link
								to={`/categorias/${category.id}`}
								className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="w-6 h-6"
								>
									<title>Editar icon</title>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
									/>
								</svg>
							</Link>
							<button
								type="button"
								className="font-medium text-blue-600 dark:text-blue-500 hover:underline ml-5"
								onClick={() => handleDelete(category.id, "categories")}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="w-6 h-6"
								>
									<title>Eliminar icon</title>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
									/>
								</svg>
							</button>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default Table;
