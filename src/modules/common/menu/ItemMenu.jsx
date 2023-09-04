import React from "react";
import { Link } from "react-router-dom";

const ItemMenu= ({ title, href }) => {
	return (
		<li>
			<Link
				to={href}
				className="flex items-center p-2 text-white rounded-lg hover:text-gray-900 hover:bg-gray-100"
			>
				<span className="ml-3">{title}</span>
			</Link>
		</li>
	);
};

export default ItemMenu;
