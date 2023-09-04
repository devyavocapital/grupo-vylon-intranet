export const menuItems = [
	{
		title: "Home",
		subitems: [
			{
				href: "/",
				title: "Inicio",
				categoriesUser: [1, 2, 3, 4],
			},
		],
	},
	{
		title: "Trámites",
		subitems: [
			{
				href: "/recibos-nomina",
				title: "Recibos de Nómina",
				categoriesUser: [1, 2, 3, 4],
			},
			{
				href: "/vacaciones",
				title: "Vacaciones",
				categoriesUser: [1, 2, 3, 4],
			},
		],
	},
	{
		title: "Gestión",
		subitems: [
			{
				href: "/comunicacion-interna",
				title: "Comunicados",
				categoriesUser: [1, 2, 3, 4],
			},
			{
				href: "/control-interno",
				title: "Control Interno",
				categoriesUser: [1, 2, 3, 4],
			},
			{
				href: "/colaboradores",
				title: "Colaboradores",
				categoriesUser: [1, 2],
			},
			{
				href: "/categorias",
				title: "Categorias",
				categoriesUser: [1, 2],
			},
			{
				href: "/areas",
				title: "Áreas",
				categoriesUser: [1, 2],
			},
		],
	},
];

export const profileMenu = [
	{ title: "Editar perfil", href: "/editar" },
	{ title: "Cerrar sesión", href: "/login" },
];
