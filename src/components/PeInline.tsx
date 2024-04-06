import "../styles/pe-inline.css";
import React, {useState} from "react";

interface PeInlineProps {
	sameWidth?: boolean;
	warp?: boolean;
	warpAfter?: number;
	children?: React.ReactNode;
}

const PeInline = (props: PeInlineProps) => {
	let sameWidthClassName = props.sameWidth ? "pe-inline-same-width" : "";
	const [noWarpClassName, setNoWarpClassName] = useState<string>("");

	// on resize
	function updateNoWarpClassName() {
		if (props.warp && window.innerWidth > props.warpAfter!) {
			setNoWarpClassName("pe-inline-no-warp");
		}
		else {
			setNoWarpClassName("");
		}

	}

	props.warp && props.warpAfter && window.addEventListener("resize", updateNoWarpClassName);

	// on mount
	useState(() => {
		updateNoWarpClassName();
	});

	return (
		<div className={"pe-inline " + sameWidthClassName + " " + noWarpClassName}>
			{props.children}
		</div>
	)
};

export default PeInline;