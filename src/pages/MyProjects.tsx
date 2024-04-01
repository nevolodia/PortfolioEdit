import React from "react";
import PeTitle from "../components/PeTitle";
import PeImage from "../components/PeImage";
import hackermangif from "../assets/images/hackerman.gif";
import PeSpacer from "../components/PeSpacer";

const MyProjectsPage: React.FC = () => {
	return (
		<>
			<PeTitle>
				Under construction...
			</PeTitle>

			<PeSpacer height="small" />

			<PeImage src={hackermangif}
			         alt="meme gif"
			/>
		</>
	);
}

export default MyProjectsPage;
