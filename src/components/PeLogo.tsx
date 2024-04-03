import React from "react";
import PeWarp from "./PeWarp";
import PeImage from "./PeImage";
import PeLink from "./PeLink";
import PeSpacer from "./PeSpacer";
import "../styles/pe_logo.css";

interface PeLogoProps {
	imageSrc: string;
	alt?: string;
	href?: string;
}

const PeLogo = (props: PeLogoProps) => {
	let element = (
		<PeWarp objectPadding="small">
			<PeImage src={props.imageSrc}
			         alt={props.alt}
			         maxWidth="var(--pe-logo-height)"
			         noZoom />
		</PeWarp>
	);

	if (props.href) {
		element = (
			<PeLink href={props.href}
			        noStyling >
				{element}
			</PeLink>
		);
	}

	return (
		<>
			{element}
			<PeSpacer height="small" />
		</>
	);
};

export default PeLogo;