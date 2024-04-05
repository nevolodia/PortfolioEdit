import "../styles/pe-code-warp.css";
import React from "react";

interface PeCodeWarpProps {
	children?: React.ReactNode;
}

const PeCodeWarp = (props: PeCodeWarpProps) => {
	return (
		<span className="pe-code-warp">
			{props.children}
		</span>
	)
};

export default PeCodeWarp;