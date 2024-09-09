import { TranslationsProps } from "../translations/interface";
import { useGlobalContext } from '../contexts/ThemeContext';

const Contact: React.FC<TranslationsProps> = ({ translations }) => {
	const { theme } = useGlobalContext() 
	return (
		<section className={`sections-standar ${theme === 'dark' ? 'dark' : ''}`}>
			<h1 className={`titles ${theme === 'dark' ? 'dark' : ''}`}>{translations.contact}</h1>
			<span>{translations.contactSpan}</span>
			<div className="horizontal-section">
			<a href="mailto:adharanosalevich@gmail.com">
				<img className="icon-img" src="https://www.svgrepo.com/show/452213/gmail.svg" alt="gmail" />
			</a>
			<a href="">
				<img className="icon-img" src="https://www.svgrepo.com/show/448234/linkedin.svg" alt="linkedin" />
			</a>
			<a href="">
				<img className="icon-img" src="https://www.svgrepo.com/show/452229/instagram-1.svg" alt="instagram" />
			</a>
			<a href="">
				<img className="icon-img" src="https://www.svgrepo.com/show/452123/twitter.svg" alt="x.com" />
			</a>
			</div>
		</section>
	);
};

export default Contact;
