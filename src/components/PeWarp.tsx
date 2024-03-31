import "../styles/pe-warp.css";

interface PeTextProps {
	horizontalSize?: "wide" | "normal";
	style?: "normal" | "bright";
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

	let paddingClass = "";
	switch (props.horizontalSize) {
		case "wide":
			paddingClass = "pe-warp-horizontal-size-wide";
			break;
	}

	let colorClass = "";
	switch (props.style) {
		case "bright":
			colorClass = "pe-warp-color-bright";
			break;
	}

	return (
		<span className={"pe-warp " + warpClass + " " + paddingClass + " " + colorClass}>
			{props.children}
		</span>
	)
};

export default PeWarp;