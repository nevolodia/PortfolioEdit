import React from "react";
import PeTitle from "../components/PeTitle";
import PeInline from "../components/PeInline";
import PeVerticalCard from "../components/PeVerticalCard";
import PeHorizontalCard from "../components/PeHorizontalCard";
import hackermangif from "../assets/images/hackerman.gif";
import binatec from "../assets/images/binatec01.jpg";

const MyProjectsPage: React.FC = () => {
	return (
		<>
			<PeTitle bottomMargin="large">
				Under construction... <br/>
				More projects to come!
			</PeTitle>

			<PeInline sameWidth warp warpAfter={768}>

				<PeHorizontalCard title="PortfolioEdit"
				                  tag="In development"
				                  description="This very project you see. Made with React and TypeScript.
			                  Here is used as my portfolio, but can and wellcome to be used as portfolio for anyone!"
				                  imageSrc={hackermangif}
				                  linkHref="https://github.com/hackername1/PortfolioEdit"
				                  maxWidth="400px"
				/>
				<PeHorizontalCard title="Binatec"
				                  tag="In development"
				                  description="Baltic shop with revolutionary household chemistry products which are
				                  based on biological components. Website made with WordPress and WooCommerce."
				                  imageSrc={binatec}
				                  linkHref="https://binatec.eu/"
				                  maxWidth="400px"
				/>

			</PeInline>

			<PeVerticalCard title="Google Fonts Auto Downloader"
			                tag="In development"
			                description="I am currently developing a tool that will enable users to download .woff2
			                Google Font files (currently, Google Fonts only allows downloading only .ttf files)."
			                />
		</>
	);
}

export default MyProjectsPage;
