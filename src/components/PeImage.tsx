import "../styles/pe-image.css";
import React from "react";
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

interface PeImageProps {
	src: string;
	srcBig?: string;
	alt?: string;
	caption?: string;
	maxWidth?: string;
	maxHeight?: string;
	rounded?: boolean;
	noZoom?: boolean;
	children?: React.ReactNode;
}

const PeImage = (props: PeImageProps) => {
	const [margin, setMargin] = React.useState(0);
	const [aspectRatio, setAspectRatio] = React.useState<number | undefined>(undefined);

	// Calculate aspect ratio function
	const img = new Image();
	img.src = props.src;
	img.onload = () => {
		const ratio = img.width / img.height;
		setAspectRatio(ratio);
	};

	// Change on screen resize
	React.useEffect(() => {
		const handleResize = () => {
			setMargin(window.innerWidth > 720 ? 25 : 0);
		};
		window.addEventListener('resize', handleResize);
		handleResize();
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	let roundedClass = props.rounded ? "pe-image-rounded" : "";

	let imageContent = (
		<figure>
			<img
				className={"pe-image " + roundedClass}
				src={props.src}
				alt={props.alt}
			/>
			<figcaption>{props.caption}</figcaption>
		</figure>
	);

	return (
		<div
			className="pe-image-container"
			style={{
				maxWidth: props.maxWidth ? "min(calc(100vw - 2*var(--padding-y)), " + props.maxWidth + ")" :
					"auto",
				maxHeight: props.maxHeight ? props.maxHeight : "auto",
				aspectRatio: aspectRatio !== undefined ? aspectRatio : 'auto',
		}}
		>
			{props.noZoom ? imageContent :
				<Zoom
					ZoomContent={({img}) => (
						<div>
							{img}
						</div>
					)}
					zoomImg={{
						src: props.srcBig ? props.srcBig : props.src,
					}}
					zoomMargin={margin}
				>
					{imageContent}
				</Zoom>
			}
		</div>
	)
};

export default PeImage;