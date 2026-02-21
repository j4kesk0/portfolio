import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Contact() {
    const { t } = useTranslation();

    return (
        <section id="contact" className="py-20 md:py-32 bg-slate-50 dark:bg-slate-800/20 relative transition-colors duration-300">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight"
                    >
                        {t('contact.title1')} <span className="text-teal-600 dark:text-teal-400">{t('contact.titleHighlight')}</span>
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, width: 0 }}
                        whileInView={{ opacity: 1, width: 80 }}
                        viewport={{ once: true }}
                        className="h-1.5 bg-teal-500 rounded-full mx-auto mt-6"
                    ></motion.div>
                </div>

                <div className="flex flex-col lg:flex-row gap-16 max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex-1 space-y-8"
                    >
                        <div>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{t('contact.subtitle')}</h3>
                            <p className="text-slate-600 dark:text-slate-400">
                                {t('contact.desc')}
                            </p>
                        </div>

                        <div className="space-y-6">
                            {[
                                { icon: Mail, title: t('contact.email'), info: t('contact.emailValue') },
                                { icon: Phone, title: t('contact.phone'), info: t('contact.phoneValue') },
                                { icon: MapPin, title: t('contact.location'), info: t('contact.locationValue') }
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-teal-600 dark:text-teal-400 shadow-sm shrink-0">
                                        <item.icon size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-slate-900 dark:text-white">{item.title}</h4>
                                        <p className="text-slate-600 dark:text-slate-400">{item.info}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex-[1.5]"
                    >
                        <form action="https://formspree.io/f/mykdnzyb" method="POST" className="bg-white dark:bg-slate-900 p-8 md:p-10 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 space-y-6 transition-colors duration-300">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-slate-700 dark:text-slate-300">{t('contact.form.name')}</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all bg-slate-50 dark:bg-slate-800/50 dark:text-white focus:bg-white dark:focus:bg-slate-800"
                                        placeholder={t('contact.form.namePh')}
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-slate-300">{t('contact.form.email')}</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all bg-slate-50 dark:bg-slate-800/50 dark:text-white focus:bg-white dark:focus:bg-slate-800"
                                        placeholder={t('contact.form.emailPh')}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium text-slate-700 dark:text-slate-300">{t('contact.form.subject')}</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all bg-slate-50 dark:bg-slate-800/50 dark:text-white focus:bg-white dark:focus:bg-slate-800"
                                    placeholder={t('contact.form.subjectPh')}
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-slate-700 dark:text-slate-300">{t('contact.form.message')}</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all bg-slate-50 dark:bg-slate-800/50 dark:text-white focus:bg-white dark:focus:bg-slate-800 resize-none"
                                    placeholder={t('contact.form.messagePh')}
                                    required
                                ></textarea>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="flex items-center h-5">
                                    <input
                                        id="gdpr"
                                        name="gdpr_consent"
                                        type="checkbox"
                                        required
                                        className="w-4 h-4 text-teal-600 bg-slate-50 border-slate-300 rounded focus:ring-teal-500 dark:focus:ring-teal-600 dark:ring-offset-slate-900 focus:ring-2 dark:bg-slate-800 dark:border-slate-700"
                                    />
                                </div>
                                <label htmlFor="gdpr" className="text-sm text-slate-600 dark:text-slate-400">
                                    {t('contact.form.gdpr')}
                                </label>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4 rounded-xl bg-teal-600 dark:bg-teal-500 text-white font-medium hover:bg-teal-700 dark:hover:bg-teal-600 transition-colors shadow-lg shadow-teal-500/30 flex items-center justify-center gap-2 group active:scale-[0.98]"
                            >
                                {t('contact.form.send')}
                                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
