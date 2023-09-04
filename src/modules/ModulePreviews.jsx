import React from "react";
import { previews } from "../utils/previews";
import PreviewModule from "./common/PreviewModule";

const ModulePreviews= () => {
	return (
		<div className="grid grid-cols-2 my-10">
			{previews.map((preview) => (
				<PreviewModule
					title={preview.title}
					imgSrc={preview.imgSrc}
					color={preview.color}
					key={preview.title}
				/>
			))}
		</div>
	);
};

export default ModulePreviews;
