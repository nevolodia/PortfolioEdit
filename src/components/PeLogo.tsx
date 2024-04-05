import "../styles/pe-logo.css";
import React from "react";
import PeImage from "./PeImage";

interface PeLogoProps {
	imageSrc: string;
	alt?: string;
	href?: string;
}

const PeLogo = (props: PeLogoProps) => {
	let linkClassName = props.href != null ? "link" : "";

	let element = (
		<PeImage src={props.imageSrc}
		         alt={props.alt}
		         maxHeight="var(--pe-logo-height)"
		         noZoom />
	);

	return (
		<div className={"pe-logo " + linkClassName}
			 onClick={(e) => {
				 if (props.href) {
					 window.open(props.href, "_blank");
				 }
			 }}
		>
			{element}
		</div>
	);
};

export default PeLogo;