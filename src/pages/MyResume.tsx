import React from "react";
import PeTitle from "../components/PeTitle";
import PeImage from "../components/PeImage";
import PeSpacer from "../components/PeSpacer";
import cvimage from "../assets/images/cv1.jpg";

const MyResumePage: React.FC = () => {
	return (
		<>
			<PeTitle>
				This is my resume.
			</PeTitle>

			<PeSpacer height="small" />

			<PeImage src={cvimage}
			         alt="404 page gif"
			/>
		</>
	);
}

export default MyResumePage;
