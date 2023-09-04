import { useContext } from "react";
import UserContext from "../context/user/UserContext";

const useUser = () => {
	return useContext(UserContext);
};

export default useUser;
