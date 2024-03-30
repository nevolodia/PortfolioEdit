import "../styles/pe-link.css";

interface PeLinkProps {
	href: string;
	horizontalSize?: "wide" | "normal";
	children?: React.ReactNode;
}

const PeLink = (props: PeLinkProps) => {
	let horizontalSizeClass = "";
	switch (props.horizontalSize) {
		case "wide":
			horizontalSizeClass = "pe-link-horizontal-size-wide";
			break;
	}

	return (
		<a className={"pe-link " + horizontalSizeClass}
		   href={props.href}
		>
			{props.children}
		</a>
	)
};

export default PeLink;