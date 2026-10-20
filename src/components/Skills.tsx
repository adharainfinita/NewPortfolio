import { TranslationsProps } from "../translations/interface";
import { useGlobalContext } from "../contexts/ThemeContext";
import "../styles/Skills.css";
import { useState } from "react";
import IconGrid from "./IconGrid";
import { frontIcons } from "../icons/front";
import { backIcons } from "../icons/back";
import { dbIcons } from "../icons/db";
import { otherIcons } from "../icons/other";

const Skills: React.FC<TranslationsProps> = ({ translations }) => {
	const { theme } = useGlobalContext();
	const [showIcon, setShowIcon] = useState<string>("");

	const handleButtonIcons = (iconType: string) => {
		setShowIcon(iconType);
	};

	//extraemos las claves-valor en un array de array; la clave será el titulo y el valor el icono
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
								<IconGrid icons={front} />
							) : (
							<p className={`tecnologies-titles ${theme==="dark"? "dark" : ""}`}>Frontend</p>
							)}
						</button>
						<button
							onClick={() => {
								handleButtonIcons("back");
							}}
						>
							{showIcon === "back" ? (
								<IconGrid icons={back} />
							) : (
								<p className={`tecnologies-titles ${theme==="dark"? "dark" : ""}`}>Backend</p>
							)}
						</button>
						<button
							onClick={() => {
								handleButtonIcons("db");
							}}
						>
							{showIcon === "db" ? (
								<IconGrid icons={db} />
							) : (
								<p className={`tecnologies-titles ${theme==="dark"? "dark" : ""}`}>{translations.databases}</p>
							)}
						</button>
						<button
							onClick={() => {
								handleButtonIcons("other");
							}}
						>
							{showIcon === "other" ? (
								<IconGrid icons={other} />
							) : (
								<p className={`tecnologies-titles ${theme==="dark"? "dark" : ""}`}>{translations.other}</p>
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
			</ul>
		</section>
	);
};

export default Skills;
