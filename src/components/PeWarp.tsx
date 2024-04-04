import "../styles/pe-warp.css";
import React from "react";

interface PeTextProps {
	backgroundColor?: "normal" | "light";
	textHorizontalSize?: "wide" | "normal";
	objectPadding?: "small" | "normal";
	children?: React.ReactNode;
}

const PeWarp = (props: PeTextProps) => {
	let warpClass = "";
	switch (typeof props.children) {
		case "string":
			warpClass = "pe-warp-text";
			break;
		case "object":
			warpClass = "pe-warp-object";
			break;
	}

	let textHorizontalSizeClassName = "";
	switch (props.textHorizontalSize) {
		default:
		case "normal":
			textHorizontalSizeClassName = "pe-warp-horizontal-size-normal";
			break;
		case "wide":
			textHorizontalSizeClassName = "pe-warp-horizontal-size-wide";
			break;
	}

	let colorClass = "";
	switch (props.backgroundColor) {
		default:
		case "normal":
			colorClass = "pe-warp-background-color-normal";
			break;
		case "light":
			colorClass = "pe-warp-background-color-light";
			break;
	}

	let objectPaddingClassName = "";
	switch (props.objectPadding) {
		case "small":
			objectPaddingClassName = "pe-warp-object-padding-small";
			break;
		default:
		case "normal":
			objectPaddingClassName = "pe-warp-object-padding-normal";
			break;
	}

	return (
		<span className={"pe-warp " + warpClass + " " + textHorizontalSizeClassName + " " + colorClass + " " + objectPaddingClassName}>
			{props.children}
		</span>
	)
};

export default PeWarp;