import React from "react";
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import "../styles/pe-image.css";
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