import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { Card } from "flowbite-react"
import Milene from '../assets/Milene1.jpg' 
import Pablo from '../assets/Pablo.jpg' 
import Luis from '../assets/Luis.jpg'
const testimonialsData = [
  {
    id: 'milene',
    name: 'Milene da Luz',
    role: 'Designer',
    image: Milene,
    quote: 'Compartilhar experiências profissionais junto com o Marlon é uma honra, ele é muito dedicado e bota sentimento em cada trabalho de forma natural, acredito que qualquer um que se envolva profissionalmente com ele vai querer indicá-lo para todos.',
  },
  {
    id: 'pablo',
    name: 'Pablo Knapp',
    role: 'Desenvolvedor Web',
    image: Pablo,
    quote: 'Foi uma ótima experiência criar projetos ao lado do Marlon, é um cara comprometido, com boa capacidade técnica e sempre disposto a colaborar no desenvolvimento.',
  },
  {
    id: 'luis',
    name: 'Luis Matheus',
    role: 'Desenvolvedor Web',
    image: Luis,
    quote: 'Trabalhar junto com o Marlon foi muito bom, um cara proativo disposto ajudar a todos com o que sabe.',
  }
]

function Testimonials() {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1,
      spacing: 16,
    },
    breakpoints: {
    "(min-width: 1024px)": {
      slides: { perView: 2, spacing: 24 },
    },
  },
    drag: false, // Desativa o arrastar manual
  })

  return (
    <section className="flex flex-col items-center gap-8 px-4 md:px-8" id="depoimentos">
      <h2 className="text-white text-2xl font-bold font-['Space_Grotesk'] md:text-[2.5rem]">
        O que falam sobre mim
      </h2>

      <div className="relative w-full max-w-6xl">
        <div ref={sliderRef} className="keen-slider">
          {testimonialsData.map((testimonial) => (
            <div key={testimonial.id} className="keen-slider__slide flex justify-center">
              <Card
                className="
                  bg-[#2B2E36]
                  border-0
                  flex flex-col 
                  items-center 
                  text-center 
                  p-4 md:p-6 md:pb-10 
                  w-full sm:w-[calc(50%-1rem)] md:w-[22rem]
                  min-h-[22rem] md:min-h-[24rem] 
                  max-w-xs md:max-w-md
                "
              >
                <div className="flex flex-col items-center pb-0 gap-4 w-full h-full">
                  <img 
                    alt={testimonial.name} 
                    src={testimonial.image} 
                    className="w-[7rem] h-[7rem] rounded-full object-cover" 
                  />
                  <h5 className="mb-1 text-2xl font-medium text-white dark:text-white">{testimonial.name}</h5>
                  <span className="font-bold text-white text-xl">{testimonial.role}</span>
                  <p className="text-sm text-white dark:text-gray-400 px-4 md:px-0 flex-grow"> 
                    <i>"{testimonial.quote}"</i>
                  </p>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={() => instanceRef.current?.prev()}
          className="cursor-pointer absolute left-0 top-1/2 -translate-y-1/2 bg-[#B2BAE5] text-black p-2 rounded-full shadow hover:bg-gray-200"
        >
          ←
        </button>
        <button
          onClick={() => instanceRef.current?.next()}
          className="cursor-pointer absolute right-0 top-1/2 -translate-y-1/2 bg-[#B2BAE5] text-black p-2 rounded-full shadow hover:bg-gray-200"
        >
           →
        </button>
      </div>
    </section>
  )
}

export default Testimonials
