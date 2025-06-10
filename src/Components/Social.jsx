import './SocialIcons.css';

function Social() {
    return (
        <>
            <section className='flex flex-col items-center gap-8 mt-14'>
                <h2 className="text-white text-2xl font-bold font-['Space_Grotesk'] md:text-[2.5rem] mt-10">Conecte-se Comigo!</h2>
                
                
                <ul className='flex flex-col gap-8 md:flex-row'> 
                    
                    <li>
                        {/* Aplica a classe CSS personalizada e a classe de cor específica */}
                        <a 
                            href="https://www.instagram.com/marlon_ramos07/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="social-icon-btn social-icon-instagram"
                        >
                            <i className="fab fa-instagram icon"></i>
                        </a>
                    </li>

                    <li>
                        <a 
                            href="https://github.com/MarlonRamos07" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="social-icon-btn social-icon-github"
                        >
                            <i className="fab fa-github icon"></i>
                        </a>
                    </li>

                    <li>
                        <a 
                            href="https://www.linkedin.com/in/marlon-ramos-da-costa/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="social-icon-btn social-icon-linkedin"
                        >
                            <i className="fab fa-linkedin-in icon"></i>
                        </a>
                    </li>
                </ul>
            </section>
        </>
    );
}

export default Social;