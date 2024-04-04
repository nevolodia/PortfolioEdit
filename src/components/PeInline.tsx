import "../styles/pe-inline.css";

interface PeInlineProps {
	children?: React.ReactNode;
}

const PeInline = (props: PeInlineProps) => {
	return (
		<div className="pe-inline">
			{props.children}
		</div>
	)
};

export default PeInline;