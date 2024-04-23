import "../styles/pe-title.css";
import React from "react";

interface PeTitleProps {
	size?: "normal" | "small" | "smaller";
	weight?: "bold" | "normal" | "light";
	noBottomMargin?: boolean;
	children?: React.ReactNode;
}

const PeTitle = (props: PeTitleProps) => {
	let sizeClass = "";
	switch (props.size) {
		default:
		case "normal":
			sizeClass = "pe-title-size-normal";
			break;
		case "small":
			sizeClass = "pe-title-size-small";
			break;
		case "smaller":
			sizeClass = "pe-title-size-smaller";
			break;
	}

	let weightClass = "";
	switch (props.weight) {
		default:
		case "bold":
			weightClass = "pe-title-weight-bold";
			break;
		case "normal":
			weightClass = "pe-title-weight-normal";
			break;
		case "light":
			weightClass = "pe-title-weight-light";
			break;
	}

	let noBottomMarginClass = props.noBottomMargin ? "pe-title-no-bottom-margin" : "";

	return (
		<h1 className={"pe-title " + sizeClass + " " + weightClass + " " + noBottomMarginClass}>
			{props.children}
		</h1>
	)
};

export default PeTitle;