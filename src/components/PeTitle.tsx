import "../styles/pe-title.css";

interface PeTitleProps {
	size?: 1 | 2 | 3;
	weight?: "bold" | "normal" | "light";
	children?: React.ReactNode;
}

const PeTitle = (props: PeTitleProps) => {
	let sizeClass = "";
	switch (props.size) {
		default:
		case 1:
			sizeClass = "pe-title-1";
			break;
		case 2:
			sizeClass = "pe-title-2";
			break;
		case 3:
			sizeClass = "pe-title-3";
			break;
	}

	let weightClass = "";
	switch (props.weight) {
		default:
		case "bold":
			weightClass = "pe-title-bold";
			break;
		case "normal":
			weightClass = "pe-title-normal";
			break;
		case "light":
			weightClass = "pe-title-light";
			break;
	}

	return (
		<h1 className={"pe-title " + sizeClass + " " + weightClass}>
			{props.children}
		</h1>
	)
};

export default PeTitle;