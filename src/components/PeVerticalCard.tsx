import "../styles/pe-card.css";
import PeTitle from "./PeTitle";

interface PeVerticalCardProps {
	title: string;
	tag?: string;
	description?: string;
	imageSrc?: string;
}

const PeVerticalCard = (props: PeVerticalCardProps) => {
	return (
		<div className="pe-vertical-card">

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
	)
};

export default PeVerticalCard;