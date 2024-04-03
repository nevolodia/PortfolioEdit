import "../styles/pe-vertical-card.css";
import PeTitle from "./PeTitle";
import PeLink from "./PeLink";

interface PeVerticalCardProps {
	title: string;
	tag?: string;
	description?: string;
	linkHref?: string;
	imageSrc?: string;
}

const PeVerticalCard = (props: PeVerticalCardProps) => {
	let linkClassName = props.linkHref != null ? "pe-vertical-card-link" : "";

	let card = (
		<div className={"pe-vertical-card " + linkClassName}>

			{props.imageSrc && (
				<img className="pe-vertical-card-image"
				     src={props.imageSrc}
				     alt={props.title}
				/>
			)}

			<div className="pe-vertical-card-content">
				<div className="pe-vertical-card-content-top">
					<PeTitle size={2} weight="normal" bottomMargin="no-margin">
						{props.title}
					</PeTitle>
					<h6 className="pe-vertical-card-subtitle">
						{props.tag}
					</h6>
				</div>
				{props.description && (
					<p className="pe-vertical-card-description">
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

export default PeVerticalCard;