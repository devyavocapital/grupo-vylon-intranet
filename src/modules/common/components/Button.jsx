import React from "react";
import { Link } from "react-router-dom";

const Button = ({ title, background, href, iconType, onclick }) => {
	return href ? (
		<Link
			to={href}
			className={`flex justify-center place-content-center text-center h-12 w-full items-center mx-auto px-3 py-2 ${
				background
					? "border-2 border-[#002856] rounded-xl hover:text-white hover:bg-[#002856]"
					: "text-white rounded-lg hover:text-gray-900 hover:bg-gray-100 border-2 border-white"
			}`}
		>
			{iconType === "logout" && (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth="1.5"
					stroke="currentColor"
					className="w-6 h-6 mr-2"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
					/>

					<title>Icono Logout</title>
				</svg>
			)}
			{iconType === "add" && (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="w-6 h-6 mr-2"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
					<title>Icono Add</title>
				</svg>
			)}
			<span className="flex-1 mx-auto whitespace-nowrap uppercase font-bold">
				{title}
			</span>
		</Link>
	) : (
		<button
			type="submit"
			className={`grid grid-flow-col mx-auto h-12 place-items-center w-9/12 px-2 py-2 ${
				background
					? "border-2 border-[#002856] rounded-xl hover:bg-[#002856] hover:text-white"
					: "text-white rounded-lg hover:text-gray-900 hover:bg-gray-100 border-2 border-white"
			}`}
			onClick={onclick}
		>
			{iconType === "logout" && (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth="1.5"
					stroke="currentColor"
					className="w-6 h-6"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
					/>

					<title>Icono Logout</title>
				</svg>
			)}
			{iconType === "add" && (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="w-6 h-6"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
					<title>Icono Add</title>
				</svg>
			)}
			{iconType === "edit" && (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="w-6 h-6"
				>
					<title>Editar icon</title>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
					/>
				</svg>
			)}
			{title && (
				<span className="flex-1 mx-auto whitespace-nowrap uppercase font-bold">
					{title}
				</span>
			)}
		</button>
	);
};

export default Button;
