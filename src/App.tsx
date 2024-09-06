import { useState, useEffect } from "react";
import "./App.css";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Presentation from "./components/Presentation";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { Theme } from "./contexts/ThemeContext";
import { LanguageContext } from "./contexts/lenguageContext";
import { SP_translations } from "./translations/es";
import { EN_translations } from "./translations/en";
import AccesibilityComponent from "./components/Accesibility";

function App() {
	const [theme, setTheme] = useState("light");
	const [language, setLanguage] = useState<"es" | "en">("es");
	const translations = language === "es" ? SP_translations : EN_translations;

	useEffect(() => {
		document.body.classList.toggle("dark", theme === "dark");
	}, [theme]);

	return (
		<Theme.Provider value={{ theme, setTheme }}>
			<LanguageContext.Provider value={{ language, setLanguage }}>
				<AccesibilityComponent/>
				<Presentation translations={translations} />
				<AboutMe translations={translations} />
				<Skills translations={translations} />
				<Projects translations={translations} />
				<Contact translations={translations} />
			</LanguageContext.Provider>
		</Theme.Provider>
	);
}

export default App;
