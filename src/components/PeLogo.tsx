import "../styles/pe_logo.css";
import React from "react";
import PeImage from "./PeImage";
import PeLink from "./PeLink";

interface PeLogoProps {
	imageSrc: string;
	alt?: string;
	href?: string;
}

const PeLogo = (props: PeLogoProps) => {
	let element = (
		<PeImage src={props.imageSrc}
		         alt={props.alt}
		         maxHeight="var(--pe-logo-height)"
		         noZoom />
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
		<div className="pe-logo">
			{element}
		</div>
	);
};

export default PeLogo;