import { motion } from 'framer-motion'
import { fadeIn } from '../variants'


import HTML from '../assets/html.svg'
import HTMLDesktop from '../assets/htmldesktop.svg'
import CSS from '../assets/css.svg'
import JS from '../assets/javascript.svg'
import REACT from '../assets/react.svg'
import TS from '../assets/typescript.svg'
import TW from '../assets/tailwind.svg'
import SQL from '../assets/mysql.svg'
import NODE from '../assets/node.svg'
import JEST from '../assets/jest.svg'
import FIGMA from '../assets/figma.svg'
import PYTHON from '../assets/python.svg'
import JQUERY from '../assets/jquery.svg'
import JIRA from '../assets/jira.svg'
import TRELLO from '../assets/trello.svg'
import Cypress from '../assets/cypress.svg'


import originalHTML from '../original/originalHTML.svg'
import originalCSS from '../original/originalCSS.svg'
import originalJS from '../original/originalJS.svg'
import originalReact from '../original/originalReact.svg'
import originalTS from '../original/originalTS.svg'
import originalTW from '../original/originalTW.svg'
import originalSQL from '../original/originalSQL.svg'
import originalNode from '../original/originalNode.svg'
import originalJest from '../original/originalJest.svg'
import originalFigma from '../original/originalFigma.svg'
import originalPython from '../original/originalPython.svg'
import originalJquery from '../original/originalJquery.svg'
import originalJira from '../original/originalJira.svg'
import originalTrello from '../original/originalTrello.svg'
import originalCypress from '../original/originalCypress.svg'


import originalmobileHTML from '../original/originalmobileHTML.svg'
import originalmobileCSS from '../original/originalmobileCSS.svg'
import originalmobileJS from '../original/originalmobileJS.svg'
import originalmobileReact from '../original/originalmobileReact.svg'
import originalmobileTS from '../original/originalmobileTS.svg'
import originalmobileTW from '../original/originalmobileTW.svg'
import originalmobileSQL from '../original/originalmobileSQL.svg'
import originalmobileNode from '../original/originalmobileNode.svg'
import originalmobileJest from '../original/originalmobileJest.svg'
import originalmobileFigma from '../original/originalmobileFigma.svg'
import originalmobilePython from '../original/originalmobilePython.svg'
import originalmobileJquery from '../original/originalmobileJquery.svg'
import originalmobileJira from '../original/originalmobileJira.svg'
import originalmobileTrello from '../original/originalmobileTrello.svg'

import './TechsHoverEffect.css';

// Array de dados das tecnologias
const techs = [


    { src: HTML, alt: "HTML", className: "tech-html", originalSrcDesktop: originalHTML, originalSrcMobile: originalmobileHTML, hasMobileOriginal: true },
    { src: CSS, alt: "CSS", className: "tech-css", originalSrcDesktop: originalCSS, originalSrcMobile: originalmobileCSS, hasMobileOriginal: true },
    { src: JS, alt: "JavaScript", className: "tech-js", originalSrcDesktop: originalJS, originalSrcMobile: originalmobileJS, hasMobileOriginal: true },
    { src: REACT, alt: "React", className: "tech-react", originalSrcDesktop: originalReact, originalSrcMobile: originalmobileReact, hasMobileOriginal: true },
    { src: TS, alt: "TypeScript", className: "tech-ts", originalSrcDesktop: originalTS, originalSrcMobile: originalmobileTS, hasMobileOriginal: true },
    { src: TW, alt: "Tailwind", className: "tech-tailwind", originalSrcDesktop: originalTW, originalSrcMobile: originalmobileTW, hasMobileOriginal: true },
    { src: SQL, alt: "MySQL", className: "tech-mysql", originalSrcDesktop: originalSQL, originalSrcMobile: originalmobileSQL, hasMobileOriginal: true },
    { src: NODE, alt: "Node.js", className: "tech-node", originalSrcDesktop: originalNode, originalSrcMobile: originalmobileNode, hasMobileOriginal: true },
    { src: JEST, alt: "Jest", className: "tech-jest", originalSrcDesktop: originalJest, originalSrcMobile: originalmobileJest, hasMobileOriginal: true },
    { src: FIGMA, alt: "Figma", className: "tech-figma", originalSrcDesktop: originalFigma, originalSrcMobile: originalmobileFigma, hasMobileOriginal: true },
    { src: PYTHON, alt: "Python", className: "tech-python", originalSrcDesktop: originalPython, originalSrcMobile: originalmobilePython, hasMobileOriginal: true },
    { src: JQUERY, alt: "jQuery", className: "tech-jquery", originalSrcDesktop: originalJquery, originalSrcMobile: originalmobileJquery, hasMobileOriginal: true },
    { src: JIRA, alt: "Jira", className: "tech-jira", originalSrcDesktop: originalJira, originalSrcMobile: originalmobileJira, hasMobileOriginal: true },
    { src: TRELLO, alt: "Trello", className: "tech-trello", originalSrcDesktop: originalTrello, originalSrcMobile: originalmobileTrello, hasMobileOriginal: true },
    // Cypress é o único que mantém hiddenOnMobile e, por isso, só terá versão desktop original.
    // Ele não possui originalSrcMobile e hasMobileOriginal é false.
    { src: Cypress, alt: "Cypress", hiddenOnMobile: true, className: "tech-cypress", originalSrcDesktop: originalCypress, hasMobileOriginal: false },
];

function Techs() {
    return (
        <div className='flex flex-col items-center md:mt-16' id='tech'>
            <div className='md:mt-20'>
               
                <h3 className="hidden md:block md:text-[2.5rem] font-bold text-white text-2xl">Tecnologias</h3>
            </div>

            <div className="flex flex-col mt-14 items-center justify-center gap-1 px-4">
              
                <h3 className="md:hidden font-bold text-white text-2xl">Tecnologias</h3>

                {/* Grid para organizar os itens de tecnologia */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-2.5 gap-x-4 mt-6 max-w-6xl mx-auto">
                    {techs.map((tech, index) => {
                        // Verifica se a visualização é mobile (para esconder o Cypress)
                        // Acessando window.innerWidth de forma mais segura para SSR (Server-Side Rendering)
                        const isMobileView = typeof window !== 'undefined' && window.innerWidth <= 768; // 768px é o breakpoint padrão do Tailwind para 'md'
                        
                        // Se for mobile e a tecnologia estiver marcada para ser hiddenOnMobile, não renderiza nada
                        if (isMobileView && tech.hiddenOnMobile) {
                            return null;
                        }

                        return (
                            <motion.div
                                key={index}
                                variants={fadeIn("up", index * 0.1)}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: false, amount: 0.7 }}
                                // Aplica classes de layout Tailwind e classes CSS personalizadas para o efeito de hover
                                className={`
                                    w-[7.5rem] h-[7.5rem] md:w-[11rem] md:h-[11rem] 
                                    rounded-4xl bg-[#2B2E36] flex items-center justify-center p-2 
                                    ${tech.hiddenOnMobile ? 'hidden md:flex' : ''} 
                                    tech-item-container ${tech.className}
                                `}
                            >
                                {/* Wrapper para as imagens sobrepostas: uma personalizada e uma original */}
                                <div className="tech-image-wrapper">
                                    {/* Versão mobile da imagem personalizada */}
                                    {/* Condição: tech.src existe E o item NÃO está oculto no mobile (hiddenOnMobile) */}
                                    {tech.src && !tech.hiddenOnMobile && (
                                        <img
                                            src={tech.src}
                                            alt={`${tech.alt} Custom Mobile`}
                                            className="img-custom block md:hidden w-[3.75rem] h-[3.75rem]"
                                        />
                                    )}
                                    {/* Versão desktop da imagem personalizada */}
                                    {tech.src && (
                                        <img
                                            src={tech.src}
                                            alt={`${tech.alt} Custom Desktop`}
                                            // Se a tecnologia for HTML, aplica tamanho fixo para garantir consistência
                                            className={`img-custom hidden md:block ${tech.alt === "HTML" ? 'w-[6.25rem] h-[6.25rem]' : 'w-auto h-auto'}`}
                                        />
                                    )}
                                    {/* Versão mobile da imagem original */}
                                    {/* Condição: originalSrcMobile existe E o item NÃO está oculto no mobile E tem versão mobile original */}
                                    {tech.originalSrcMobile && !tech.hiddenOnMobile && tech.hasMobileOriginal && (
                                        <img
                                            src={tech.originalSrcMobile}
                                            alt={`${tech.alt} Original Mobile`}
                                            className="img-original block md:hidden w-[3.75rem] h-[3.75rem]"
                                        />
                                    )}
                                    {/* Versão desktop da imagem original */}
                                    {/* Condição: originalSrcDesktop existe */}
                                    {tech.originalSrcDesktop && (
                                        <img
                                            src={tech.originalSrcDesktop}
                                            alt={`${tech.alt} Original Desktop`}
                                            // Se a tecnologia for HTML, aplica tamanho fixo para garantir consistência
                                            className={`img-original hidden md:block ${tech.alt === "HTML" ? 'w-[6.25rem] h-[6.25rem]' : 'w-auto h-auto'}`}
                                        />
                                    )}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Techs;