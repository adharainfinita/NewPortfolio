import { TranslationsProps } from "../translations/interface";
import { useGlobalContext } from '../contexts/ThemeContext';
import '../styles/AboutMe.css';
import { useEffect, useState } from "react";

const AboutMe: React.FC<TranslationsProps> = ({translations}) => {
	const { theme } = useGlobalContext();

	const TypingEffect = ({ text }:any) => {
		const [displayedText, setDisplayedText] = useState('');
		const [index, setIndex] = useState(0);
	
		useEffect(() => {
			if(index < text.length){
				const interval = setInterval(() => {
				setDisplayedText((prev) => prev + text[index]);
				setIndex(index+1);
			}, 50); //velocidad del texto
			return () => clearInterval(interval);
			}
	
		}, [index, text]);

		return <p className="aboutMe-text">{displayedText}</p>;
	}
	
	return (
		<section className={`sections-standar ${theme === 'dark' ? 'dark' : ''}`}>
			<h1 className={`titles ${theme==='dark' ? 'dark': ''}`}>{translations.aboutMe}</h1>
			<div className="aboutMe-container">
			<TypingEffect text={translations.aboutMeP1} />
			</div>
		</section>
	);
};

export default AboutMe;
