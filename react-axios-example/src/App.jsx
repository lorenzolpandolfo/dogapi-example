import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { api } from './axios/api'

function App() {
  const [count, setCount] = useState(0)
  const [dogImage, setDogImage] = useState("")

  const fetchDogImage = async () => {
    const response = await api.get("/breeds/image/random")
    setDogImage(response.data.message)
  }

  return (
    <>
    <img src={dogImage} alt="a dog image" />
    <button onClick={fetchDogImage} >pegar imagem cachorro</button>
    </>
  )
}

export default App
