import { useEffect, useState } from "react";
import useMessages from "../../hooks/useMessages";
import useToken from "../../hooks/useToken";
import Button from "../../modules/common/components/Button";
import Title from "../../modules/common/components/Title";
import Table from "../../modules/common/table/Table";
import { headers } from "../../utils/areas";
import { getAreas } from "../../utils/fetched";

const Areas = () => {
	const { token } = useToken();
	const [areas, setAreas] = useState([]);
	const { refresh } = useMessages();

	const getData = async () => {
		setAreas(await getAreas(token));
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
				<Title contentTitle="Áreas" />

				<Button
					background={true}
					title="Agregar área"
					href="/areas/agregar-area"
					iconType="add"
				/>
			</div>

			<div className="relative overflow-x-auto shadow-md sm:rounded-lg grid">
				<Table
					employees={[]}
					headerEmployee={[]}
					areas={areas}
					headersArea={headers}
					categories={[]}
					headersCategory={[]}
				/>

				{/* <Pagination /> */}
			</div>
		</div>
	);
};

export default Areas;
