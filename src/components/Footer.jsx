import { Instagram, Mail, Heart } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const { t } = useTranslation();

    return (
        <footer className="bg-slate-900 dark:bg-slate-950 text-slate-300 pt-20 pb-10 border-t border-slate-800 transition-colors duration-300">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="md:col-span-2">
                        <h2 className="text-3xl font-bold tracking-tighter text-white mb-6">
                            Oskar <span className="text-teal-500">Tariska.</span>
                        </h2>
                        <p className="text-slate-400 max-w-sm leading-relaxed mb-8">
                            {t('footer.desc')}
                        </p>
                        <div className="flex gap-4">
                            {[
                                { icon: Instagram, href: "https://www.instagram.com/o.s.k.r.r/" },
                                { icon: Mail, href: "mailto:oskar.tariskaa@gmail.com" }
                            ].map((social, i) => (
                                <a
                                    key={i}
                                    href={social.href}
                                    className="w-10 h-10 rounded-full bg-slate-800 dark:bg-slate-800/50 flex items-center justify-center text-slate-400 hover:bg-teal-500 dark:hover:bg-teal-500/80 hover:text-white dark:hover:text-white transition-all transform hover:-translate-y-1"
                                >
                                    <social.icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-6">{t('footer.quickLinks')}</h3>
                        <ul className="space-y-4">
                            {[
                                { key: 'home', label: t('nav.home') },
                                { key: 'about', label: t('nav.about') },
                                { key: 'skills', label: t('nav.skills') },
                                { key: 'projects', label: t('nav.projects') },
                                { key: 'contact', label: t('nav.contact') }
                            ].map((item) => (
                                <li key={item.key}>
                                    <a
                                        href={`#${item.key}`}
                                        className="hover:text-teal-400 transition-colors"
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-6">{t('footer.legal')}</h3>
                        <ul className="space-y-4">
                            <li>
                                <a href="#" className="hover:text-teal-400 transition-colors">{t('footer.privacy')}</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-teal-400 transition-colors">{t('footer.terms')}</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm">
                        &copy; {currentYear} Oskar. {t('footer.rights')}
                    </p>
                    <p className="text-sm flex items-center gap-1">
                        {t('footer.builtWith')} <Heart size={14} className="text-red-500 fill-red-500 mx-1" /> and React
                    </p>
                </div>
            </div>
        </footer>
    );
}
