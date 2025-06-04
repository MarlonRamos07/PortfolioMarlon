import React, { useState, useEffect, useMemo, useRef } from 'react'

const TypingEffect = () => {
  const basePhrase = "Olá, eu sou Marlon, "

  const variablePhrases = useMemo(() => [
    "Desenvolvedor FullStack",
    "Estudante de ADS UniSenac",
    "Bem-vindo ao meu Portfólio!",
  ], [])

  const [currentVariablePhraseIndex, setCurrentVariablePhraseIndex] = useState(0)
  const [currentTypedVariableText, setCurrentTypedVariableText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [hasStartedTyping, setHasStartedTyping] = useState(false)

  const typingSpeedRef = useRef(150)
  const deletingSpeedRef = useRef(75)
  const pauseDelayRef = useRef(1500)
  const initialDelayRef = useRef(2000)

  useEffect(() => {
    if (!hasStartedTyping) {
      const initialTimer = setTimeout(() => {
        setHasStartedTyping(true)
      }, initialDelayRef.current)
      return () => clearTimeout(initialTimer)
    }

    if (!hasStartedTyping) {
      return
    }

    let timeoutId
    const currentFullVariablePhrase = variablePhrases[currentVariablePhraseIndex]

    const handleTyping = () => {
      if (isDeleting) {
        setCurrentTypedVariableText(prev => prev.substring(0, prev.length - 1))
      } else {
        setCurrentTypedVariableText(prev => currentFullVariablePhrase.substring(0, prev.length + 1))
      }
    }

    if (!isDeleting && currentTypedVariableText === currentFullVariablePhrase) {
      timeoutId = setTimeout(() => setIsDeleting(true), pauseDelayRef.current)
    } else if (isDeleting && currentTypedVariableText === '') {
      setIsDeleting(false)
      setCurrentVariablePhraseIndex(prevIndex => (prevIndex + 1) % variablePhrases.length)
    } else {
      const speed = isDeleting ? deletingSpeedRef.current : typingSpeedRef.current
      timeoutId = setTimeout(handleTyping, speed)
    }

    return () => clearTimeout(timeoutId)
  }, [currentVariablePhraseIndex, currentTypedVariableText, isDeleting, variablePhrases, hasStartedTyping])

  return (
    <h2 className="font-bold text-2xl/relaxed text-white md:text-5xl/normal md:w-[45.625rem] md:text-start">
      {basePhrase}
      <br className="md:hidden" />
      {currentTypedVariableText}
      <span className="animate-blink">|</span>
    </h2>
  )
}

export default TypingEffect