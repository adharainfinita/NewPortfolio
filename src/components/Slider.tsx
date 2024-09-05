import { useState, useEffect } from "react";
import '../styles/Slider.css'

interface SliderProps {
  icons: string[];
}

const Slider: React.FC<SliderProps> = ({ icons }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === icons.length - 1 ? 0 : prevIndex + 1
      );
    }, 700); // Cambia cada 0.5 segundos

    // Limpiar el intervalo cuando el componente se desmonta
    return () => clearInterval(interval);
  }, [icons.length]);

  return (
    <div className="slider-container">
      <div  className="icon-wrapper"
        style={{ transform: `translateY(-${currentIndex * 5}%)` }}>
        <img
        src={icons[currentIndex]}
        alt={`icon-${currentIndex}`}
        className="icon-img"
      />  
      </div>
    
    </div>
  );
};

export default Slider;
