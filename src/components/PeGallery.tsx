import "../styles/pe-link.css";

interface PeGalleryProps {
	children?: React.ReactNode;
}

const PeGallery = (props: PeGalleryProps) => {
	return (
		<div className="pe-gallery">
			{props.children}
		</div>
	)
};

export default PeGallery;