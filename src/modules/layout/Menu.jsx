import React from "react";
import { useNavigate } from "react-router-dom";
import useUser from "../../hooks/useUser";
import { menuItems } from "../../utils/menu";
import Button from "../common/components/Button";
import ItemMenu from "../common/menu/ItemMenu";
import TitleMenu from "../common/menu/TitleMenu";

const Menu = () => {
	const { currentUser } = useUser();
	const { id_category } = currentUser;
	const navigate = useNavigate();

	const handleLogout = () => {
		localStorage.removeItem("yavocapital_session");
		navigate("/login");
	};

	return (
		<div className="">
			<div className="fixed top-0 left-0 z-40 w-[250px] h-screen p-4 overflow-y-auto  colorPrimary dark:bg-gray-800 grid">
				<div className="flex">
					<img
						alt="logo vylon"
						src={"/logo-vylon.png"}
						className="w-[125px] h-[125px]"
					/>
				</div>

				{menuItems.map(({ title, subitems }) => (
					<div className="py-4 overflow-y-auto" key={title}>
						<TitleMenu title={title} />

						<ul className="space-y-2 font-medium">
							{subitems.map(
								(item) =>
									item.categoriesUser.includes(id_category) && (
										<ItemMenu
											href={item.href}
											title={item.title}
											key={item.title}
										/>
									),
							)}
						</ul>
					</div>
				))}

				<Button
					title="Cerrar sesión"
					background={false}
					href=""
					iconType="logout"
					onclick={handleLogout}
				/>
			</div>
		</div>
	);
};

export default Menu;
