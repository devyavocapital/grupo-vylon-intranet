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
