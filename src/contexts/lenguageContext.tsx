
import { createContext, useContext } from "react";

export type LanguageContextType = {
  language: "es" | "en";
  setLanguage: (lang: "es" | "en") => void;
};

export const LanguageContext = createContext<LanguageContextType>({
  language: "es",
  setLanguage: () => {},
});

export const useLanguage = () => useContext(LanguageContext);
