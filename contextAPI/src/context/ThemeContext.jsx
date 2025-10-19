'use client'
import { createContext, useContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export function useTheme() {
    return useContext(ThemeContext)
}

export default function ThemeProvider({ children }) {
    const [isDark, setisDark] = useState(false);

    useEffect(() => {
        setisDark(localStorage.getItem('isDark') === "true")
    }, [])

    function toggleTheme() {
        setisDark((prev) => !prev);
    }

    useEffect(() => {
        localStorage.setItem('isDark', isDark)
        if (isDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }

    }, [isDark])

    return <ThemeContext.Provider value={{ isDark, toggleTheme }}>{children}</ThemeContext.Provider>
}
