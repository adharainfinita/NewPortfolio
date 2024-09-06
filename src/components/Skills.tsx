import { TranslationsProps } from "../translations/interface";
import { useGlobalContext } from "../contexts/ThemeContext";
import "../styles/Skills.css";
import { useState } from "react";
import Slider from "./Slider";
import { frontIcons } from "../icons/front";
import { backIcons } from "../icons/back";
import { dbIcons } from "../icons/db";
import { otherIcons } from "../icons/other";
import {roadmapIcons} from "../icons/roadmap";

const Skills: React.FC<TranslationsProps> = ({ translations }) => {
	const { theme } = useGlobalContext();
	const [showIcon, setShowIcon] = useState<string>("");

	const handleButtonIcons = (iconType: string) => {
		setShowIcon(iconType);
	};

	//extraemos las claves-valor en un array de array; la clave será el titulo y el valor el icono
	const roadmap = Object.entries(roadmapIcons);
	const front = Object.entries(frontIcons);
	const back = Object.entries(backIcons);
	const db = Object.entries(dbIcons);
	const other = Object.entries(otherIcons);


	return (
		<section className={`sections-standar ${theme === "dark" ? "dark" : ""}`}>
			<h1 className={`titles ${theme === "dark" ? "dark" : ""}`}>
				{translations.skills}
			</h1>
			<ul id="skills-div">
				<li>
					<aside className="horizontal-section">
						<h4 className={`titles-list ${theme === 'dark' ? 'dark': ""}`}>{translations.tecnologies}</h4>
						<button
							onClick={() => {
								handleButtonIcons("front");
							}}
						>
							{showIcon === "front" ? (
								<Slider icons={front} />
							) : (
							<p className={`tecnologies-titles ${theme==="dark"? "dark" : ""}`}>/Frontend/</p>
							)}
						</button>
						<button
							onClick={() => {
								handleButtonIcons("back");
							}}
						>
							{showIcon === "back" ? (
								<Slider icons={back} />
							) : (
								<p className={`tecnologies-titles ${theme==="dark"? "dark" : ""}`}>/Backend/</p>
							)}
						</button>
						<button
							onClick={() => {
								handleButtonIcons("db");
							}}
						>
							{showIcon === "db" ? (
								<Slider icons={db} />
							) : (
								<p className={`tecnologies-titles ${theme==="dark"? "dark" : ""}`}>/{translations.databases}/</p>
							)}
						</button>
						<button
							onClick={() => {
								handleButtonIcons("other");
							}}
						>
							{showIcon === "other" ? (
								<Slider icons={other} />
							) : (
								<p className={`tecnologies-titles ${theme==="dark"? "dark" : ""}`}>/{translations.other}/</p>
							)}
						</button>
					</aside>
				</li>
				<li>
					<div className="horizontal-section">
						<h4 className={`titles-list ${theme === 'dark' ? 'dark': ""}`}>{translations.softSkills}</h4>
						<ul className={`soft-skills ${theme ==="dark" ? "dark" : ""}`}>Capacidad crítica</ul>
						<ul className={`soft-skills ${theme ==="dark" ? "dark" : ""}`}>Productividad</ul>
						<ul className={`soft-skills ${theme ==="dark" ? "dark" : ""}`}>Aprendizaje continuo</ul>
						<ul className={`soft-skills ${theme ==="dark" ? "dark" : ""}`}>Efectividad y agilidad</ul>
					</div>
				</li>
				<li>
					<div className="horizontal-section">
						<h4 className={`titles-list ${theme === 'dark' ? 'dark': ""}`}>{translations.roadmap}</h4>
						<img className="icon-img" src={roadmap[0][1]} alt="icon1" title={roadmap[0][0]} />
						<img className="icon-img" src={roadmap[1][1]} alt="icon2" title={roadmap[1][0]} />
						<img className="icon-img" src={roadmap[2][1]} alt="icon3" title={roadmap[2][0]}/>
						<img className="icon-img" src={roadmap[3][1]} alt="icon4" title={roadmap[3][0]}/>
					</div>
				</li>
			</ul>
		</section>
	);
};

export default Skills;
