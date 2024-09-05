import { createContext, useContext } from "react"
export type ThemeContext = {
  theme: string
  setTheme:(c: string) => void
}
export const Theme = createContext<ThemeContext>({
theme: 'dark', // set a default value
setTheme: () => {},
})
export const useGlobalContext = () => useContext(Theme)