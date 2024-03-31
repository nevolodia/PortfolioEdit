import PeText from "./PeText";
import PeLink from "./PeLink";
import "../styles/footer.css";

const Footer = () => {
	return (
		<div className="footer">

			<div className="footer-row">
				<PeText>
					This is part of my project <PeLink href="https://github.com/hackername1/PortfolioEdit">
					PortfolioEdit</PeLink>, which you can and are welcome to use to create your own portfolio!
				</PeText>
				<PeText>
					&copy; Volodia Kiril Bickov
				</PeText>
			</div>

			<div className="footer-row">
				<PeText>
					Find me here: <br/>
					<PeLink href="https://github.com/hackername1">GitHub</PeLink> <br/>
					<PeLink href="https://www.linkedin.com/in/nevolodia/">LinkedIn</PeLink> <br/>
				</PeText>
			</div>

		</div>
	)
}

export default Footer;