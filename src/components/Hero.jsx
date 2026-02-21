import { motion } from 'framer-motion';
import { ArrowRight, Instagram } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Hero() {
    const { t } = useTranslation();

    return (
        <section id="home" className="pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden relative">
            <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

            <div className="container mx-auto px-6 md:px-12 flex flex-col-reverse md:flex-row items-center gap-12">
                <div className="flex-1 text-center md:text-left">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="inline-block px-4 py-1.5 rounded-full bg-teal-50 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 font-medium text-sm mb-6 border border-teal-100 dark:border-teal-800/50 shadow-sm"
                    >
                        {t('hero.welcome')}
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 leading-tight"
                    >
                        {t('hero.title1')} <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-emerald-500">
                            {t('hero.titleHighlight')}
                        </span> {t('hero.title2')}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto md:mx-0 leading-relaxed"
                    >
                        {t('hero.description')}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start"
                    >
                        <a
                            href="#projects"
                            className="group flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-medium hover:bg-slate-800 dark:hover:bg-slate-100 transition-all shadow-xl shadow-slate-900/20 active:scale-95"
                        >
                            {t('hero.viewWork')}
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="#contact"
                            className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-full bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-medium border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all active:scale-95"
                        >
                            {t('hero.contactMe')}
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="flex items-center gap-4 justify-center md:justify-start mt-12"
                    >
                        {[
                            { icon: Instagram, href: "https://www.instagram.com/o.s.k.r.r/" }
                        ].map((social, i) => (
                            <a
                                key={i}
                                href={social.href}
                                target="_blank"
                                rel="noreferrer"
                                className="w-12 h-12 rounded-full bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 hover:border-teal-100 dark:hover:border-teal-900/50 hover:bg-teal-50 dark:hover:bg-teal-900/20 transition-all shadow-sm"
                            >
                                <social.icon size={20} />
                            </a>
                        ))}
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="flex-none relative max-w-[320px] w-full mx-auto lg:mr-8 shrink-0"
                >
                    <div className="relative aspect-[3/4] rounded-3xl overflow-hidden bg-gradient-to-tr from-teal-100 to-slate-100 dark:from-teal-900/40 dark:to-slate-800 shadow-xl p-2 md:p-3 rotate-3 hover:rotate-0 transition-transform duration-500 ease-out">
                        <div className="w-full h-full rounded-2xl overflow-hidden relative bg-white dark:bg-slate-900">
                            <img
                                src="/portfolio/profile.jpg"
                                alt="Oskar - Frontend Developer"
                                className="w-full h-full object-cover hover:scale-105 transition-all duration-700 object-top"
                                onError={(e) => {
                                    e.target.className = "w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 object-top"
                                }}
                            />
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-teal-400/80 dark:bg-teal-600/60 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob"></div>
                        <div className="absolute -top-6 -right-6 w-24 h-24 bg-emerald-400/80 dark:bg-emerald-600/60 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2000"></div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
