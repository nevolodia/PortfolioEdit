import "../styles/pe-horizontal-card.css";
import PeTitle from "./PeTitle";
import PeLink from "./PeLink";

interface PeHorizontalCardProps {
	title: string;
	tag?: string;
	description?: string;
	linkHref?: string;
	imageSrc?: string;
}

const PeHorizontalCard = (props: PeHorizontalCardProps) => {
	let linkClassName = props.linkHref != null ? "pe-horizontal-card-link" : "";

	let card = (
		<div className={"pe-horizontal-card " + linkClassName}>

			{props.imageSrc && (
				<img className="pe-horizontal-card-image"
				     src={props.imageSrc}
				     alt={props.title}
				/>
			)}

			<div className="pe-horizontal-card-content">
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

	if (props.linkHref) {
		card = (
			<PeLink noStyling href={props.linkHref}>
				{card}
			</PeLink>
		)
	}

	return (card);
};

export default PeHorizontalCard;