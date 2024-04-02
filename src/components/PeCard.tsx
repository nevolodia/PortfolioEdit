import "../styles/pe-card.css";

interface PeCardProps {
	title: string;
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
				<h3 className="pe-card-title">
					{props.title}
				</h3>
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