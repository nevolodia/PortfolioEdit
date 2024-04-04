import "../styles/pe-gallery.css";
import React from "react";

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

	let childrenCount = React.Children.count(props.children);
	const wrapChildrenWithDiv = (children: React.ReactNode, index: number) => {
		let noMargin = false;
		let noMarginMobile = false;

		switch (props.columns) {
			default:
			case 2:
				if ((index === childrenCount - 1) && (childrenCount >= 3)) {
					noMargin = true;
					noMarginMobile = true;
				} else if ((index === childrenCount - 2) && (childrenCount >= 4)) {
					noMargin = true
				}
				break;
			case 3:
				if (index === childrenCount - 1) {
					noMargin = true;
					noMarginMobile = true;
				} else if ((index === childrenCount - 2) && (childrenCount >= 5)) {
					noMargin = true;
				} else if ((index === childrenCount - 3) && (childrenCount >= 6)) {
					noMargin = true;
				}

				if ((index === childrenCount - 2) && (childrenCount >= 4)) {
					noMarginMobile = true;
				}
				break;
		}

		let noMarginClassName = noMargin ? "pe-gallery-item-no-margin" : "";
		let noMarginMobileClassName = noMarginMobile ? "pe-gallery-item-no-margin-mobile" : "";

		return (
			<div className={"pe-gallery-item " + noMarginClassName + " " + noMarginMobileClassName}
				 key={index} >
				{children}
			</div>
		);
	};

	let wrappedChildren: React.ReactNode[] = [];
	if (props.children) {
		React.Children.toArray(props.children).map((child: React.ReactNode, index: number) => {
			wrappedChildren.push(wrapChildrenWithDiv(child, index));
		});
	}

	return (
		<div className={"pe-gallery " + columnsClassName}>
			{wrappedChildren}
		</div>
	)
};

export default PeGallery;