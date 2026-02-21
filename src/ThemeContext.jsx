import { createContext, useContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        // Check initial cookie
        const savedTheme = Cookies.get('portfolio_theme');

        if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            setIsDark(true);
            document.documentElement.classList.add('dark');
        } else {
            setIsDark(false);
            document.documentElement.classList.remove('dark');
        }
    }, []);

    const toggleTheme = () => {
        setIsDark((prev) => {
            const newTheme = !prev;
            if (newTheme) {
                document.documentElement.classList.add('dark');
                Cookies.set('portfolio_theme', 'dark', { expires: 365 });
            } else {
                document.documentElement.classList.remove('dark');
                Cookies.set('portfolio_theme', 'light', { expires: 365 });
            }
            return newTheme;
        });
    };

    return (
        <ThemeContext.Provider value={{ isDark, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useTheme = () => useContext(ThemeContext);
