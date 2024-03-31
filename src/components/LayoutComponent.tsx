import { Outlet } from "react-router-dom";
import "../styles/layout.css";
import PeLink from "./PeLink";
import React from "react";
import Footer from "./Footer";

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

			<Footer />
		</div>
	)
};

export default LayoutComponent;