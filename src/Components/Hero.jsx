import FotoPerfil from '../assets/perfil.svg'
import Download from '../assets/download.svg'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
import { useInView } from 'react-intersection-observer'

function Hero() {
  const [ref, inView] = useInView({
    threshold: 0.7,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      // REVISADO: Foco total em md e lg, sem custom breakpoint
      // md:gap-x-16 para notebooks (tela md)
      // lg:gap-56 para desktops (tela lg e maiores)
      // md:px-8 para padding lateral em notebooks (tela md)
      // lg:px-0 para remover o padding em desktops (tela lg e maiores)
      className='flex flex-col md:flex-row-reverse items-center md:justify-center 
                 md:mt-24 md:items-center text-center pt-10 gap-8 
                 md:gap-x-16 lg:gap-56 md:px-8 lg:px-0' // <<< Ajustes aqui
    >
      <motion.img
        variants={fadeIn("right", 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        src={FotoPerfil}
        className='md:w-[24.063rem] md:h-[24.063rem]'
      />

      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className='flex flex-col gap-6 items-center md:items-start md:gap-10'
      >
        <motion.h2
          variants={fadeIn("down", 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className='font-bold text-2xl/relaxed text-white md:text-5xl/normal md:w-[45.625rem] md:text-start'
        >
          Olá, eu sou Marlon, Desenvolvedor FullStack
        </motion.h2>

        <motion.p
          variants={fadeIn("left", 0.7)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className='text-white h-[7.813rem] w-[14.875rem] text-[1rem]/loose md:text-2xl/relaxed md:w-[33.438rem] md:h-[6.5rem] md:text-start'
        >
          Especialista em <b>Front-End</b>, com habilidades <b>sólidas</b> em Back-End para entregar soluções <b>completas</b> e <b>eficientes para o seu projeto.</b>
        </motion.p>

        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className='flex flex-col md:flex-row gap-4 mt-10'
        >
          <button className='hover:border-solid-[#B2BAE5] hover:bg-[#2B2E36] hover:text-white w-[18.813rem] h-[3.688rem] rounded-[1.25rem] bg-[#B2BAE5]'>
            <a className='font-bold text-[1.25rem]' href="">Conheça o meu trabalho</a>
          </button>

          <a
            href="/curriculo.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="hover:border-solid-[#B2BAE5] hover:bg-[#2B2E36] hover:text-white w-[18.813rem] h-[3.688rem] rounded-[1.25rem] bg-[#B2BAE5] items-center flex justify-center gap-2"
          >
            <span className="font-bold text-[1.25rem]">Baixar meu CV</span>
            <img src={Download} alt="ícone de download" />
          </a>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Hero