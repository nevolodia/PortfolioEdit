import "../styles/pe-inline.css";
import React from "react";

interface PeInlineProps {
	sameWidth?: boolean;
	children?: React.ReactNode;
}

const PeInline = (props: PeInlineProps) => {
	let sameWidthClassNames = props.sameWidth ? "pe-inline-same-width" : "";

	return (
		<div className={"pe-inline " + sameWidthClassNames}>
			{props.children}
		</div>
	)
};

export default PeInline;