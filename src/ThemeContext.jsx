import React, { useContext, useState } from 'react'
export const ThemeContext = React.createContext(false)

const ThemeProvider = ({ children }) => {
    const [DarkTheme, setDarkTheme] = useState(false)

    return (
        <ThemeContext.Provider value={{ DarkTheme, setDarkTheme }}>
            {children}
        </ThemeContext.Provider >
    )
}
export const useTheme = () => {
    const { DarkTheme, setDarkTheme } = useContext(ThemeContext);
    let themeChange = () => {
        setDarkTheme(!DarkTheme);
        console.log(DarkTheme, 'asd');

    }
    console.log(DarkTheme, 'asd');
    return { DarkTheme, themeChange };
}



export default ThemeProvider


