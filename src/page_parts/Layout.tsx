import "../styles/layout.css";
import React from "react";
import {Outlet} from "react-router-dom";
import Footer from "./Footer";
import PeLink from "../components/PeLink";

const Layout = () => {
	return (
		<div className="layout-base">
			<div className="menu">
				<a className="site-title" href="/">
					Volodia Kiril Bickov
				</a>
				<PeLink href="/" horizontalSize="wide">
					My Home
				</PeLink>
				<PeLink href="/projects/" horizontalSize="wide">
					My Projects
				</PeLink>
				<PeLink href="/resume/" horizontalSize="wide">
					My Resume
				</PeLink>
				<PeLink href="/contacts/" horizontalSize="wide">
					My Contacts
				</PeLink>
			</div>

			<div className="content">
				<Outlet/>
			</div>

			<Footer />
		</div>
	)
};

export default Layout;