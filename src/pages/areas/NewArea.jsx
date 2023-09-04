import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useMessages from "../../hooks/useMessages";
import useToken from "../../hooks/useToken";
import Button from "../../modules/common/components/Button";
import { fetched } from "../../utils/fetched";
import { formClasses } from "../../utils/formClasses";

const NewArea = () => {
	const navigation = useNavigate();
	const [area, setArea] = useState("");
	const { fieldClasses, inputClasses, labelClasses } = formClasses;
	const { token } = useToken();
	const { handleError, handleMessage } = useMessages();

	const handleChange = (e) => {
		setArea(e.target.value);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const data = { area };
		const response = await fetched(token, "POST", data, "areas");
		if (response?.error) handleError(response.error);

		handleMessage(response.msg);
		navigation("/areas");
	};

	return (
		<main className="principal">
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
								value={area}
							/>
							<label htmlFor="employeeName" className={labelClasses}>
								Nombre del área
							</label>
						</div>
					</div>

					<Button background={true} iconType="" title="Agregar" href="" />
				</form>
			</section>
		</main>
	);
};

export default NewArea;
