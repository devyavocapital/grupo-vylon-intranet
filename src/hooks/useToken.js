import { useContext } from "react";
import TokenContext from "../context/TokenContext";

const useToken = () => {
	return useContext(TokenContext);
};

export default useToken;
