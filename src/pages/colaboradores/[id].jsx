import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useMessages from "../../hooks/useMessages";
import useToken from "../../hooks/useToken";
import Button from "../../modules/common/components/Button";
import {
	fetched,
	getAreas,
	getCategories,
	getEmployees,
	getOneEmployees,
} from "../../utils/fetched";
import { formClasses } from "../../utils/formClasses";

const Employee = () => {
	const navigation = useNavigate();
	const [values, setValues] = useState({});
	const [areas, setAreas] = useState([]);
	const [users, setUsers] = useState([]);
	const query = window.location.pathname.split("/")[2];
	const [categories, setCategories] = useState([]);
	const { token } = useToken();
	const { handleError, handleMessage } = useMessages();

	const { fieldClasses, inputClasses, labelClasses, selectClasses } =
		formClasses;

	useEffect(() => {
		const getData = async () => {
			setAreas(await getAreas(token));
			setCategories(await getCategories(token));
			setUsers(await getEmployees(token));

			const user = await getOneEmployees(token, query);
			setValues({
				id: query,
				name: user.name,
				lastname: user.lastname,
				motherLastname: user.mother_lastname,
				category: user.id_category,
				area: user.id_area,
				position: user.position,
				entryDate: user.entry_date,
				boss_id: user.boss_id,
				birthday:
					user.birthday !== null ? user.birthday.slice(0, 10) : "2000-01-01",
			});
		};
		getData();
	}, []);

	const {
		name,
		lastname,
		motherLastname,
		category,
		area,
		position,
		entryDate,
		boss_id,
		birthday,
	} = values;

	const handleSubmit = async (e) => {
		e.preventDefault();

		const data = values;
		const response = await fetched(token, "PUT", data, `users?id=${query}`);
		if (response?.error) {
			handleError(response.error);
			return;
		}

		handleMessage(response.msg);
		navigation("/colaboradores");
	};

	const handleChange = (e) => {
		setValues({
			...values,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<main className="grid mx-auto principal mt-10">
			<form onSubmit={handleSubmit}>
				<div className="grid md:grid-cols-2 md:gap-6">
					<div className={fieldClasses}>
						<input
							type="text"
							name="name"
							id="name"
							className={inputClasses}
							placeholder=" "
							required
							onChange={(e) => handleChange(e)}
							value={name}
						/>
						<label htmlFor="name" className={labelClasses}>
							Nombre
						</label>
					</div>
					<div className={fieldClasses}>
						<input
							type="text"
							name="lastname"
							id="lastname"
							className={inputClasses}
							placeholder=" "
							required
							onChange={(e) => handleChange(e)}
							value={lastname}
						/>
						<label htmlFor="lastname" className={labelClasses}>
							Apellido Paterno
						</label>
					</div>
				</div>
				<div className="grid md:grid-cols-2 md:gap-6">
					<div className={fieldClasses}>
						<input
							type="text"
							name="motherLastname"
							id="motherLastname"
							className={inputClasses}
							placeholder=" "
							required
							onChange={(e) => handleChange(e)}
							value={motherLastname}
						/>
						<label htmlFor="motherLastname" className={labelClasses}>
							Apellido Materno
						</label>
					</div>
					<div className={fieldClasses}>
						<input
							type="text"
							name="position"
							id="position"
							className={inputClasses}
							placeholder=" "
							required
							onChange={(e) => handleChange(e)}
							value={position}
						/>
						<label htmlFor="position" className={labelClasses}>
							Posición
						</label>
					</div>
				</div>

				<div className="grid md:grid-cols-3 md:gap-6">
					<div className={fieldClasses}>
						<label htmlFor="underline_select" className="sr-only">
							Área
						</label>
						<select
							id="underline_select"
							className={selectClasses}
							onChange={(e) => handleChange(e)}
							name="area"
						>
							<option selected disabled>
								-- Selecciona el área --
							</option>
							{areas.map((a) => (
								<option
									value={a.id}
									key={a.id}
									selected={area === a.id && true}
								>
									{a.name_area}
								</option>
							))}
						</select>
					</div>
					<div className={fieldClasses}>
						<label htmlFor="underline_select" className="sr-only">
							Categoría
						</label>
						<select
							id="underline_select"
							className={selectClasses}
							onChange={(e) => handleChange(e)}
							name="category"
						>
							<option selected disabled>
								-- Selecciona la categoría --
							</option>
							{categories.map((c) => (
								<option
									value={c.id}
									key={c.id}
									selected={c.id === category && true}
								>
									{c.category}
								</option>
							))}
						</select>
					</div>
					<div className={`flex ${fieldClasses} justify-between`}>
						<label htmlFor="" className="justify-center self-center mr-2">
							Fecha de Ingreso:
						</label>
						<input
							type="date"
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-8/12"
							placeholder="Select date"
							onChange={(e) => handleChange(e)}
							name="entryDate"
							value={entryDate}
						/>
					</div>
				</div>
				<div className="grid md:grid-cols-2 md:gap-6">
					<div className={fieldClasses}>
						<label htmlFor="underline_select" className="sr-only">
							Jefe inmediato
						</label>
						<select
							id="underline_select"
							className={selectClasses}
							onChange={(e) => handleChange(e)}
							name="boss_id"
						>
							<option selected disabled>
								-- Jefe inmediato --
							</option>
							{users.map((user) => (
								<option
									value={user.id_user}
									key={user.id_user}
									selected={user.id_user === boss_id && true}
								>
									{user.fullname} - {user.name_area}
								</option>
							))}
						</select>
					</div>
					<div className={`flex ${fieldClasses} justify-between`}>
						<label htmlFor="" className="justify-center self-center mr-2">
							Fecha de Nacimiento:
						</label>
						<input
							type="date"
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-8/12"
							placeholder="Select date"
							onChange={(e) => handleChange(e)}
							name="birthday"
							value={birthday}
						/>
					</div>
				</div>
				<Button background={true} iconType="" title="Guardar Cambios" href="" />
			</form>
		</main>
	);
};

export default Employee;
