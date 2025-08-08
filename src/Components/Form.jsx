import React, { useEffect } from 'react'
import { useForm, ValidationError } from '@formspree/react'
import Swal from 'sweetalert2'

import Seta from '../assets/SendMSG.svg'
import SetaDesktop from '../assets/SendMSGDesktop.svg'

function Form () {
  const [state, handleSubmit] = useForm("xanjelre", { 
    headers: {
      'X-Requested-With': 'XMLHttpRequest'
    }
  })

  useEffect(() => {
    if (state.succeeded) {
      Swal.fire({ 
        title: 'Obrigado!',
        html: '<p>Sua mensagem foi enviada com sucesso. Em breve entrarei em contato!</p>',
        icon: 'success',
        confirmButtonText: 'Fechar',
        customClass: {
          container: 'my-swal-container',
          popup: 'my-swal-popup'
        }
      })
    }
  }, [state.succeeded, state.errors])

  return (
    <>
      <section className="flex flex-col items-center mt-28 gap-16 md:mt-72" id='contato'>
        <h2 className="text-white text-2xl font-bold font-['Space_Grotesk'] md:text-[2.5rem]">Em que posso lhe ajudar?</h2>
        
        <div className="bg-[#2B2E36] w-[18.75rem] h-[29.688rem] rounded-3xl flex flex-col p-10 md:w-[50.813rem] md:h-[57.625rem] md:p-28">
          <form
            className='flex flex-col gap-8 md:gap-12 justify-center'
            onSubmit={handleSubmit} 
          >
            <div className='flex flex-col gap-2 md:gap-6'>
              <label htmlFor='name' className='md:text-4xl font-bold text-white font-["Space_Grotesk"] text-[1rem]'>Seu nome</label>
              <input
                className='md:text-2xl font-bold text-[#2B2E36] text-[0.6rem] md:w-[35.75rem] md:h-[4.25rem] p-2 w-[12.813rem] h-[1.875rem] bg-[#B2BAE5] rounded-2xl focus:outline-none focus:ring-0' // Adicionado focus:outline-none
                type="text"
                placeholder="Digite seu nome"
                name="name" 
                required 
              />
              <ValidationError 
                prefix="Nome" 
                field="name"
                errors={state.errors}
              />
            </div>

            <div className='flex flex-col gap-2 md:gap-6' >
              <label htmlFor='email' className='md:text-4xl font-bold text-white font-["Space_Grotesk"] text-[1rem]' >Seu e-mail</label>
              <input
                className='md:text-2xl font-bold text-[#2B2E36] text-[0.6rem] md:w-[35.75rem] md:h-[4.25rem] md:p-4 p-2 w-[14.813rem] h-[1.875rem] bg-[#B2BAE5] rounded-2xl focus:outline-none focus:ring-0' // Adicionado focus:outline-none
                id="email"
                type="email"
                name="_replyto" 
                placeholder="Insira seu e-mail"
                required 
              />
              <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
              />
            </div>
             
            <div className='flex flex-col gap-2 md:gap-6'>
              <label className='md:text-4xl font-bold text-white font-["Space_Grotesk"] text-[1rem]'>Deixe sua mensagem!</label>
              <textarea
                className='md:text-2xl md:w-[35.75rem] md:p-4 md:h-[13.125rem] p-2 w-[14.313rem] h-[7.313rem] bg-[#B2BAE5] rounded-2xl focus:outline-none  focus:ring-0' 
                placeholder='Me conte sobre seu projeto, dúvida ou conecte-se comigo!'
                id="message"
                name="message"
                required 
              ></textarea>
              <ValidationError 
                prefix="Mensagem" 
                field="message"
                errors={state.errors}
              />
            </div>
             
            <button disabled={state.submitting} className='button-send hover:bg-[#121217] hover:text-white cursor-pointer md:w-[38rem] md:h-[6rem] flex items-center justify-center w-[14.75rem] h-[2.938rem] rounded-2xl bg-[#B2BAE5]' type="submit">
              <div className='flex gap-2 '>
                <span className='md:text-4xl font-bold font-["Space_Grotesk"] text-[1rem]'>Envie sua mensagem</span>
                <img src={Seta} className='button-arrow-icon md:hidden' alt="Seta para enviar"/>
                <img src={SetaDesktop} className='button-arrow-icon hidden md:block' alt="Seta para enviar"/>
              </div>
            </button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Form