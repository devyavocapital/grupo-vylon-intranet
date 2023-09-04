import React, { useRef, useState } from "react";
import useMessages from "../../hooks/useMessages";
import useToken from "../../hooks/useToken";
import Button from "../../modules/common/components/Button";
import { fetched } from "../../utils/fetched";

const NewCommunication = () => {
	const [values, setValues] = useState({
		file: [],
		name: "",
	});
	const nameRef = useRef();
	const { token } = useToken();
	const { handleError, handleMessage } = useMessages();

	const handleChange = (e) => {
		setValues({
			file: e.target.files[0],
			name: e.target.value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const formData = new FormData();
		formData.append("file", values.file);

		const data = { img: values.file.name, internalName: nameRef.current.value };

		const response = await fetched(
			token,
			"POST",
			formData,
			"releases/uploads",
			false,
		);
		handleMessage(response.msg);

		const releases = await fetched(token, "POST", data, "releases");
		console.log(releases);
	};

	return (
		<main className="principal">
			<form
				className="w-7/12 mt-10 mx-auto"
				onSubmit={handleSubmit}
				enctype="multipart/form-data"
			>
				<div className="relative z-0 w-full mb-6 group">
					<input
						type="text"
						name="internalName"
						id="internalName"
						className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
						placeholder=" "
						required
						ref={nameRef}
					/>
					<label
						htmlFor="internalName"
						className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
					>
						Nombre del comunicado
					</label>
				</div>

				<label
					className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
					for="user_avatar"
				>
					Upload file
				</label>
				<input
					className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
					aria-describedby="user_avatar_help"
					id="user_avatar"
					type="file"
					name="upload"
					onChange={(e) => handleChange(e)}
				/>
				<div className="mt-10">
					<Button background={true} title={"Agregar comunicado"} />
				</div>
			</form>
		</main>
	);
};

export default NewCommunication;
