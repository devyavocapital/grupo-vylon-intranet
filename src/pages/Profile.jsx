import React, { useEffect, useState } from "react";
import useUser from "../hooks/useUser";
import Button from "../modules/common/components/Button";
import Title from "../modules/common/components/Title";
import { formClasses } from "../utils/formClasses";

const Profile = () => {
	const { currentUser } = useUser();
	const [values, setValues] = useState({});
	useEffect(() => {
		setValues({
			name: currentUser.name,
			lastname: currentUser.lastname,
			motherLastname: currentUser.mother_lastname,
			category: currentUser.id_category,
			area: currentUser.id_area,
			position: currentUser.position,
			entryDate: currentUser.entry_date,
			boss_id: currentUser.boss_id,
		});
	}, []);

	const { name, lastname, motherLastname } = values;

	const { fieldClasses, inputClasses, labelClasses } = formClasses;

	const handleChange = (e) => {
		setValues({
			...values,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
	};

	return (
		<main className="principal">
			<Title contentTitle={"Mi Perfil"} />
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
				</div>

				<Button
					background={true}
					iconType=""
					title="Actualizar Datos"
					href=""
				/>
			</form>
		</main>
	);
};

export default Profile;
