import React from "react";
import PeTitle from "../components/PeTitle";
import PeImage from "../components/PeImage";
import the404gif from "../assets/images/404.gif";
import the404gif_big from "../assets/images/404-big.gif";
import PeWarp from "../components/PeWarp";
import PeSpacer from "../components/PeSpacer";

const The404Page: React.FC = () => {
	return (
		<>
			<PeTitle>
				Not found here... <br />
				Maybe in another <PeWarp horizontalSize="wide">Multiverse</PeWarp> ?
			</PeTitle>

			<PeSpacer height="small" />

			<PeImage src={the404gif}
			         srcBig={the404gif_big}
			         alt="404 page gif"
			/>
		</>
	);
}

export default The404Page;
