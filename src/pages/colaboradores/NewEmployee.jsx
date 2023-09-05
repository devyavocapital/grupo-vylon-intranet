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
} from "../../utils/fetched";
import { formClasses } from "../../utils/formClasses";

const NewEmployee = () => {
	const navigation = useNavigate();
	const [values, setValues] = useState({});
	const [areas, setAreas] = useState([]);
	const [categories, setCategories] = useState([]);
	const [users, setUsers] = useState([]);
	const { token } = useToken();
	const { handleError, handleMessage } = useMessages();

	const { fieldClasses, inputClasses, labelClasses, selectClasses } =
		formClasses;

	useEffect(() => {
		const getOthers = async () => {
			setAreas(await getAreas(token));
			setCategories(await getCategories(token));
			setUsers(await getEmployees(token));
		};
		getOthers();
	}, []);

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (values.confirm_password !== values.password) {
			handleError("Las contraseñas no son iguales");
			return;
		}

		const data = values;
		const response = await fetched(token, "POST", data, "users");
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
							{areas.map((area) => (
								<option value={area.id} key={area.id}>
									{area.name_area}
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
							{categories.map((category) => (
								<option value={category.id} key={category.id}>
									{category.category}
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
						/>
					</div>
				</div>
				<div className="grid md:grid-cols-3 md:gap-6">
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
								<option value={user.id_user} key={user.id_user}>
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
						/>
					</div>
					<div className={fieldClasses}>
						<input
							type="email"
							name="email"
							id="email"
							className={inputClasses}
							placeholder=" "
							required
							onChange={(e) => handleChange(e)}
						/>
						<label htmlFor="email" className={labelClasses}>
							Correo
						</label>
					</div>
				</div>
				<div className="grid md:grid-cols-2 md:gap-6">
					<div className={fieldClasses}>
						<input
							type="password"
							name="password"
							id="password"
							className={inputClasses}
							placeholder=" "
							required
							onChange={(e) => handleChange(e)}
						/>
						<label htmlFor="password" className={labelClasses}>
							Password
						</label>
					</div>
					<div className={fieldClasses}>
						<input
							type="password"
							name="confirm_password"
							id="confirm_password"
							className={inputClasses}
							placeholder=" "
							required
							onChange={(e) => handleChange(e)}
						/>
						<label htmlFor="confirm_password" className={labelClasses}>
							Confirmar password
						</label>
					</div>
				</div>

				<Button background={true} iconType="" title="Agregar" href="" />
			</form>
		</main>
	);
};

export default NewEmployee;
