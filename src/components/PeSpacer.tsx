import "../styles/pe-spacer.css";

interface PeSpacerProps {
	height?: "small" | "normal" | "tall";
}

const PeSpacer = (props: PeSpacerProps) => {
	let heightClass = "";
	switch (props.height) {
		case "small":
			heightClass = "pe-spacer-small";
			break;
		default:
		case "normal":
			heightClass = "pe-spacer-normal";
			break;
		case "tall":
			heightClass = "pe-spacer-tall";
			break;
	}

	return (
		<div className={"pe-spacer " + heightClass} />
	)
};

export default PeSpacer;