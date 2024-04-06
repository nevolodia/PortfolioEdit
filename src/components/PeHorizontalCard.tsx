import "../styles/pe-horizontal-card.css";
import PeTitle from "./PeTitle";

interface PeHorizontalCardProps {
	title: string;
	tag?: string;
	description?: string;
	linkHref?: string;
	imageSrc?: string;
	maxWidth?: string;
}

const PeHorizontalCard = (props: PeHorizontalCardProps) => {
	let linkClassName = props.linkHref != null ? "link pe-horizontal-card-link" : "";
	let isImageClass = props.imageSrc != null ? "pe-horizontal-card-image" : "";

	let card = (
		<div className={"pe-horizontal-card " + linkClassName}
		     style={{maxWidth: props.maxWidth? props.maxWidth : "100%"}}
		     onClick={(e) => {
			     if (props.linkHref) {
				     window.open(props.linkHref, "_blank");
			     }
		     }}
		>
			{props.imageSrc && (
				<img className="pe-horizontal-card-image"
				     src={props.imageSrc}
				     alt={props.title}
				/>
			)}

			<div className={"pe-horizontal-card-content " + isImageClass}>
				<div className="pe-horizontal-card-content-top">
					<PeTitle size={2} weight="normal" bottomMargin="no-margin">
						{props.title}
					</PeTitle>
					<h6 className="pe-horizontal-card-subtitle">
						{props.tag}
					</h6>
				</div>
				{props.description && (
					<p className="pe-horizontal-card-description">
						{props.description}
					</p>
				)}
			</div>

		</div>
	);

	return (card);
};

export default PeHorizontalCard;