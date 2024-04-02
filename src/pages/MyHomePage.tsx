import React from "react";
import PeTitle from "../components/PeTitle";
import PeImage from "../components/PeImage";
import PeText from "../components/PeText";
import PeWarp from "../components/PeWarp";
import PeLink from "../components/PeLink";
import PeBlock from "../components/PeBlock";
import PeGallery from "../components/PeGallery";
import PeCard from "../components/PeCard";
import diplomaEconLv23 from "../assets/images/diploma_econ_lv_23.jpg";
import diplomaEconLv24 from "../assets/images/diploma_econ_lv_24.jpg";
import diplomaEconRiga23 from "../assets/images/diploma_econ_riga_23.jpg";
import diplomaRu24 from "../assets/images/diploma_ru_24.jpg";
import meingermanyImage from "../assets/images/meingermany.jpg";
import meandpandaImgae from "../assets/images/meandpanda.jpg";

const MyHomePage: React.FC = () => {
	return (
		<>
			<PeBlock>
				<PeTitle>
					Hello, world! <br/>
					I'm Volodia Kiril Bickov!
				</PeTitle>

				<PeLink noStyling href="https://binatec.eu/">
					<PeCard title="Volodia Kiril Bickov"
					        description="Student at RV1G and future student atudent at Tu Delft.
					        Currently I am working on this very project you see (more info in footer)
					        and want to create completely free and open-source metronome app."
					        imageSrc={meandpandaImgae}
					        mode="vertical" />
				</PeLink>


				<PeText>
					Since early childhood I have been interested in computer science.
					From that time I have been working and felt in love with <PeWarp>Golang</PeWarp>, <PeWarp>
					C#</PeWarp> and <PeWarp>React</PeWarp>.
				</PeText>
				<PeImage src={meingermanyImage}
				         alt="meme gif"
				         caption="Me in Germany, 2022."
				         maxWidth="330px" />
			</PeBlock>

			<PeBlock>
				<PeTitle size={2}>Education.</PeTitle>
				<PeText>
					I am student in <PeLink href="http://r1g.edu.lv/">RV1G</PeLink> and
					future student in <PeLink href="https://www.tudelft.nl/">Tu Delft university</PeLink>,
					where I will study Computer Science and Engineering.
				</PeText>
				<PeText>
					In my future I want to focus on <PeWarp>Machine Learning</PeWarp>.
					Likely, I will try myself in field connected to analysis of <PeWarp>Macroeconomics</PeWarp>.
				</PeText>
			</PeBlock>

			<PeBlock>
				<PeTitle size={2}>Work and Projects.</PeTitle>
				<PeText>
					I have created commerce website <PeLink href="https://binatec.eu/">Binatec.eu
					</PeLink> using <PeWarp>Wordpress</PeWarp> and <PeWarp>Woocommerce</PeWarp>.
				</PeText>
				<PeText>
					My open source contribution includes this very website, which is created using <PeWarp>React
					</PeWarp> and <PeWarp>Typescript</PeWarp> and is publicly available on <PeLink href="github.com/">
					Github repository</PeLink>.
				</PeText>
			</PeBlock>

			<PeBlock noSpacer>
				<PeTitle size={2}>Awards.</PeTitle>
				<PeText>
					I have won <PeWarp>1st place</PeWarp> in <PeWarp>Latvian Open Olympiad in Economics</PeWarp>
					in 2024, <PeWarp>2nd place</PeWarp> in <PeWarp>Latvian State Olympiad in Economics</PeWarp> in both
					2023 and 2024.
					Furthermore, I have won several other awards, all of which are shown below.
				</PeText>
				<PeWarp style="bright">
					<PeGallery columns={3}>
						<PeImage src={diplomaEconLv24} alt="2024 year economics diploma" />
						<PeImage src={diplomaEconRiga23} alt="2023 year economics riga diploma" />
						<PeImage src={diplomaRu24} alt="202r year russian language diploma" />
						<PeImage src={diplomaEconLv23} alt="2023 year economics diploma" />
					</PeGallery>
				</PeWarp>
			</PeBlock>
		</>
	);
}

export default MyHomePage;
