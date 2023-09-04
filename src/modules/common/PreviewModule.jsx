import { Link } from "react-router-dom";

const PreviewModule = ({ title, imgSrc, color, url }) => {
	return (
		<div
			className={`bg-gradient-to-t  ${color} mx-10 rounded-2xl h-36 my-2 flex`}
		>
			<Link
				to={url}
				className="text-white text-2xl font-bold my-3 place-self-end pl-5 w-5/12 hover:underline"
			>
				{title}
			</Link>
			<img
				alt=""
				src={imgSrc}
				className="place-self-center items-end w-5/12 h-auto ml-5"
			/>
		</div>
	);
};

export default PreviewModule;
