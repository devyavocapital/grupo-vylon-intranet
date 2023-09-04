import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useMessages from "../../hooks/useMessages";
import useToken from "../../hooks/useToken";
import Button from "../../modules/common/components/Button";
import { fetched } from "../../utils/fetched";
import { formClasses } from "../../utils/formClasses";

const Category = () => {
	const navigation = useNavigate();
	const [values, setValues] = useState({});
	const [areas, setAreas] = useState([]);
	const [query] = useState(window.location.pathname.split("/")[2]);
	const { fieldClasses, inputClasses, labelClasses } = formClasses;
	const { token } = useToken();
	const { handleError, handleMessage } = useMessages();

	useEffect(() => {
		const getAreas = async () => {
			const responseAreas = await fetched(token, "GET", {}, "areas");
			setAreas(responseAreas[0]);
		};

		const getCategory = async () => {
			const responseCategory = await fetched(
				token,
				"GET",
				{},
				`categories?id=${query}`,
			);
			const initialValues = responseCategory[0][0];
			setValues({
				id: initialValues.id,
				idArea: initialValues.id_area,
				nameCategory: initialValues.category,
				valueCategory: initialValues.value_category,
			});
		};

		getAreas();
		getCategory();
	}, []);

	const handleChange = (e) => {
		setValues({
			...values,
			[e.target.name]: e.target.value,
		});
	};
	const { idArea, nameCategory, valueCategory } = values;

	const handleSubmit = async (e) => {
		e.preventDefault();
		const response = await fetched(
			token,
			"PUT",
			values,
			`categories?id=${query}`,
		);
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
							value={nameCategory}
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
							<option value={1} selected={valueCategory === 1 && true}>
								Administrador
							</option>
							<option value={2} selected={valueCategory === 2 && true}>
								Operador
							</option>
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
								<option
									value={area.id}
									key={area.id}
									selected={idArea === area.id && true}
								>
									{area.name_area}
								</option>
							))}
						</select>
					</div>
				</div>

				<Button background={true} iconType="" title="Guardar Cambios" href="" />
			</form>
		</main>
	);
};

export default Category;
