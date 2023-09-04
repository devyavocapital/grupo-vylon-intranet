import useMessages from "../../hooks/useMessages";
import useToken from "../../hooks/useToken";
import Button from "../../modules/common/components/Button";
import Title from "../../modules/common/components/Title";
import Table from "../../modules/common/table/Table";
import { headers } from "../../utils/categories";
import { fetched } from "../../utils/fetched";
import React, { useEffect, useState } from "react";

const Categories = () => {
	const { token } = useToken();
	const [categories, setCategories] = useState([]);
	const { refresh } = useMessages();

	const getCategories = async () => {
		const responseCategories = await fetched(token, "GET", {}, "categories");
		setCategories(responseCategories[0]);
	};
	useEffect(() => {
		getCategories();
	}, []);

	useEffect(() => {
		refresh && getCategories();
	}, [refresh]);

	return (
		<div className="principal grid mx-auto mt-10">
			<div className="grid place-content-start mb-5">
				<Title contentTitle="Categorias" />

				<Button
					background={true}
					title="Agregar Categoria"
					href="/categorias/agregar-categoria"
					iconType="add"
				/>
			</div>

			<div className="relative overflow-x-auto shadow-md sm:rounded-lg grid">
				<Table
					employees={[]}
					areas={[]}
					headersArea={[]}
					headerEmployee={[]}
					categories={categories}
					headersCategory={headers}
				/>

				{/* <Pagination /> */}
			</div>
		</div>
	);
};

export default Categories;
