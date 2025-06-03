import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

function Sobre() {
  const [ref, inView] = useInView({
    threshold: 0.7,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-4 items-center md:mt-20 mt-10 md:items-start md:pl-72 md:gap-16 md:pt-10"
    >
      <h3 className="text-white text-2xl/normal font-bold md:text-[2.5rem]">Sobre Mim</h3>
      <p className="text-white text-center text-[0.938rem] w-[19.375rem] md:text-2xl/relaxed md:w-[54rem] md:h-[15rem] md:text-start">
        Desenvolvedor Fullstack com foco em <b>performance,</b> acessibilidade e <b>experiência do usuário.</b> Trabalho com <b>React, TypeScript, TailwindCSS, Jest e SQL,</b> unindo frontend moderno a testes robustos e integração com o back-end. Também atuo com <b>Figma,</b> garantindo <b>consistência</b> entre design e desenvolvimento. Busco sempre evoluir tecnicamente e entregar <b>soluções eficientes e escaláveis.</b>
      </p>
    </motion.div>
  )
}

export default Sobre
