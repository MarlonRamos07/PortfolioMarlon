// src/Components/ScrollToTopButton.jsx
import React, { useState, useEffect } from 'react';

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Função para rolar para o topo suavemente
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Faz a rolagem suave
    });
  };

  // Adiciona um listener de evento de rolagem
  useEffect(() => {
    // Mostra o botão se a rolagem for maior que X pixels
    const toggleVisibility = () => {
      
      // O botão aparecerá quando o usuário rolar 400px para baixo.
      if (window.pageYOffset > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    // Limpa o listener de evento quando o componente é desmontado
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []); // O array vazio garante que o efeito só roda uma vez (montagem/desmontagem)

  return (
    <div className="fixed bottom-8 right-8 z-50"> {/* Posição fixa no canto inferior direito, z-index alto */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-[#B2BAE5] cursor-pointer text-black p-4 rounded-full shadow-lg hover:bg-blue-300 transition-colors duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75"
          aria-label="Voltar ao topo"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}
    </div>
  );
}

export default ScrollToTopButton;