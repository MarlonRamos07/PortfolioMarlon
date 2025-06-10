import { motion } from 'framer-motion'
import { fadeIn } from '../variants'

// Suas importações de SVG permanecem as mesmas
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

// Importe o CSS personalizado para os efeitos de hover (já feito)
import './TechsHoverEffect.css';

const techs = [
  // Mantenha as classes que mapeiam para as cores no CSS
  { src: HTML, alt: "HTML", className: "tech-html" }, 
  { src: CSS, alt: "CSS", className: "tech-css" },
  { src: JS, alt: "JavaScript", className: "tech-js" },
  { src: REACT, alt: "React", className: "tech-react" },
  { src: TS, alt: "TypeScript", className: "tech-ts" },
  { src: TW, alt: "Tailwind", className: "tech-tailwind" },
  { src: SQL, alt: "MySQL", className: "tech-mysql" },
  { src: NODE, alt: "Node.js", className: "tech-node" },
  { src: JEST, alt: "Jest", className: "tech-jest" },
  { src: FIGMA, alt: "Figma", className: "tech-figma" },
  { src: PYTHON, alt: "Python", className: "tech-python" },
  { src: JQUERY, alt: "jQuery", className: "tech-jquery" },
  { src: JIRA, alt: "Jira", className: "tech-jira" },
  { src: TRELLO, alt: "Trello", className: "tech-trello" },
  { src: Cypress, alt: "Cypress", hiddenOnMobile: true, className: "tech-cypress" },
];

function Techs() {
  return (
    <div className='flex flex-col items-center md:mt-16'>
      <div className='md:mt-20'>
        <h3 className="hidden md:block md:text-[2.5rem] font-bold text-white text-2xl">Tecnologias</h3>
      </div>

      <div className="flex flex-col mt-14 items-center justify-center gap-1 px-4">
        <h3 className="md:hidden font-bold text-white text-2xl">Tecnologias</h3>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-2.5 gap-x-4 mt-6 max-w-6xl mx-auto">
          {techs.map((tech, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", index * 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
              className={`
                w-[7.5rem] h-[7.5rem] md:w-[11rem] md:h-[11rem] 
                rounded-4xl bg-[#2B2E36] flex items-center justify-center p-2 
                ${tech.hiddenOnMobile ? 'hidden md:flex' : ''}
                tech-item-container ${tech.className}
              `}
            >
              {tech.alt === "HTML" ? (
                <>
                  <img
                    src={HTML}
                    alt="HTML"
                    className="block md:hidden w-[3.75rem] h-[3.75rem]"
                  />
                  <img
                    src={HTMLDesktop}
                    alt="HTML"
                    className="hidden md:block w-auto h-auto"
                  />
                </>
              ) : (
                <img
                  src={tech.src}
                  alt={tech.alt}
                  className="w-[3.75rem] h-[3.75rem] md:w-auto md:h-auto"
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Techs;