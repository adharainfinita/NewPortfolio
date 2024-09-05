import { TranslationsProps } from "../translations/interface";
import { useGlobalContext } from "../contexts/ThemeContext";
import "../styles/Skills.css";
import { useState } from "react";
import Slider from "./Slider";
import { frontIcons } from "../icons/front";
import { backIcons } from "../icons/back";
import { dbIcons } from "../icons/db";
import { otherIcons } from "../icons/other";
import { roadmapIcons } from "../icons/roadmap";

const Skills: React.FC<TranslationsProps> = ({ translations }) => {
	const { theme } = useGlobalContext();
	const [showIcon, setShowIcon] = useState<string>("");

	const handleButtonIcons = (iconType: string) => {
		setShowIcon(iconType);
	};

	return (
		<section className={`sections-standar ${theme === "dark" ? "dark" : ""}`}>
			<h1 className={`titles ${theme === "dark" ? "dark" : ""}`}>
				{translations.skills}
			</h1>
			<ul id="skills-div">
				<li>
					<aside className="horizontal-section">
						<h4>{translations.tecnologies}</h4>
						<button
							onClick={() => {
								handleButtonIcons("front");
							}}
						>
							{showIcon === "front" ? (
								<Slider icons={frontIcons} />
							) : (
								<p className="tecnologies-titles">/Frontend/</p>
							)}
						</button>
						<button
							onClick={() => {
								handleButtonIcons("back");
							}}
						>
							{showIcon === "back" ? (
								<Slider icons={backIcons} />
							) : (
								<p className="tecnologies-titles">/Backend/</p>
							)}
						</button>
						<button
							onClick={() => {
								handleButtonIcons("db");
							}}
						>
							{showIcon === "db" ? (
								<Slider icons={dbIcons} />
							) : (
								<p className="tecnologies-titles">/{translations.databases}/</p>
							)}
						</button>
						<button
							onClick={() => {
								handleButtonIcons("other");
							}}
						>
							{showIcon === "other" ? (
								<Slider icons={otherIcons} />
							) : (
								<p className="tecnologies-titles">/{translations.other}/</p>
							)}
						</button>
					</aside>
				</li>
				<li>
					<div className="horizontal-section">
						<h4>{translations.softSkills}</h4>
						<ul className="soft-skills">Capacidad crítica</ul>
						<ul className="soft-skills">Productividad</ul>
						<ul className="soft-skills">Aprendizaje continuo</ul>
						<ul className="soft-skills">Efectividad y agilidad</ul>
					</div>
				</li>
				<li>
					<div className="horizontal-section">
						<h4>{translations.roadmap}</h4>
						<img className="icon-img" src={roadmapIcons[0]} alt="icon1" />
						<img className="icon-img" src={roadmapIcons[1]} alt="icon2" />
						<img className="icon-img" src={roadmapIcons[2]} alt="icon3" />
						<img className="icon-img" src={roadmapIcons[3]} alt="icon4" />
					</div>
				</li>
			</ul>
		</section>
	);
};

export default Skills;
