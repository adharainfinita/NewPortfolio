import "../styles/Projects.css";
import { TranslationsProps } from "../translations/interface";
import { useGlobalContext } from "../contexts/ThemeContext";

const Projects: React.FC<TranslationsProps> = ({ translations }) => {
	const { theme } = useGlobalContext();

	function extractValues<T extends object>(obj: T): T[keyof T][] {
		return Object.values(obj) as T[keyof T][];
	}

	const values = extractValues(translations.projectsContent);

	return (
		<section className={`sections-standar ${theme === "dark" ? "dark" : ""}`}>
			<h1 className={`titles ${theme === "dark" ? "dark" : ""}`}>
				{translations.projects}
			</h1>
			<h3 className={`projects-titles ${theme === "dark" ? "dark" : ""}`}>
				Facil Market
			</h3>
			<section className="section-projects">
				<img
					className="project-images"
					src="https://res.cloudinary.com/dlbhecdey/image/upload/v1725310360/Captura_de_pantalla_de_2024-09-02_17-47-00_zlazv0.png"
					alt="project1-image"
				/>
				<p className={`p-projects ${theme === "dark" ? "dark" : ""}`}>
					{values[0] ?? "notFound"}
				</p>
				<a href="https://github.com/adharainfinita/facil-market-proyect" target="_blank">
					{translations.linksProyect[0]}
					</a>
					<a href="https://youtu.be/XQNHgjvIK84?si=0B43sX7N3reWCYrN" target="_blank">
						{translations.linksProyect[1]}
				</a>
			</section>
			<h3 className={`projects-titles ${theme === "dark" ? "dark" : ""}`}>
				MyBookPage
			</h3>
			<section className="section-projects">
				<img
					className="project-images"
					src="https://res.cloudinary.com/dlbhecdey/image/upload/v1720895259/unknown_2024.07.13-15.11_5_ttz35d.gif"
					alt="project2-image"
				/>
				<p className={`p-projects ${theme === "dark" ? "dark" : ""}`}>
					{values[1] ?? "notFound"}
				</p>
				<a href="https://github.com/adharainfinita/my-books-pages" target="_blank">
					{translations.linksProyect[0]}
				</a>
				<a href="https://youtu.be/XQNHgjvIK84?si=0B43sX7N3reWCYrN" target="_blank">
					{translations.linksProyect[1]}
				</a>
			</section>
			<h3 className={`projects-titles ${theme === "dark" ? "dark" : ""}`}>
				CdelU Market
			</h3>
			<section className="section-projects">
				<img
					className="project-images"
					src="https://res.cloudinary.com/dlbhecdey/image/upload/v1692317595/samples/ecommerce/accessories-bag.jpg"
					alt="project3-image"
				/>
				<p className={`p-projects ${theme === "dark" ? "dark" : ""}`}>
					{values[2] ?? "notFound"}
				</p>
				<a href="https://github.com/adharainfinita/facil-market-cdu-platform" target="_blank">
					{translations.linksProyect[0]}
				</a>
				<a href="https://youtu.be/XQNHgjvIK84?si=0B43sX7N3reWCYrN" target="_blank">
					{translations.linksProyect[1]}
				</a>
			</section>
		</section>
	);
};

export default Projects;
