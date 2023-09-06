export const fetched = async (token, method, data, endpoint, json = true) => {
	const api = import.meta.env.VITE_APP_API_URL;
	const headersInit = new Headers({
		"x-auth-token": token,
	});
	json && headersInit.append("Content-Type", "application/json");
	console.log(token);
	console.log(data);
	console.log(endpoint);
	try {
		const response = await fetch(`${api}/${endpoint}`, {
			method,
			headers: headersInit,
			body:
				method === "POST" && !json
					? data
					: method !== "GET"
					? JSON.stringify(data)
					: null,
		});
		const fullResponse = await response.json();
		// console.log(fullResponse);
		return fullResponse;
	} catch (error) {
		console.log(error);
	}
};

export const getUser = async (token) => {
	const user = await fetched(token, "GET", {}, "login");
	return user.usuario[0][0];
};

export const getAreas = async (token) => {
	const responseAreas = await fetched(token, "GET", {}, "areas");
	return responseAreas[0];
};

export const getReleases = async (token) => {
	const releases = await fetched(token, "GET", {}, "releases");
	return releases[0];
};

export const getCategories = async (token) => {
	const responseCategories = await fetched(token, "GET", {}, "categories");
	return responseCategories[0];
};

export const getBirthdays = async (token) => {
	const responseBirthdays = await fetched(token, "GET", {}, "users/birthdays");
	return responseBirthdays[0];
};
export const getEmployees = async (token) => {
	const responseEmployees = await fetched(token, "GET", {}, "users");
	return responseEmployees[0];
};
export const getOneEmployees = async (token, idUser) => {
	const responseUser = await fetched(token, "GET", {}, `users?id=${idUser}`);
	return responseUser[0][0];
};

export const getProcedures = async (token) => {
	const proceduresList = await fetched(token, "GET", {}, "procedures?id=null");
	return proceduresList[0];
};

export const getVacations = async (token, idUser) => {
	const responseVacations = await fetched(
		token,
		"GET",
		{},
		`vacations?id=${idUser}`,
	);
	return responseVacations[0][0];
};

export const getVacationPoint = async (token, idUser, list) => {
	const responseList = await fetched(
		token,
		"GET",
		{},
		list ? `vacations/list?id=${idUser}` : `vacations/request?id=${idUser}`,
	);

	return responseList[0];
};
