import "../styles/pe-card.css";
import PeTitle from "./PeTitle";

interface PeCardProps {
	title: string;
	subtitle?: string;
	description?: string;
	imageSrc?: string;
	mode?: "horizontal" | "vertical";
}

const PeCard = (props: PeCardProps) => {
	let modeClassName = "";
	switch (props.mode) {
		default:
		case "horizontal":
			modeClassName = "pe-card-horizontal";
			break;
		case "vertical":
			modeClassName = "pe-card-vertical";
			break;
	}

	return (
		<div className={"pe-card " + modeClassName}>

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
						{props.subtitle}
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