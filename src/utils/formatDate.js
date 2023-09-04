export const formatDateMin = () => {
	const hoy = new Date();
	const currentDay = hoy.getDate();
	const currentMonth = hoy.getMonth() + 1;
	const currentYear = hoy.getFullYear();
	const minDate = `${currentYear}-0${currentMonth}-${currentDay}`;
	return minDate;
};
