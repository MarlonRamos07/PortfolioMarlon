import FotoPerfil from '../assets/perfil.svg'
import Download from '../assets/download.svg'
function Hero(){
    return(
        <>
        <div className='flex flex-col md:flex-row-reverse items-center md:justify-center md:gap-56 md:mt-24 md:items-center md:text-start text-center pt-10 gap-8'>
        <img src={FotoPerfil} className='md:w-[24.063rem] md:h-[24.063rem]'/>
        <div className='flex flex-col gap-6 items-center md:items-start md:gap-10'>
            <h2  className='font-bold text-2xl/relaxed text-white md:text-5xl/normal md:w-[45.625rem] '>Olá, eu sou Marlon, Desenvolvedor FullStack</h2>
            <p className='text-white h-[7.813rem] w-[14.875rem] text-[1rem]/loose md:text-2xl/relaxed md:w-[33.438rem] md:h-[6.5rem] md:text-start'>
               Especialista em <b>Front-End</b>, com habilidades <b>sólidas</b> em Back-End para entregar soluções <b>completas</b> e <b>eficientes para o seu projeto. </b>
            </p>
            <div className='flex flex-col md:flex-row gap-4 mt-10'>
            <button className='hover:border-solid-[#B2BAE5] hover:bg-[#2B2E36] hover:text-white w-[18.813rem] h-[3.688rem] rounded-[1.25rem] bg-[#B2BAE5]'>
                <a  className='font-bold text-[1.25rem]' href="">Conheça o meu trabalho</a>
            </button>
            <button className='hover:border-solid-[#B2BAE5] hover:bg-[#2B2E36] hover:text-white w-[18.813rem] h-[3.688rem] rounded-[1.25rem] bg-[#B2BAE5] items-center  flex justify-center gap-2'>
                <a className='font-bold text-[1.25rem]' href="">Baixar meu CV</a>
                <img src={Download}/>
            </button>
        </div>
        </div>
        
        </div>
       
        </>
    )
}

export default Hero