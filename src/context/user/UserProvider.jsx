import { useState } from "react";
import UserContext from "./UserContext";

const UserProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);

	const handleUser = (value) => {
		setCurrentUser(value);
	};

	return (
		<UserContext.Provider value={{ currentUser, handleUser }}>
			{children}
		</UserContext.Provider>
	);
};

export default UserProvider;
