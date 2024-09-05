import { TranslationsProps } from "../translations/interface";
import { useGlobalContext } from '../contexts/ThemeContext';

const Contact: React.FC<TranslationsProps> = ({ translations }) => {
	const { theme } = useGlobalContext() 
	return (
		<section className={`sections-standar ${theme === 'dark' ? 'dark' : ''}`}>
			<h1 className={`titles ${theme === 'dark' ? 'dark' : ''}`}>{translations.contact}</h1>
			<span>{translations.contactSpan}</span>
			<a href="">gmail</a>
			<a href="">linkedin</a>
			<a href="">instagram</a>
			<a href="">twitter</a>
		</section>
	);
};

export default Contact;
