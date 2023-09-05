import React from "react";

const Indicator = ({ title, color }) => {
	return (
		<p className={`uppercase text-lg text-${color}-700 font-bold`}>{title}</p>
	);
};

export default Indicator;
