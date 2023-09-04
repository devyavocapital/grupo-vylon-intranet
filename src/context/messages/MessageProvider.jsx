import { useEffect, useState } from "react";
import MessageContext from "./MessageContext";

const MessageProvider = ({ children }) => {
	const [msg, setMsg] = useState(null);
	const [error, setError] = useState(null);
	const [refresh, setRefresh] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setError(null);
			setMsg(null);
			setRefresh(false);
		}, 2500);
	}, [msg, error]);

	const handleMessage = (value) => {
		setMsg(value);
	};

	const handleError = (err) => {
		setError(err);
	};

	const handleRefresh = () => {
		setRefresh(!refresh);
	};

	return (
		<MessageContext.Provider
			value={{ msg, handleMessage, error, handleError, refresh, handleRefresh }}
		>
			{children}
		</MessageContext.Provider>
	);
};

export default MessageProvider;
