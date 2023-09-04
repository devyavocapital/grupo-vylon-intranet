import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import useToken from "../../hooks/useToken";
import useUser from "../../hooks/useUser";
import { getUser } from "../../utils/fetched";
import { menuItems } from "../../utils/menu";
import Spinner from "../common/components/Spinner";
import Header from "./Header";

const Layout = () => {
	const navigation = useNavigate();
	const [loading, setLoading] = useState(true);
	const { handleUser } = useUser();
	const { handleToken } = useToken();

	useEffect(() => {
		const validateToken = async () => {
			const token = localStorage.getItem("yavocapital_session");
			handleToken(token);

			const user = await getUser(token);
			handleUser(user);
			if (!token || !user) {
				// localStorage.removeItem("yavocapital_session");
				navigation("/login");
			}

			menuItems.map((item) =>
				item.subitems.map(
					({ categoriesUser }) =>
						!categoriesUser.includes(user.id_category) && navigation("/"),
				),
			);
		};

		validateToken();

		setTimeout(() => {
			setLoading(false);
		}, 1000);
	}, [navigation, handleToken]);

	return !loading ? (
		<>
			<Header />

			<Outlet />
		</>
	) : (
		<Spinner />
	);
};

export default Layout;
