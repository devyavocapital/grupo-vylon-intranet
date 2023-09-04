import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import TokenProvider from "./context/TokenProvider";
import MessageProvider from "./context/messages/MessageProvider.jsx";
import UserProvider from "./context/user/UserProvider.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<TokenProvider>
		<MessageProvider>
			<UserProvider>
				<App />
			</UserProvider>
		</MessageProvider>
	</TokenProvider>,
);
