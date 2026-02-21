import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function Skills() {
    const { t } = useTranslation();

    const skills = [
        { category: t('skills.frontend'), items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion", "Vue.js"] },
        { category: t('skills.backend'), items: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs", "GraphQL"] },
        { category: t('skills.tools'), items: ["Git", "Docker", "Figma", "Jest", "Webpack", "Vite"] },
    ];

    return (
        <section id="skills" className="py-20 md:py-32 bg-slate-50 dark:bg-slate-800/50 relative transition-colors duration-300">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight"
                    >
                        {t('skills.title1')} <span className="text-teal-600 dark:text-teal-400">{t('skills.titleHighlight')}</span>
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, width: 0 }}
                        whileInView={{ opacity: 1, width: 80 }}
                        viewport={{ once: true }}
                        className="h-1.5 bg-teal-500 rounded-full mx-auto mt-6"
                    ></motion.div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {skills.map((skillGroup, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-md transition-shadow"
                        >
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">{skillGroup.category}</h3>
                            <div className="flex flex-wrap gap-3">
                                {skillGroup.items.map((skill, i) => (
                                    <span
                                        key={i}
                                        className="px-4 py-2 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium border border-slate-200 dark:border-slate-700 hover:border-teal-300 dark:hover:border-teal-700 hover:bg-teal-50 dark:hover:bg-teal-900/30 hover:text-teal-700 dark:hover:text-teal-400 transition-colors cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
