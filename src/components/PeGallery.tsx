import React from "react";
import "../styles/pe-gallery.css";

interface PeGalleryProps {
	columns?: 2 | 3;
	children?: React.ReactNode;
}

const PeGallery = (props: PeGalleryProps) => {
	let columnsClassName = "";
	switch (props.columns) {
		default:
		case 2:
			columnsClassName = "pe-gallery-2";
			break;
		case 3:
			columnsClassName = "pe-gallery-3";
			break;
	}

	const wrapChildrenWithDiv = (children: React.ReactNode) => {
		return React.Children.map(children, (child, index) => (
			<div key={index} className="pe-gallery-item">
				{child}
			</div>
		));
	};

	const wrappedChildren = props.children ? wrapChildrenWithDiv(props.children) : null;

	return (
		<div className={"pe-gallery " + columnsClassName}>
			{wrappedChildren}
		</div>
	)
};

export default PeGallery;