import "../styles/pe-code.css";
import React from "react";
import SimpleBar from "simplebar-react";
import 'simplebar-react/dist/simplebar.min.css';

interface PeCodeProps {
	fileName?: string;
	language?: string;
	children: React.ReactNode;
}

const PeCode = (props: PeCodeProps) => {

	return (
		<div className="pe-code">
			<pre>
				<SimpleBar style={{ maxHeight: "100%", height: "100%", width: "100%"}}
				           autoHide={false}
				>
					<p>
						{props.children}
					</p>
				</SimpleBar>
			</pre>
		</div>
	)
};

export default PeCode;