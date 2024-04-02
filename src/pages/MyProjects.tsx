import React from "react";
import PeTitle from "../components/PeTitle";
import PeImage from "../components/PeImage";
import PeVerticalCard from "../components/PeVerticalCard";
import hackermangif from "../assets/images/hackerman.gif";

const MyProjectsPage: React.FC = () => {
	return (
		<>
			<PeTitle bottomMargin="large">
				Under construction... <br/>
				More projects to come!
			</PeTitle>

			<PeVerticalCard title="PortfolioEdit"
			                tag="In development"
			                description="This very project you see. Made with React and TypeScript.
			                Here is used as my portfolio, but can and wellcome to be used as portfolio for anyone!"
			                linkHref="https://github.com/hackername1/PortfolioEdit"
			/>

			<PeImage src={hackermangif}
			         alt="meme gif"
			/>
		</>
	);
}

export default MyProjectsPage;
