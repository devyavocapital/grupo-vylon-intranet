import React from "react";


const TitleMenu = ({ title }) => {
	return (
		<h5
			id="drawer-navigation-label"
			className="text-lg font-semibold text-gray-500 dark:text-gray-400 my-auto"
		>
			{title}
		</h5>
	);
};

export default TitleMenu;
