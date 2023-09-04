import "flowbite";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./modules/layout";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Areas from "./pages/areas";
import NewArea from "./pages/areas/NewArea";
import Area from "./pages/areas/[id]";
import Categories from "./pages/categorias";
import NewCategory from "./pages/categorias/NewCategory";
import Category from "./pages/categorias/[id]";
import Employees from "./pages/colaboradores";
import NewEmployee from "./pages/colaboradores/NewEmployee";
import Employee from "./pages/colaboradores/[id]";
import Communication from "./pages/comunicados";
import NewCommunication from "./pages/comunicados/NewCommunication";
import Procedures from "./pages/procedimientos";
import NewProcedure from "./pages/procedimientos/NewProcedure";
import Vacations from "./pages/vacaciones";
import Test from "./test";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/login">
					<Route index element={<Login />} />
				</Route>
				<Route path="/testing">
					<Route index element={<Test />} />
				</Route>
				<Route path="/" element={<Layout />}>
					<Route index element={<Dashboard />} />
					<Route path="mi-perfil" element={<Profile />} />
				</Route>
				<Route path="/colaboradores" element={<Layout />}>
					<Route index element={<Employees />} />
					<Route path="agregar-colaborador" element={<NewEmployee />} />
					<Route path=":id" element={<Employee />} />
				</Route>
				<Route path="/areas" element={<Layout />}>
					<Route index element={<Areas />} />
					<Route path="agregar-area" element={<NewArea />} />
					<Route path=":id" element={<Area />} />
				</Route>
				<Route path="/categorias" element={<Layout />}>
					<Route index element={<Categories />} />
					<Route path="agregar-categoria" element={<NewCategory />} />
					<Route path=":id" element={<Category />} />
				</Route>
				<Route path="/control-interno" element={<Layout />}>
					<Route index element={<Procedures />} />
					<Route path="agregar-procedimiento" element={<NewProcedure />} />
				</Route>
				<Route path="/comunicacion-interna" element={<Layout />}>
					<Route index element={<Communication />} />
					<Route path="agregar-comunicado" element={<NewCommunication />} />
				</Route>
				<Route path="/vacaciones" element={<Layout />}>
					<Route index element={<Vacations />} />
				</Route>
				<Route path="/recibos-nomina" element={<Layout />}>
					<Route index element={<Dashboard />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
