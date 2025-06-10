import WhatsMobile from '../assets/whatsIcon.svg'
import WhatsDesktop from '../assets/whatsDesktop.svg'

function Whats(){
    return(
        
        <section className="flex flex-col items-center mt-12 gap-6 pb-8 md:mt-36 md:pb-16 md:gap-16">
            <h2 className="text-white text-2xl font-bold font-['Space_Grotesk'] md:text-[2.5rem]">Ou se preferir...</h2>

            <button type='submit' className='cursor-pointer md:w-[40.875rem] md:h-[8rem] w-[18rem] h-[3.375rem] rounded-4xl bg-[#B2BAE5] flex items-center justify-center'>
                <a className='md:text-3xl items-center font-bold flex gap-3.5' href="https://wa.me/5553981649558?text=Olá,%20vim%20do%20seu%20portfólio!">Me chame no whatsapp
                <img src={WhatsMobile} className='md:hidden'/>
                <img src={WhatsDesktop} className='md:block hidden'/>
                </a>
            </button>
        </section>
        
    )
}

export default Whats