import { Link } from "react-router-dom";
import useMessages from "../../hooks/useMessages";
import useUser from "../../hooks/useUser";
import ToastError from "../common/components/ToastError";
import ToastOk from "../common/components/ToastOk";

const Navbar = () => {
	const { currentUser } = useUser();
	const { error, msg } = useMessages();
	return (
		<nav className="border-b-2 border-orange-500 h-16 grid justify-end items-center gap-3 font-bold text-lg">
			<div className="flex justify-end items-center gap-3 mr-3">
				<div className="relative">
					<img
						alt="profile avatar"
						src="/profile.jpg"
						className="rounded-full w-14"
					/>
					<Link
						to={"/mi-perfil"}
						className="absolute top-7 -right-2 bg-white rounded-full p-2 border-2 border-indigo-700 hover:bg-indigo-700 hover:text-white"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-4 h-4 "
						>
							<title>Editar icon</title>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
							/>
						</svg>
					</Link>
				</div>
				<p>{`${currentUser.name} ${currentUser.lastname}`}</p>
				{/* <div
					id="dropdown"
					className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44"
				>
					<ul
						className="py-2 text-sm text-gray-700"
						aria-labelledby="dropdownDefaultButton"
					>
						{profileMenu.map((item) => (
							<li key={item.title}>
								<Link
									to={
										item.title === "Editar perfil"
											? `${item.href}/mi-perfil`
											: item.href
									}
									className="block px-4 py-2 hover:bg-gray-100"
								>
									{item.title}
								</Link>
							</li>
						))}
					</ul>
				</div> */}
			</div>
			{msg && <ToastOk message={msg} />}
			{error && <ToastError error={error} />}
		</nav>
	);
};

export default Navbar;
