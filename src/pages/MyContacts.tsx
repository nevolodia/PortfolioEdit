import React from "react";
import PeLogo from "../components/PeLogo";
import PeTitle from "../components/PeTitle";
import PeVideo from "../components/PeVideo";
import PeInline from "../components/PeInline";
import githublogo from "../assets/images/github-logo.png";
import linkedinlogo from "../assets/images/linkedin-logo.png";
import emailicon from "../assets/images/email-icon.png";
import buymeacoffee from "../assets/images/buymeacoffe.png";
import PePageMeta from "../components/PePageMeta";

const MyContactsPage: React.FC = () => {
	return (
		<>
			<PePageMeta title="My contacts" />

			<PeTitle>
				Find me here.
			</PeTitle>

			<PeInline>
				<PeLogo imageSrc={githublogo}
				        alt="GitHub logo"
				        href="https://github.com/hackername1" />
				<PeLogo imageSrc={linkedinlogo}
				        alt="Linkedin logo"
				        href="https://www.linkedin.com/in/nevolodia/" />
				<PeLogo imageSrc={emailicon}
				        alt="Email me"
				        href="mailto:%20bolodiab3007@gmail.com" />
				<PeLogo imageSrc={buymeacoffee}
				        alt="Email me"
				        href="https://www.buymeacoffee.com/nevolodia" />
			</PeInline>

			<PeVideo src="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
			         provider="youtube"/>
		</>
	);
}

export default MyContactsPage;
