import "../styles/pe-inline.css";
import React from "react";

interface PeInlineProps {
	sameWidth?: boolean;
	noWarp?: boolean;
	children?: React.ReactNode;
}

const PeInline = (props: PeInlineProps) => {
	let sameWidthClassNames = props.sameWidth ? "pe-inline-same-width" : "";
	let noWarpClassNames = props.noWarp ? "pe-inline-no-warp" : "";

	return (
		<div className={"pe-inline " + sameWidthClassNames + " " + noWarpClassNames}>
			{props.children}
		</div>
	)
};

export default PeInline;