import React, {useRef} from "react";
import "../styles/pe-video.css";
import Plyr, {APITypes} from "plyr-react";
import "plyr-react/plyr.css";

interface PeVideoProps {
	src: string;
	provider?: Plyr.Provider;
}

const PeVideo = (props: PeVideoProps) => {
	let controls = window.innerWidth >= 576 ?
		[ "play", "progress", "current-time", "mute", "volume", "settings", "fullscreen" ] :
		[ "play", "progress", "current-time", "settings", "fullscreen", ];

	let plyrProvider = props.provider ? props.provider : "html5";

	const ref = useRef<APITypes>(null);
	const plyrVideo =
		props.src ? (
			<Plyr
				ref={ref}
				source={{
					type: "video",
					sources: [
						{
							provider: plyrProvider,
							src: props.src,
						},
					]
				}}
				options={
					{
						controls: controls,
						settings: [
							"quality",
							"speed",
						],
						speed: {
							selected: 1,
							options: [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2],
						},
					}
				}
			/>
		) : null;

	return (
		<div className="pe-video">
			{plyrVideo}
		</div>
	);
}

export default PeVideo;