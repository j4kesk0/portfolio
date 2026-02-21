import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Cookies from 'js-cookie';

const resources = {
    en: {
        translation: {
            nav: {
                home: "Home",
                about: "About",
                skills: "Skills",
                projects: "Projects",
                contact: "Contact",
                hireMe: "Hire Me"
            },
            hero: {
                welcome: "👋 Welcome to my portfolio",
                title1: "Building digital",
                titleHighlight: "experiences",
                title2: "that matter.",
                description: "I'm a passionate Frontend Developer specializing in React, building fast, accessible, and beautifully designed web applications.",
                viewWork: "View My Work",
                contactMe: "Contact Me"
            },
            about: {
                title1: "About",
                titleHighlight: "Me",
                p1: "Hi, I'm Oskar. I'm a 17-year-old frontend developer focused on crafting clean, user-friendly experiences. I am passionate about building excellent software that improves the lives of those around me.",
                p2: "With a strong foundation in modern web technologies like React, Tailwind CSS, and Framer Motion, I specialize in creating responsive and interactive websites that look great on any device.",
                yearsExp: "Years Experience",
                projectsCompleted: "Projects Completed"
            },
            skills: {
                title1: "My",
                titleHighlight: "Expertise",
                frontend: "Frontend",
                backend: "Backend",
                tools: "Tools"
            },
            projects: {
                title1: "Featured",
                titleHighlight: "Projects",
                p1: {
                    title: "E-Commerce Dashboard",
                    desc: "A modern admin dashboard for e-commerce platforms with real-time analytics, inventory management, and beautiful charts."
                },
                p2: {
                    title: "AI Writing Assistant",
                    desc: "An AI-powered application that helps writers generate content, check grammar, and improve their writing style."
                },
                p3: {
                    title: "Modern Music Portfolio",
                    desc: "A sleek, responsive portfolio website for a musician, featuring audio integration, gig schedules, and dynamic animations."
                }
            },
            contact: {
                title1: "Get In",
                titleHighlight: "Touch",
                subtitle: "Let's talk about everything!",
                desc: "Hate forms? Send me an email instead. I'm currently open to new opportunities.",
                email: "Email",
                emailValue: "oskar.tariskaa@gmail.com",
                phone: "Phone",
                phoneValue: "+421 948 196 230",
                location: "Location",
                locationValue: "Slovakia",
                form: {
                    name: "Your Name",
                    namePh: "John Doe",
                    email: "Email Address",
                    emailPh: "john@example.com",
                    subject: "Subject",
                    subjectPh: "How can I help you?",
                    message: "Message",
                    messagePh: "Tell me about your project...",
                    send: "Send Message",
                    gdpr: "I consent to the use of cookies and the processing of personal data (Email, Preferred Language, Name, and Message) in accordance with the Privacy Policy."
                }
            },
            footer: {
                desc: "A passionate frontend developer building beautiful, modern, and accessible web experiences. Available for freelance opportunities.",
                quickLinks: "Quick Links",
                legal: "Legal",
                privacy: "Privacy Policy",
                terms: "Terms of Service",
                rights: "All rights reserved.",
                builtWith: "Built with"
            }
        }
    },
    sk: {
        translation: {
            nav: {
                home: "Domov",
                about: "O mne",
                skills: "Zručnosti",
                projects: "Projekty",
                contact: "Kontakt",
                hireMe: "Objednať stránku"
            },
            hero: {
                welcome: "👋 Vitajte v mojom portfóliu",
                title1: "Vytváram digitálne",
                titleHighlight: "zážitky",
                title2: "na ktorých záleží.",
                description: "Som vášnivý Frontend Developer so zameraním na React. Tvorím rýchle, prístupné a krásne dizajnované webové aplikácie.",
                viewWork: "Moja práca",
                contactMe: "Kontaktujte ma"
            },
            about: {
                title1: "O",
                titleHighlight: "Mne",
                p1: "Ahoj, som Oskar. Som 17-ročný frontend developer, ktorý sa zameriava na tvorbu čistých a užívateľsky prívetivých aplikácií. S nadšením tvorím kvalitný softvér, ktorý zlepšuje životy ľudí okolo mňa.",
                p2: "S pevnými základmi v moderných webových technológiách ako React, Tailwind CSS a Framer Motion sa špecializujem na tvorbu responzívnych a interaktívnych webstránok, ktoré vyzerajú skvele na každom zariadení.",
                yearsExp: "Rokov skúseností",
                projectsCompleted: "Dokončených projektov"
            },
            skills: {
                title1: "Moja",
                titleHighlight: "Odbornosť",
                frontend: "Frontend",
                backend: "Backend",
                tools: "Nástroje"
            },
            projects: {
                title1: "Vybrané",
                titleHighlight: "Projekty",
                p1: {
                    title: "E-Commerce Dashboard",
                    desc: "Moderný admin dashboard pre e-commerce platformy s analytikou v reálnom čase, správou zásob a krásnymi grafmi."
                },
                p2: {
                    title: "AI Asistent Písania",
                    desc: "Aplikácia poháňaná umelou inteligenciou, ktorá pomáha spisovateľom generovať obsah, kontrolovať gramatiku a zlepšovať štýl písania."
                },
                p3: {
                    title: "Moderné Hudobné Portfólio",
                    desc: "Elegantná, responzívna webstránka pre hudobníka s integrovaným audiom, rozpisom koncertov a dynamickými animáciami."
                }
            },
            contact: {
                title1: "Ozvite",
                titleHighlight: "Sa Mi",
                subtitle: "Poďme sa baviť o všetkom!",
                desc: "Nemáte radi formuláre? Pošlite mi radšej email. Momentálne som otvorený novým príležitostiam.",
                email: "Email",
                emailValue: "oskar.tariskaa@gmail.com",
                phone: "Telefón",
                phoneValue: "+421 948 196 230",
                location: "Lokalita",
                locationValue: "Slovensko",
                form: {
                    name: "Vaše Meno",
                    namePh: "Ján Novák",
                    email: "Emailová stresa",
                    emailPh: "jan@priklad.sk",
                    subject: "Predmet",
                    subjectPh: "Ako vám môžem pomôcť?",
                    message: "Správa",
                    messagePh: "Povedzte mi o vašom projekte...",
                    send: "Odoslať Správu",
                    gdpr: "Súhlasím s používaním cookies a so spracovaním osobných údajov (E-mail, preferovaný jazyk, meno a správa) podľa zásad ochrany súkromia."
                }
            },
            footer: {
                desc: "Vášnivý frontend developer tvoriaci krásne, moderné a prístupné webové zážitky. Otvorený ponukám na spoluprácu.",
                quickLinks: "Rýchle odkazy",
                legal: "Právne",
                privacy: "Ochrana súkromia",
                terms: "Podmienky používania",
                rights: "Všetky práva vyhradené.",
                builtWith: "Vytvorené s"
            }
        }
    }
};

const savedLanguage = Cookies.get('portfolio_language') || 'en';

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: savedLanguage,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
