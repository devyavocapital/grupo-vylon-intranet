import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useMessages from "../../hooks/useMessages";
import useToken from "../../hooks/useToken";
import Button from "../../modules/common/components/Button";
import { fetched } from "../../utils/fetched";
import { formClasses } from "../../utils/formClasses";

const NewCategory = () => {
	const navigation = useNavigate();
	const { fieldClasses, inputClasses, labelClasses } = formClasses;
	const [values, setValues] = useState({});
	const [areas, setAreas] = useState([]);
	const { token } = useToken();
	const { handleError, handleMessage } = useMessages();

	useEffect(() => {
		const getAreas = async () => {
			const responseAreas = await fetched(token, "GET", {}, "areas");
			setAreas(responseAreas[0]);
		};

		getAreas();
	}, []);

	const handleChange = (e) => {
		setValues({
			...values,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const response = await fetched(token, "POST", values, "categories");
		if (response?.error) handleError(response.error);

		handleMessage(response.msg);
		navigation("/categorias");
	};

	return (
		<main className="grid mx-auto w-6/12 mt-10">
			<form onSubmit={handleSubmit}>
				<div className="grid md:gap-6">
					<div className={fieldClasses}>
						<input
							type="text"
							name="nameCategory"
							id="nameCategory"
							className={inputClasses}
							placeholder=" "
							required
							onChange={(e) => handleChange(e)}
						/>
						<label htmlFor="nameCategory" className={labelClasses}>
							Nombre de la categoria
						</label>
					</div>
					<div className={fieldClasses}>
						<label for="underline_select" class="sr-only">
							Underline select
						</label>
						<select
							id="underline_select"
							className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer"
							onChange={(e) => handleChange(e)}
							name="valueCategory"
						>
							<option selected disabled>
								--Selecciona el rol--
							</option>
							<option value={1}>Administrador</option>
							<option value={2}>Operador</option>
						</select>
					</div>
					<div className={fieldClasses}>
						<label for="underline_select" class="sr-only">
							Underline select
						</label>
						<select
							id="underline_select"
							className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer"
							onChange={(e) => handleChange(e)}
							name="idArea"
						>
							<option selected disabled>
								--Selecciona el área--
							</option>
							{areas.map((area) => (
								<option value={area.id} key={area.id}>
									{area.name_area}
								</option>
							))}
						</select>
					</div>
				</div>

				<Button background={true} iconType="" title="Agregar" href="" />
			</form>
		</main>
	);
};

export default NewCategory;
