import "../styles/pe-image.css";
import React from "react";
import PeSpacer from "./PeSpacer";

interface PeBlockProps {
	noSpacer?: boolean;
	children?: React.ReactNode;
}

const PeBlock = (props: PeBlockProps) => {

	return (
		<>
			{props.children}
			{!props.noSpacer && <PeSpacer />}
		</>
	)
};

export default PeBlock;