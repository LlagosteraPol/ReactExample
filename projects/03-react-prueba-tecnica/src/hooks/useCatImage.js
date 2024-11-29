import { useEffect, useState } from 'react'

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com/cat/says/'
//const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`

// To create a custom hook you need to start the function with
// "use" to let know react that is a custom hook
// Note: You cannot call hooks in normal functions
export function useCatImage ({ fact }) {
   const [imageUrl, setImageUrl] = useState()
 
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
   return { imageUrl: `${CAT_PREFIX_IMAGE_URL}${imageUrl}` }
 }