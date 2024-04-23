import React from "react";
import PeText from "../components/PeText";
import PeWarp from "../components/PeWarp";
import PeLink from "../components/PeLink";
import PeTitle from "../components/PeTitle";
import PeImage from "../components/PeImage";
import PeBlock from "../components/PeBlock";
import PeGallery from "../components/PeGallery";
import PeVerticalCard from "../components/PeVerticalCard";
import diplomaEconOpen24 from "../assets/images/diploma_econ_open_24.jpg";
import diplomaEconOpen24Small from "../assets/images/diploma_econ_open_24_small.jpg";
import diplomaEconLv23 from "../assets/images/diploma_econ_lv_23.jpg";
import diplomaEconLv23Small from "../assets/images/diploma_econ_lv_23_small.jpg";
import diplomaEconLv24 from "../assets/images/diploma_econ_lv_24.jpg";
import diplomaEconLv24Small from "../assets/images/diploma_econ_lv_24_small.jpg";
import diplomaEconRiga23 from "../assets/images/diploma_econ_riga_23.jpg";
import diplomaEconRiga23Small from "../assets/images/diploma_econ_riga_23_small.jpg";
import diplomaRu24 from "../assets/images/diploma_ru_24.jpg";
import diplomaRu24Small from "../assets/images/diploma_ru_24_small.jpg";
import meingermany from "../assets/images/meingermany.jpg";
import meingermanySmall from "../assets/images/meingermany_small.jpg";
import meandpanda from "../assets/images/meandpanda.jpg";

const MyHomePage: React.FC = () => {
	return (
		<>
			<PeBlock>
				<PeTitle>
					Hello, world! <br/>
					I'm Volodia Kiril Bickov!
				</PeTitle>

				<PeVerticalCard title="Volodia Kiril Bickov"
				        tag="Short"
				        description="Future student at Tu Delft.
				        I like Golang, C# and React, am interested in AI.
				        Working on this very project you see (more info on My Projects page)."
				        imageSrc={meandpanda}/>

				<PeText>
					Since early childhood I have been interested in computer science.
					From that time I have been working and felt in love with <PeWarp>Golang</PeWarp>, <PeWarp>
					C#</PeWarp> and <PeWarp>React</PeWarp>.
				</PeText>

				<PeImage src={meingermanySmall}
				         srcBig={meingermany}
				         alt="meme gif"
				         caption="Me in Germany, 2022."
				         maxWidth="330px" />
			</PeBlock>

			<PeBlock>
				<PeTitle size="small">Education.</PeTitle>

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
				<PeTitle size="small">Work and Projects.</PeTitle>

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
				<PeTitle size="small">Awards.</PeTitle>

				<PeText>
					I have won <PeWarp>1st place</PeWarp> in <PeWarp>Latvian Open Olympiad in Economics</PeWarp>
					in 2024, <PeWarp>2nd place</PeWarp> in <PeWarp>Latvian State Olympiad in Economics</PeWarp> in both
					2023 and 2024.
					Furthermore, I have won several other awards, all of which are shown below.
				</PeText>

				<PeWarp backgroundColor="light">
					<PeGallery columns={3}>
						<PeImage src={diplomaEconLv24Small}
						         srcBig={diplomaEconLv24}
						         alt="2024 year economics diploma" />
						<PeImage src={diplomaEconOpen24Small}
						         srcBig={diplomaEconOpen24}
						         alt="2024 year open economics diploma" />
						<PeImage src={diplomaRu24Small}
						         srcBig={diplomaRu24}
						         alt="202r year russian language diploma" />
						<PeImage src={diplomaEconRiga23Small}
						         srcBig={diplomaEconRiga23}
						         alt="2023 year economics riga diploma" />
						<PeImage src={diplomaEconLv23Small}
						         srcBig={diplomaEconLv23}
						         alt="2023 year economics diploma" />
					</PeGallery>
				</PeWarp>
			</PeBlock>
		</>
	);
}

export default MyHomePage;
