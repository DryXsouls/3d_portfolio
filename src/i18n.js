import i18n from 'i18next';
import LanguageDetector from "i18next-browser-languagedetector";
import {initReactI18next} from 'react-i18next';


i18n.use(LanguageDetector).use(initReactI18next).init({
    debug:true,
    fallbackLng: "en",
    returnObjects:true,
    resources:{
        en:{
            translation:{
                heroHeadLine:"Front-end React Developer",
                heroPar1:"Hello there traveler I'm Matúš Vytykáč aspiring Front-end developer from Slovakia.",
                heroPar2:"I'm student at University of Žilina studying informatics and 3D Art",
                aboutHeadline:"About me",
                aboutHead:"Junior developer from Slovakia",
                aboutParagraph:"As a junior front-end developer, I possess HTML, CSS, JavaScript, and React skills. I aim to design responsive Websites for you, with additional knowledge of Figma, Blender, Adobe Photoshop, and Illustrator. I'm a friendly person who loves to finish projects with his team in the best possible state.",
                portfolioHeadline:"Portfolio",
                portfolioHead:"Each project is unique and designed for business in mind",
                contactHeadline:"Contact",
                wolfCape:"An online Wolfcape Studio page that informs about the progress of the Last Tale Spoken game that is my Graduation Project.",
                portfolio3D:"My 3D-Design Portfolio",
                portfolioPar:"You can check out my 3D-design works here: I worked on vehicles, buildings, weapons, assets, products, characters. I have models in sci-fi, fantasy, historical genres.",
                contactHeadline:"Kontakt",
                contact:"You can get in touch with me through:",
            },
        },
        sk:{
            translation:{
                heroHeadLine:"Front-end React Vyvojár",
                heroPar1:"Ahoj cestovateľ, volám sa Matúš Vytykáč ambiciózny Front-end vývojár pochádzajúci zo Slovenska.",
                heroPar2:"Som študentom Žilinskej Univerzity študujúci informatiku a 3D umenie",
                aboutHeadline:"O mne",
                aboutHead:"Junior vývojár zo Slovenska",
                aboutParagraph:"Ako junior front-end vývojár ovládam HTML, CSS, JavaScript a React. Mojim cieľom je navrhnúť pre Vás responzívne webové stránky s dodatočnými znalosťami programov Figma, Blender, Adobe Photoshop a Illustrator. Som priateľský človek, ktorý rád dokončí projekty so svojím tímom v čo najlepšom stave.",
                portfolioHeadline:"Portfolio",
                portfolioHead:"Každý projekt je jedinečný a navrhnutý pre podnikanie",
                wolfCape:"Online stránka Wolfcape Studio, ktorá informuje o postupe v hre Last Tale Spoken, ktorá je mojou diplomovou prácov.",
                portfolio3D:"Moje 3D-Dizajn Portfolio",
                portfolioPar:"Moje 3D dizajnérske práce si môžete pozrieť tu: Pracoval som na vozidlách, budovách, zbraniach, rekvizity, produktoch, postavách. Mám modely v sci-fi, fantasy, historických žánroch.",
                contactHeadline:"Kontakt",
                contact:"Môžeš ma kontaktovať cez:",
            },
        }
    }
});