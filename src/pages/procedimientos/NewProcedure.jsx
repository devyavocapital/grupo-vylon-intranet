import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import useMessages from "../../hooks/useMessages";
import useToken from "../../hooks/useToken";
import Button from "../../modules/common/components/Button";
import Title from "../../modules/common/components/Title";
import { fetched, getProcedures } from "../../utils/fetched";

const NewProcedure = () => {
	const navigation = useNavigate();
	const { token } = useToken();
	const { handleMessage, handleError } = useMessages();
	const [parents, setParents] = useState([]);
	const [values, setValues] = useState({});
	const controlRef = useRef();
	const parentRef = useRef();

	useEffect(() => {
		const getData = async () => {
			setParents(await getProcedures(token));
		};

		getData();
	}, []);

	const handleChange = (e) => {
		setValues({
			file: e.target.files[0],
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const data = {
			document: values?.file?.name,
			controlName: controlRef.current.value,
			idParent: parentRef.current.value,
		};
		console.log(data);
		const response = await fetched(token, "POST", data, "procedures");
		console.log(response);
		if (response?.error) {
			handleError(response.error);
			return;
		}

		handleMessage(response.msg);
		navigation("/control-interno");
	};

	return (
		<main className="principal">
			<Title contentTitle={"Agregar Procedimiento"} />

			<form
				className="w-7/12 mt-10 mx-auto"
				enctype="multipart/form-data"
				onSubmit={handleSubmit}
			>
				<div class="relative z-0 w-full mb-6 group">
					<input
						type="text"
						name="nombre"
						id="nombre"
						class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
						placeholder=" "
						required
						ref={controlRef}
					/>
					<label
						for="nombre"
						class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
					>
						Nombre del procedimiento
					</label>
				</div>
				<div class="relative z-0 w-full mb-6 group">
					<label for="underline_select" class="sr-only">
						Underline select
					</label>
					<select
						id="underline_select"
						class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer"
						ref={parentRef}
					>
						<option selected value={0}>
							Selecciona el procedimiento padre
						</option>
						{parents.map((parent) => (
							<option value={parent.id} key={parent.id}>
								{parent.control_name}
							</option>
						))}
					</select>
				</div>
				<div class="relative z-0 w-full mb-6 group">
					<label
						className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
						for="user_avatar"
					>
						Adjuntar archivo
					</label>
					<input
						className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
						aria-describedby="user_avatar_help"
						id="file"
						type="file"
						name="upload"
						onChange={(e) => handleChange(e)}
					/>
				</div>

				<div className="mt-10">
					<Button background={true} title={"Agregar Procedimiento"} />
				</div>
			</form>
		</main>
	);
};

export default NewProcedure;
