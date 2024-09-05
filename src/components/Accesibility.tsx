import { MdLightMode, MdModeNight } from 'react-icons/md';
import { useGlobalContext } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/lenguageContext';
import '../styles/Accesibility.css';

const AccesibilityComponent = () => {
  const { theme, setTheme } = useGlobalContext();
  const { language, setLanguage } = useLanguage();

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    } else {
      setTheme('light');
      document.documentElement.classList.remove('dark');
    }
  };

  const toggleLanguage = () => {
    language === 'en' ? setLanguage('es') : setLanguage('en');
  };

  return (
    <div className='accesibility-container'>
      <button
        onClick={toggleTheme}
        className={`theme-button ${theme === 'dark' ? 'dark' : ''}`}
      >
        {theme === 'dark' ? (
          <MdModeNight className='theme-button-icon' />
        ) : (
          <MdLightMode className='theme-button-icon' />
        )}
      </button>
      <button
        className={`language-button ${theme === 'dark' ? 'dark' : ''}`}
        onClick={toggleLanguage}
      >
        <span className='language-button-text'>
          {language === 'en' ? 'ENG' : 'SPA'}
        </span>
      </button>
    </div>
  );
};

export default AccesibilityComponent;
