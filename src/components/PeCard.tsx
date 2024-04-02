import "../styles/pe-card.css";
import PeTitle from "./PeTitle";

interface PeCardProps {
	title: string;
	tag?: string;
	description?: string;
	imageSrc?: string;
}

const PeCard = (props: PeCardProps) => {
	return (
		<div className="pe-card pe-card-vertical">

			{props.imageSrc && (
				<img className="pe-card-image"
				     src={props.imageSrc}
				     alt={props.title}
				/>
			)}

			<div className="pe-card-content">
				<div className="pe-card-content-top">
					<PeTitle size={2} weight="normal" noBottomMargin>
						{props.title}
					</PeTitle>
					<h6 className="pe-card-subtitle">
						{props.tag}
					</h6>
				</div>
				{props.description && (
					<p className="pe-card-description">
						{props.description}
					</p>
				)}
			</div>

		</div>
	)
};

export default PeCard;