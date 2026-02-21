import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Projects() {
    const { t } = useTranslation();

    const projects = [
        {
            title: t('projects.p3.title'),
            description: t('projects.p3.desc'),
            image: "https://radovantariska.com/epk/Screenshot%202026-02-21%20at%2014-32-32%20Radovan%20Tariska%20Modern%20Jazz%20Saxophone.pngq=80&w=800&auto=format&fit=crop", // Music related image
            tags: ["React", "Framer Motion", "Tailwind CSS"],
            links: { github: "#", live: "https://radovantariska.com" }
        }
    ];

    return (
        <section id="projects" className="py-20 md:py-32 bg-white dark:bg-slate-900 relative transition-colors duration-300">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight"
                    >
                        {t('projects.title1')} <span className="text-teal-600 dark:text-teal-400">{t('projects.titleHighlight')}</span>
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, width: 0 }}
                        whileInView={{ opacity: 1, width: 80 }}
                        viewport={{ once: true }}
                        className="h-1.5 bg-teal-500 rounded-full mx-auto mt-6"
                    ></motion.div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="group rounded-2xl overflow-hidden bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 hover:shadow-xl dark:hover:shadow-teal-900/10 transition-all duration-300 flex flex-col h-full"
                        >
                            <div className="relative overflow-hidden aspect-video">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                    <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-white text-slate-900 rounded-full hover:bg-teal-500 hover:text-white transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300 delay-75">
                                        <Github size={20} />
                                    </a>
                                    <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="p-3 bg-white text-slate-900 rounded-full hover:bg-teal-500 hover:text-white transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300 delay-100">
                                        <ExternalLink size={20} />
                                    </a>
                                </div>
                            </div>

                            <div className="p-8 flex flex-col flex-grow">
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{project.title}</h3>
                                <p className="text-slate-600 dark:text-slate-400 mb-6 flex-grow">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="text-xs font-medium px-3 py-1 bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-400 rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
