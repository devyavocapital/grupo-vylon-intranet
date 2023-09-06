import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import useToken from "../../hooks/useToken";
import useUser from "../../hooks/useUser";
import { permission } from "../../utils/config";
import { getUser } from "../../utils/fetched";
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
				navigation("/login");
			}

			const location = window.location.pathname;
			permission.filter(
				({ href, categoriesUser }) =>
					href === location &&
					!categoriesUser.includes(user.id_category) &&
					navigation("/"),
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
