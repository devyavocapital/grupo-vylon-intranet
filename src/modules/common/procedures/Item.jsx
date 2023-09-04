import React from "react";

const Item = ({ onclick, name, id, currentId, prevId }) => {
	const icon = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={1.5}
			stroke="currentColor"
			className="w-6 h-6"
		>
			<title>right icon</title>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M8.25 4.5l7.5 7.5-7.5 7.5"
			/>
		</svg>
	);
	return (
		<button
			type="button"
			onClick={onclick}
			className={`flex justify-between h-[40px] items-center px-2 rounded-l-xl hover:bg-indigo-700 hover:text-white transition-all ${
				currentId === id && "bg-indigo-500"
			} ${prevId === id && "bg-slate-300"}`}
		>
			{name}
			{icon}
		</button>
	);
};

export default Item;
