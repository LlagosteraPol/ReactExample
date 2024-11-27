import './App.css'
import { useEffect, useState } from "react"

const FollowMouse = () => {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 }) //una buena practica es inizializar el estado con el tipo que se va a utilizar

  // no tiene sentido poner un "window.addEventListener()" solo ya que se va a ejecutar SIEMPRE que se renderize el componente,
  // se tiene que controlar cuando nos vamos a subscribir a un evento, y esto se hace utilizando el "useEffect()"
  useEffect(() => {
    const handleMove = (event) => {
      const { clientX, clientY } = event
      setPosition({ x: clientX, y: clientY })
    }
    
    if (enabled)
      window.addEventListener('pointermove', handleMove)

    // cleanup:
    // -> cuando el componente se desmonta
    // -> cuando cambian las dependencias, antes de ejecutar
    //    el efecto de nuevo
    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled])

  // [] -> solo se ejecuta una vez cuando se monta el componente
  // [enabled] -> se ejecuta cuando cambia enabled y cuando se monta el componente
  // undefined -> se ejecuta cada vez que se renederiza el componente

  // change body className
  useEffect(() => {
    document.body.classList.toggle('no-cursor', enabled)

    return () => {
      document.body.classList.remove('no-cursor')
    }
  }, [enabled])

  return (
    <>
      <div style={{
        position: 'absolute',
        backgroundColor: '#09f',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 40,
        height: 40,
        transform: `translate(${position.x}px, ${position.y}px)`
      }}
      />
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? 'Desactivar' : 'Activar'} seguir puntero
      </button>
    </>
  )
}


function App() {
  const [mounted, setMounted] = useState(true)
  return (
    <main>
      {mounted && <FollowMouse/>}
      <button onClick={() => setMounted(!mounted)}>
        Toggle mounted FollowMouse component
      </button>
    </main>
  )
}

export default App
