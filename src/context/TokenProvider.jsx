import { useEffect, useState } from "react";
import TokenContext from "./TokenContext";

const TokenProvider = ({ children }) => {
	const [token, setToken] = useState(null);

	const handleToken = (value) => {
		setToken(value);
	};

	useEffect(() => {
		const validateToken = () => {
			const tokenStorage = localStorage.getItem("yavocapital_session");
			if (!tokenStorage) {
				setToken("");
				return;
			}

			handleToken(tokenStorage);
		};

		validateToken();
	}, []);

	return (
		<TokenContext.Provider value={{ token, handleToken }}>
			{children}
		</TokenContext.Provider>
	);
};

export default TokenProvider;
