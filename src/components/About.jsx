import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function About() {
    const { t } = useTranslation();

    return (
        <section id="about" className="py-20 md:py-32 bg-white dark:bg-slate-900 relative transition-colors duration-300">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex-1 space-y-6"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">
                            {t('about.title1')} <span className="text-teal-600 dark:text-teal-400">{t('about.titleHighlight')}</span>
                        </h2>
                        <div className="w-20 h-1.5 bg-teal-500 rounded-full"></div>

                        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed pt-6">
                            {t('about.p1')}
                        </p>

                        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                            {t('about.p2')}
                        </p>

                        <div className="pt-6 grid grid-cols-2 gap-6">
                            <div>
                                <h4 className="font-bold text-slate-900 dark:text-white text-xl">2+</h4>
                                <p className="text-slate-500 dark:text-slate-400">{t('about.yearsExp')}</p>
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900 dark:text-white text-xl">10+</h4>
                                <p className="text-slate-500 dark:text-slate-400">{t('about.projectsCompleted')}</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex-1 w-full"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop"
                                alt="Workspace"
                                className="w-full h-auto object-cover aspect-video hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-teal-900/10 dark:bg-slate-900/20 mix-blend-overlay"></div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
