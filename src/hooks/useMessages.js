import { useContext } from "react";
import MessageContext from "../context/messages/MessageContext";

const useMessages = () => {
	return useContext(MessageContext);
};

export default useMessages;
