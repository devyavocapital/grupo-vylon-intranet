import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useMessages from "../../hooks/useMessages";
import useToken from "../../hooks/useToken";
import Button from "../../modules/common/components/Button";
import { fetched } from "../../utils/fetched";
import { formClasses } from "../../utils/formClasses";

const Area = () => {
	const navigation = useNavigate();
	const [area, setArea] = useState("");
	const [query] = useState(window.location.pathname.split("/")[2]);
	const { fieldClasses, inputClasses, labelClasses } = formClasses;
	const { token } = useToken();
	const { handleError, handleMessage } = useMessages();

	useEffect(() => {
		const getAreas = async () => {
			const responseArea = await fetched(token, "GET", {}, `areas?id=${query}`);
			setArea(responseArea[0][0]);
		};
		getAreas();
	}, [token, query]);

	const handleChange = (e) => {
		setArea(e.target.value);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const data = { area };
		const response = await fetched(token, "PUT", data, `areas?id=${query}`);
		if (response?.error) {
			handleError(response.error);
		}
		handleMessage(response.msg);
		navigation("/areas");
	};

	return (
		<main className="principal">
			{/* {msg && <ToastOk message={msg} />}
			{error && <ToastError error={error} />} */}
			<section className="grid mx-auto w-6/12 mt-10">
				<form onSubmit={handleSubmit}>
					<div className="grid md:gap-6">
						<div className={fieldClasses}>
							<input
								type="text"
								name="employeeName"
								id="employeeName"
								className={inputClasses}
								placeholder=" "
								required
								onChange={(e) => handleChange(e)}
								value={area.name_area}
							/>
							<label htmlFor="employeeName" className={labelClasses}>
								Nombre del área
							</label>
						</div>
					</div>

					<Button
						background={true}
						iconType=""
						title="Guardar Cambios"
						href=""
					/>
				</form>
			</section>
		</main>
	);
};

export default Area;
