import "../styles/pe-spacer.css";

interface PeSpacerProps {
	height?: 1 | 2;
}

const PeSpacer = (props: PeSpacerProps) => {
	let heightClass = "";
	switch (props.height) {
		default:
		case 1:
			heightClass = "pe-spacer-normal";
			break;
		case 2:
			heightClass = "pe-spacer-tall";
			break;
	}

	return (
		<div className={"pe-spacer " + heightClass} />
	)
};

export default PeSpacer;