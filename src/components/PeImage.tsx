import React from "react";
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import "../styles/pe-image.css";

interface PeImageProps {
	src: string;
	srcBig?: string;
	caption?: string;
	alt?: string;
	width?: string;
	rounded?: boolean;
	children?: React.ReactNode;
}

const PeImage = (props: PeImageProps) => {
	const [margin, setMargin] = React.useState(0);

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

	return (
		<div className="pe-image-container">
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
				<img
					className={"pe-image " + roundedClass}
					src={props.src}
					style={{width: props.width}}
					alt={props.alt}
				/>
			</Zoom>
		</div>
	)
};

export default PeImage;