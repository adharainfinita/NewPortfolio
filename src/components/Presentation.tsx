import React, { useState } from "react";
import "../styles/Presentation.css";
import { TranslationsProps } from "../translations/interface";
import { useGlobalContext } from "../contexts/ThemeContext";

const Presentation: React.FC<TranslationsProps> = ({
	translations,
}: TranslationsProps) => {
	const [imageChanged, setImageChanged] = useState(false);
	const { theme } = useGlobalContext();

	const handleImageChange = (
		setImageChanged: React.Dispatch<React.SetStateAction<boolean>>
	) => {
		setImageChanged((prevState) => !prevState);
	};
	return (
		<div className={`sections-standar ${theme === "dark" ? "dark" : ""}`}>
			<h1 className={`${theme === "dark" ? "dark" : ""}`}>Adhara Redruello</h1>
			<section className="horizontal-section">
				<p id={`presentation-text${theme === "dark" ? "dark" : ""}`}>
					{translations.title}
				<h5 id={`description-text${theme === "dark" ? "dark" : ""}`}>{translations.description}</h5>
				</p>
				<button
					id="button-image"
					onClick={() => handleImageChange(setImageChanged)}
				>
					<img
						src={
							imageChanged
								? "https://res.cloudinary.com/dlbhecdey/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1725375906/IMG_20240713_171114068_MP-POP_OUT_rmooks.jpg"
								: "https://res.cloudinary.com/dlbhecdey/image/upload/v1725374845/DALL_E_2024-09-03_11.46.02_-_Pixel_art_of_a_girl_with_short_copper-colored_hair_and_brown_eyes_wearing_glasses_and_holding_a_laptop_in_her_hands._She_is_a_developer_and_the_set_bgmuv3.webp"
						}
						alt="profile-image"
						id="presentation-image"
					/>
				</button>
			</section>
		</div>
	);
};

export default Presentation;
