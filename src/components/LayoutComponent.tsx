import { Outlet } from "react-router-dom";
import "../styles/layout.css";
import PeLink from "./PeLink";

const LayoutComponent = () => {
	return (
		<div className="layout-base">

			<div className="menu">
				<a className="site-title" href="/">
					Volodia Kiril Bickov
				</a>
				<PeLink href="/login/" horizontalSize="wide">
					My Home
				</PeLink>
				<PeLink href="/login/" horizontalSize="wide">
					My Projects
				</PeLink>
				<PeLink href="/login/" horizontalSize="wide">
					My Blog
				</PeLink>
				<PeLink href="/login/" horizontalSize="wide">
					My Awards
				</PeLink>
			</div>

			<div className="content">
				<Outlet/>
			</div>

			<div className="footer">
				<p>
					© 2024 Grade
				</p>
			</div>

		</div>
	)
};

export default LayoutComponent;