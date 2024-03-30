import React from "react";
import PeTitle from "../components/PeTitle";
import PeImage from "../components/PeImage";
import the404gif from "../assets/images/404.gif";
import the404gif_big from "../assets/images/404-big.gif";
import PeText from "../components/PeText";
import PeWarp from "../components/PeWarp";
import PeLink from "../components/PeLink";

const The404Page: React.FC = () => {
	return (
		<>
			<PeTitle>
				Not found... Maybe in another <PeWarp horizontalSize="wide">Multiverse</PeWarp> ?
			</PeTitle>

			<PeImage src={the404gif}
			         srcBig={the404gif_big}
			         alt="404 page gif"
			         style="round"
			/>

			<PeText>
				We're sorry, but the <PeLink href="a">page</PeLink> you're looking for is not here.
			</PeText>

			<PeText>
				We're sorry, but the page you're <PeWarp>looking</PeWarp> for is not here.
			</PeText>

			<PeWarp>
				<PeImage src={the404gif}
				         srcBig={the404gif_big}
				         alt="404 page gif"
				/>
			</PeWarp>
		</>
	);
}

export default The404Page;
