export const formatDateMin = () => {
	const hoy = new Date();
	const currentDay = hoy.getDate();
	const currentMonth = hoy.getMonth() + 1;
	const currentYear = hoy.getFullYear();
	const minDate = `${currentYear}-0${currentMonth}-${currentDay}`;
	return minDate;
};

export const getCurrentDay = () => {
	const date = new Date();
	const currentDate = date.toLocaleDateString("es-MX", {
		year: "numeric",
		month: "2-digit",
		day: "2-digit",
	});
	return currentDate.replaceAll("/", "-");
};
