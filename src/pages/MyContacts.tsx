import React from "react";
import PeTitle from "../components/PeTitle";
import PeSpacer from "../components/PeSpacer";
import PeWarp from "../components/PeWarp";
import PeLink from "../components/PeLink";
import PeText from "../components/PeText";
import PeVideo from "../components/PeVideo";

const MyContactsPage: React.FC = () => {
	return (
		<>
			<PeTitle>
				Find me here.
			</PeTitle>

			<PeSpacer height="small" />

			<PeWarp>
				<PeText>
					Find me here: <br/>
					<PeLink href="https://github.com/hackername1">GitHub</PeLink> <br/>
					<PeLink href="https://www.linkedin.com/in/nevolodia/">LinkedIn</PeLink> <br/>
					<PeLink href="mailto: bolodiab3007@gmail.com">bolodiab3007@gmail.com</PeLink> <br/>
				</PeText>
			</PeWarp>

			<PeSpacer height="small" />

			<PeVideo src="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
			         provider="youtube" />
		</>
	);
}

export default MyContactsPage;
