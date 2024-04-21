import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface PageTitleProps {
	title?: string;
	description?: string;
	keywords?: string;
}

const PePageMeta = (props: PageTitleProps) => {
	const location = useLocation();

	useEffect(() => {
		if (props.title) {
			document.title = props.title;
		}
		if (props.description) {
			document.querySelector('meta[name="description"]')
				?.setAttribute('content', props.description);
		}
		if (props.keywords) {
			document.querySelector('meta[name="keywords"]')
				?.setAttribute('content', props.keywords);
		}
	}, [location, props.title, props.description, props.keywords]);

	return null;
};

export default PePageMeta;