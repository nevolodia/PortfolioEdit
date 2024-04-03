import "../styles/pe-link.css";

interface PeLinkProps {
	href: string;
	horizontalSize?: "wide" | "normal";
	noStyling?: boolean;
	children?: React.ReactNode;
}

const PeLink = (props: PeLinkProps) => {
	let linkClass = props.noStyling ? "" : "pe-link-styling ";

	let horizontalSizeClassName = "";
	if (!props.noStyling) {
		switch (props.horizontalSize) {
			case "wide":
				horizontalSizeClassName = "pe-link-horizontal-size-wide";
				break;
		}
	}

	return (
		<a className={"pe-link " + linkClass + horizontalSizeClassName}
		   href={props.href}
		>
			{props.children}
		</a>
	)
};

export default PeLink;