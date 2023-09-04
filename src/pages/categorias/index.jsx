import React, { useEffect, useState } from "react";
import useMessages from "../../hooks/useMessages";
import useToken from "../../hooks/useToken";
import Button from "../../modules/common/components/Button";
import Title from "../../modules/common/components/Title";
import Table from "../../modules/common/table/Table";
import { headers } from "../../utils/categories";
import { getCategories } from "../../utils/fetched";

const Categories = () => {
	const { token } = useToken();
	const [categories, setCategories] = useState([]);
	const { refresh } = useMessages();

	const getData = async () => {
		setCategories(await getCategories(token));
	};

	useEffect(() => {
		getData();
	}, []);

	useEffect(() => {
		refresh && getData();
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
