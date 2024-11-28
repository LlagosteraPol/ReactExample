import { useEffect, useState } from 'react'
import './App.css'


const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
//const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com/cat/says/'


function App() {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()
  const [factError, setFactError] = useState()

  // recuperar la cita al cargar la página
  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => {
        if(!res.ok) throw new Error('Error fetching fact')
        return res.json()
      })
      .then(data => {
        const { fact } = data
        setFact(fact) 
      })
      .catch((err) => {
        // tanto si hay error con la respuesta
        // como si hay un error con la petición
      })
  }, [])

  // para recuperar la imagen cada vez que tenemos una cita nueva
  useEffect(() => {
    if (!fact) return
    const threeFirstWord = fact.split(' ', 3).join(' ')
    setImageUrl(threeFirstWord)
    // Not working with the new API update (they don't show anymore the url in the json)
    /*fetch(`https://cataas.com/cat/says/${threeFirstWord}`)
          .then(res => res.json())
          .then(response => { 
            const { url } = response
            setImageUrl(url)
          })*/
  }, [fact])

  return (
    <main>
      <h1>Catapp</h1>
      <section>
        {fact && <p>{fact}</p>}
        {imageUrl && <img src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`} alt={`Image extracted using the first trhee words for ${fact}`}/>}
      </section>
    </main>
  )
}

export default App
