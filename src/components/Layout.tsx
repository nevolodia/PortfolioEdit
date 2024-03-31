import React from "react";
import { Outlet } from "react-router-dom";
import PeLink from "./PeLink";
import Footer from "./Footer";
import "../styles/layout.css";

const Layout = () => {
	return (
		<div className="layout-base">

			<div className="page-top">
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
			</div>

			<Footer />
		</div>
	)
};

export default Layout;