import { motion } from 'framer-motion';
import { Menu, X, Sun, Moon, Globe } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../ThemeContext';
import Cookies from 'js-cookie';

export default function Navbar({ isScrolled }) {
    const [isOpen, setIsOpen] = useState(false);
    const { t, i18n } = useTranslation();
    const { isDark, toggleTheme } = useTheme();

    const navItems = [
        { name: t('nav.home'), href: '#home' },
        { name: t('nav.about'), href: '#about' },
        { name: t('nav.skills'), href: '#skills' },
        { name: t('nav.projects'), href: '#projects' },
        { name: t('nav.contact'), href: '#contact' },
    ];

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        Cookies.set('portfolio_language', lng, { expires: 365 });
    };

    const toggleLanguage = () => {
        const newLang = i18n.language === 'en' ? 'sk' : 'en';
        changeLanguage(newLang);
    };

    return (
        <nav className={`fixed w-full z-50 top-0 start-0 transition-all duration-300 ${isScrolled ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm border-b border-slate-200 dark:border-slate-800' : 'bg-transparent'
            }`}>
            <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between p-4 md:px-8">
                <a href="#home" className="flex items-center space-x-3 rtl:space-x-reverse group">
                    <span className="self-center text-2xl font-bold whitespace-nowrap text-slate-900 dark:text-white tracking-tight">
                        Oskar <span className="text-teal-600 dark:text-teal-400">Tariska.</span>
                    </span>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center space-x-8">
                    {navItems.map((item, index) => (
                        <motion.a
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            key={item.name}
                            href={item.href}
                            className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                        >
                            {item.name}
                        </motion.a>
                    ))}

                    <div className="flex items-center space-x-4 border-l pl-4 border-slate-200 dark:border-slate-700">
                        <button
                            onClick={toggleLanguage}
                            className="flex items-center justify-center gap-1.5 text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors uppercase"
                        >
                            <Globe size={18} />
                            {i18n.language}
                        </button>
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                            aria-label="Toggle Dark Mode"
                        >
                            {isDark ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                    </div>

                    <motion.a
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: navItems.length * 0.1 }}
                        href="#contact"
                        className="px-5 py-2.5 rounded-full bg-teal-600 text-white text-sm font-medium hover:bg-teal-700 transition-colors shadow-lg shadow-teal-500/30"
                    >
                        {t('nav.hireMe')}
                    </motion.a>
                </nav>

                {/* Mobile Nav Toggle */}
                <div className="md:hidden flex items-center gap-4">
                    <button
                        onClick={toggleLanguage}
                        className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-teal-600 uppercase flex items-center gap-1"
                    >
                        <Globe size={16} />
                        {i18n.language}
                    </button>
                    <button
                        onClick={toggleTheme}
                        className="text-slate-600 dark:text-slate-300"
                    >
                        {isDark ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                    <button
                        className="text-slate-900 dark:text-white"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Nav */}
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute top-full left-0 w-full bg-white dark:bg-slate-800 shadow-lg py-4 px-6 mt-4 md:hidden flex flex-col space-y-4 rounded-2xl border border-slate-100 dark:border-slate-700"
                    >
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className="text-slate-600 dark:text-slate-300 font-medium hover:text-teal-600 dark:hover:text-teal-400 py-2 border-b border-slate-50 dark:border-slate-700 last:border-0"
                            >
                                {item.name}
                            </a>
                        ))}
                    </motion.div>
                )}
            </div>
        </nav>
    );
}
