import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../modules/common/components/Button";
import { fetched } from "../utils/fetched";
import { formClasses } from "../utils/formClasses";

const Login = () => {
	const { inputLogin, labelLogin } = formClasses;
	const emailRef = useRef(null);
	const passRef = useRef(null);
	const [error, setError] = useState(null);
	const navigation = useNavigate();

	useEffect(() => {
		const isLogged = async () => {
			const token = localStorage.getItem("yavocapital_session");
			const response = await fetched(token, "GET", {}, "login");
			if (!response.usuario) {
				return;
			}
			navigation("/");
		};
		isLogged();
	}, []);

	const handleLogin = async (e) => {
		e.preventDefault();

		const data = {
			email: emailRef.current?.value,
			password: passRef.current?.value,
		};
		const response = await fetched("", "POST", data, "login");

		if (response?.error) {
			setError(response.error);
			return;
		}

		const { token } = response;
		localStorage.setItem("yavocapital_session", token);
		setError(null);

		navigation("/");
	};

	return (
		<main className="grid w-full h-screen">
			<section className="mx-auto w-5/12 place-self-center border-4 border-[#002856] p-10 rounded-2xl">
				<h1 className="text-7xl my-5 text-center font-bold uppercase text-primary">
					Login
				</h1>

				<form onSubmit={handleLogin}>
					<div className="mb-6">
						<label htmlFor="email" className={labelLogin}>
							Email
						</label>
						<input
							type="email"
							id="email"
							className={inputLogin}
							placeholder="sguadarrama@yavocapital.com"
							required
							ref={emailRef}
						/>
					</div>
					<div className="mb-6">
						<label htmlFor="password" className={labelLogin}>
							Password
						</label>
						<input
							type="password"
							id="password"
							className={inputLogin}
							required
							ref={passRef}
						/>
					</div>
					{error !== null && (
						<p className="text-red-700 italic mb-5">{error}</p>
					)}
					<Button
						background={true}
						href=""
						iconType=""
						title="Iniciar Sesión"
					/>
				</form>
			</section>
		</main>
	);
};

export default Login;
