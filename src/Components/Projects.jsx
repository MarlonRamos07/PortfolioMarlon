import { useState, useEffect, useRef } from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'flowbite-react'; 
import { motion, AnimatePresence } from 'framer-motion';
import MyDropdown from './MyDropdown'; 
import { ProjectModal } from './ProjectModal';


import HongLanding from '../assets/HongLanding.png';
import DNCLanding from '../assets/DNCLanding.png';
import FitQuestLanding from '../assets/FitQuest.png';
import Portfolio from '../assets/Portfolio.png';
import DigitalAgency from '../assets/DigitalAgency.png';
import DoctorCare from '../assets/DoctorCare .png';
import Arquitetura from '../assets/Arquitetura.png';
import DncWeather from '../assets/DncWeather.png';
import ToDo from '../assets/ToDoList.png';


const projects = [
  { id: 'lp1', type: 'Landing-Page', image: HongLanding, title: 'Hong Long', synopsis: 'Uma landing sobre delivery de comida chinesa', description: 'Uma landing page que nasceu da Disciplina de Engenharia de Software, sobre um aplicativo fictício de Delivery de comida Chinesa Tradicional, o projeto passo por todos os processos de Desenvolvimento de um Software, desde levantamento de requisitos, casos de uso, até, de fato, o desenvolvimento, uma landing para o app que será desenvolvido.', stack: ['React', 'TailwindCSS', 'Flowbite React'], projectLink: 'https://hong-long.vercel.app', githubLink: 'https://github.com/MarlonRamos07/Hong-Long-Landing' },
  { id: 'lp2', type: 'Landing-Page', image: DNCLanding, title: 'DNC School', synopsis: 'Landing Page de uma Escola de Desenvolvimento', description: 'Uma landing page desenvolvida no ciclo base do curso de formação de Desenvolvedor FullStack da Escola DNC', stack: ['HTML', 'CSS', 'Javascript'], projectLink: 'https://lp-teste-dnc.netlify.app', githubLink: 'https://github.com/MarlonRamos07/projeto-landing-page' },
  { id: 'lp3', type: 'Landing-Page', image: FitQuestLanding, title: 'FitQuest', synopsis: 'Landing Page de um aplicativo Tracker de Bem Estar', description: 'FitQuest é uma landing page desenvolvida em um trabalho integrado das disciplinas de UX Experience e Desenvolvimento de Interfaces Web do Unisenac, com o objetivo de apresentar e promover um aplicativo fictício de monitoramento de exercícios físicos. Todo esse projeto de landing page — do design no Figma à implementação do código — foi criado por mim, com foco em boas práticas de desenvolvimento front-end,e interatividade com JavaScript.', stack: ['HTML', 'CSS', 'Javascript'], projectLink: 'https://fit-quest-landing-page.vercel.app/', githubLink: 'https://github.com/MarlonRamos07/FitQuest-Landing-Page' },
  { id: 'lp4', type: 'Landing-Page', image: Portfolio, title: 'Portfólio Maria', synopsis: 'Landing Page de um portfólio para uma cliente fictícia', description: 'Esse projeto consiste em um portfólio criado para um cliente específico, focado em ter um design moderno e atual e uma interface convidativa para converter em vendas a partir do visual e da facilidade de visualização dos projetos desse cliente.', stack: ['HTML', 'CSS'], projectLink: 'https://porfoliodncpage.netlify.app', githubLink: 'https://github.com/MarlonRamos07/PortFolioPage' },
  { id: 'lp5', type: 'Landing-Page', image: DigitalAgency, title: 'Digital Agency', synopsis: 'Landing para uma Agência Digital Fictícia', description: 'Esse projeto consiste em uma landing page moderna e com visual consistente para que a empresa em questão consiga converter vendas através das visitas', stack: ['HTML', 'TailwindCSS'], projectLink: 'https://tailwind-lp-1-pugm.vercel.app', githubLink: 'https://github.com/MarlonRamos07/Tailwind-LP1' },
  { id: 'lp6', type: 'Landing-Page', image: DoctorCare, title: 'DoctorCare', synopsis: 'Landing Responsiva para uma página de Doutores', description: 'Página responsiva utilizando a responvidade nativa do Tailwind, componentes do FlowBite React e o próprio react', stack: ['React', 'TailwindCSS'], projectLink: 'https://tailwind-lp-3.vercel.app', githubLink: 'https://github.com/MarlonRamos07/Tailwind---LP3' },
  { id: 'w1', type: 'Website', image: Arquitetura, title: 'Dnc Arquitetura', synopsis: 'WebSite para Empresa de Arquitetura', description: 'DNC-Arq-Project é um projeto desenvolvido com React sobre uma página para uma empresa fictícia de arquitetura, com foco em navegação entre páginas utilizando React Router, consumo de APIs públicas e estilização com HTML e CSS. Este projeto faz parte do curso FullStack da DNC School.', stack: ['React', 'CSS'], projectLink: 'https://dnc-arq-project.vercel.app', githubLink: 'https://github.com/MarlonRamos07/DNC-Arq-Project' },
  { id: 's1', type: 'Sistema', image: DncWeather, title: 'Weather DnC', synopsis: 'Sistema com previsão do tempo com base em localização.', description: 'DNC Weather é um sistema que consiste em consumir os dados de uma Api de Endereço, a ViaCEP e a outra é a de Previsão do tempo, para, através de uma interface, conseguir visualizar a previsão do tempo para a sua localização exata.', stack: ['Javascript', 'HTML', 'CSS'], projectLink: 'https://desafio2-dnc.netlify.app', githubLink: 'https://github.com/MarlonRamos07/Desafio2-DNC' },
  { id: 's2', type: 'Sistema', image: ToDo, title: 'ToDO Typescript', synopsis: 'Sistema simples de gerenciamento de Tarefas em Typescript.', description: 'É um sistema simples de gerenciamento de Tarefas em Typescript que permite adicionar tarefas, marcá-las como concluídas e também removê-las da lista de tarefas.', stack: ['Typescript', 'HTML', 'CSS'], projectLink: 'https://to-do-list-type-script-xi.vercel.app', githubLink: 'https://github.com/MarlonRamos07/ToDoList-TypeScript-' },
]


function Projects() {
  const [activeCategory, setActiveCategory] = useState(null)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  // Estados para o Modal
  const [openModal, setOpenModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleSelectCategory = (categoryType) => {
    setActiveCategory(categoryType)
  }

  // Função para abrir o modal com o projeto correto
  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setOpenModal(true);
  };

  // Função para fechar o modal
  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedProject(null); // Limpa o projeto selecionado ao fechar
  };


  const landingPagesProjects = projects.filter(p => p.type === 'Landing-Page')
  const websitesProjects = projects.filter(p => p.type === 'Website')
  const sistemasProjects = projects.filter(p => p.type === 'Sistema')


  // --- Componente auxiliar: DraggableCarousel (AUTÔNOMO) ---
  const DraggableCarousel = ({ projectsList, title }) => {
    const carouselRef = useRef(null)
    const [constraintsWidth, setConstraintsWidth] = useState(0)
    const [isMobileInternal, setIsMobileInternal] = useState(window.innerWidth < 768)

    useEffect(() => {
      const updateWidthAndMobile = () => {
        setIsMobileInternal(window.innerWidth < 768)
        if (carouselRef.current) {
          const contentWidth = carouselRef.current.scrollWidth
          const viewportWidth = carouselRef.current.offsetWidth
          setConstraintsWidth(Math.max(0, contentWidth - viewportWidth))
        }
      }

      const timeoutId = setTimeout(updateWidthAndMobile, 50) 

      window.addEventListener('resize', updateWidthAndMobile)

      return () => {
        clearTimeout(timeoutId)
        window.removeEventListener('resize', updateWidthAndMobile)
      }
    }, [projectsList.length])

    const canDrag = constraintsWidth > 0

    return (
      <motion.section
        key={title.toLowerCase().replace(/\s/g, '-') + '-section'}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className='mt-4 w-full max-w-4xl shadow-md rounded-lg p-6'
      >
        <h2 className='text-2xl font-bold text-white mb-6 text-center'>{title}</h2>
        
        {projectsList.length > 0 ? (
          <motion.div
            ref={carouselRef}
            className='carrossel overflow-hidden '
            whileTap={{ cursor: canDrag ? 'grabbing' : 'grab' }}
          >
            <motion.div
              id='projects'
              className='inner flex flex-nowrap gap-6 md:gap-8 mt-8'
              drag={canDrag ? 'x' : false}
              dragConstraints={{ right: 0, left: -constraintsWidth }}
              dragElastic={0}
            >
              {projectsList.map(project => (
                <div
                  key={project.id}
                  className='p-1 md:flex-none ml-3 md:ml-0 '
                  style={{ minWidth: isMobileInternal ? `calc(100% - 1.5rem)` : `calc(50% - 1.5rem)` }}
                >
                  <div className='bg-[#2B2E36] rounded-2xl p-4 h-full flex flex-col justify-between'>
                    <img
                      src={project.image}
                      alt={project.title}
                      className='w-[17.5rem] h-[8.375rem] rounded-3xl md:w-[36.75rem] md:h-[18.625rem] object-cover mx-auto'
                    />
                    <div className='flex flex-col gap-4 items-start mt-4'>
                      <h5 className='font-["Space_Grotesk"] font-bold text-white text-[1.5rem] md:text-[2rem]'>{project.title}</h5>
                      <p className='text-white md:text-xl font-["Space_Grotesk"]'>
                        {project.synopsis}
                      </p>
                      
                      <Button 
                        onClick={() => handleOpenModal(project)} // Chama a função para abrir o modal com o projeto atual
                        className='cursor-pointer mt-auto w-full !bg-[#B2BAE5] !text-black font-["Space_Grotesk"] md:hover:!bg-[#A3A6B2] md:hover:!text-white focus:!outline-none focus:!ring-0 focus:!shadow-none'
                      >
                        <span className='bold '>Detalhes</span>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        ) : (
          <p className='text-center text-gray-600 w-full'>Nenhum projeto de {title.replace('Nossas ', '').replace('Nossos ', '')} encontrado.</p>
        )}
      </motion.section>
    )
  }


  return (
    <>
      <section className='flex flex-col items-center justify-center gap-16 mt-16 md:mt-36 md:gap-12 mb-20' id="projects">
        <h2 className="text-white text-2xl font-bold font-['Space_Grotesk'] md:text-[2.5rem] mt-10">Meus projetos</h2>
        <h3 className='text-white md:text-2xl text-center'>Por favor, escolha uma categoria abaixo <br/>(arraste para ver) </h3>
        
        <MyDropdown onSelectSection={handleSelectCategory}/>
        
        <AnimatePresence mode='wait'>
            {activeCategory === 'Landing-Page' && (
                <DraggableCarousel
                    projectsList={landingPagesProjects}
                    title='Minhas Landing Pages'
                />
            )}
            {activeCategory === 'Website' && (
                <DraggableCarousel
                    projectsList={websitesProjects}
                    title='Meus Websites'
                />
            )}
            {activeCategory === 'Sistema' && (
                <DraggableCarousel
                    projectsList={sistemasProjects}
                    title='Meus Sistemas e Soluções'
                />
            )}
            {!activeCategory && (
                <motion.div
                    key='select-category-message'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className='font-["Space_Grotesk"] mt-4 w-full max-w-4xl bg-transparent p-6 text-center text-white md:text-2xl'
                >
                    Selecione uma categoria para ver os projetos.
                </motion.div>
            )}
        </AnimatePresence>
      </section>

      {/* Renderiza o Modal FORA do carrossel, mas no mesmo componente pai */}
      {/* O modal só é visível se openModal for true e selectedProject não for null */}
      <ProjectModal 
        project={selectedProject} 
        openModal={openModal} 
        onClose={handleCloseModal} 
      />
    </>
  )
}

export default Projects