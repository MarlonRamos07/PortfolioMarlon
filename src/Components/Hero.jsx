import FotoPerfil from '../assets/perfil.svg'
import Download from '../assets/download.svg'
// Framer Motion 
import {motion} from 'framer-motion'
// variantes
import {fadeIn} from '../variants' 


function Hero(){
    return(
        <>
        <motion.div 
        variants={fadeIn("right", 0.2)}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{once: false, amount: 0.7}}
        
        className='flex flex-col md:flex-row-reverse items-center md:justify-center md:gap-56 md:mt-24 md:items-center md:text-start text-center pt-10 gap-8'>
        <motion.img 
        variants={fadeIn("right", 0.3)}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{once: false, amount: 0.7}}
        src={FotoPerfil} className='md:w-[24.063rem] md:h-[24.063rem]'/>
        <motion.div 
        variants={fadeIn("right", 0.2)}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{once: false, amount: 0.7}}
        className='flex flex-col gap-6 items-center md:items-start md:gap-10'>
            <motion.h2  
            variants={fadeIn("left", 1)}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{once: false, amount: 0.7}}
        className='font-bold text-2xl/relaxed text-white md:text-5xl/normal md:w-[45.625rem] '>Olá, eu sou Marlon, Desenvolvedor FullStack</motion.h2>
            <motion.p 
            variants={fadeIn("left", 0.7)}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{once: false, amount: 0.7}}

            className='text-white h-[7.813rem] w-[14.875rem] text-[1rem]/loose md:text-2xl/relaxed md:w-[33.438rem] md:h-[6.5rem] md:text-start'>
               Especialista em <b>Front-End</b>, com habilidades <b>sólidas</b> em Back-End para entregar soluções <b>completas</b> e <b>eficientes para o seu projeto. </b>
            </motion.p>
            <motion.div 
            variants={fadeIn("left", 0.8)}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{once: false, amount: 0.7}}
            className='flex flex-col md:flex-row gap-4 mt-10'>
            <button className='hover:border-solid-[#B2BAE5] hover:bg-[#2B2E36] hover:text-white w-[18.813rem] h-[3.688rem] rounded-[1.25rem] bg-[#B2BAE5]'>
                <a  className='font-bold text-[1.25rem]' href="">Conheça o meu trabalho</a>
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
       
        </>
    )
}

export default Hero