import React from "react";
import PeWarp from "../components/PeWarp";
import PeCode from "../components/PeCode";
import PeTitle from "../components/PeTitle";
import PeImage from "../components/PeImage";
import PeSpacer from "../components/PeSpacer";
import the404gif from "../assets/images/404.gif";
import the404gif_big from "../assets/images/404-big.gif";

const The404Page: React.FC = () => {
	return (
		<>
			<PeTitle>
				Not found here... <br />
				Maybe in another <PeWarp textHorizontalSize="wide">Multiverse</PeWarp> ?
			</PeTitle>

			<PeSpacer height="small" />

			<PeCode>
				{`print("Error 404: Page not found")`}
			</PeCode>

			<PeImage src={the404gif}
			         srcBig={the404gif_big}
			         alt="404 page gif"
			/>
		</>
	);
}

export default The404Page;
