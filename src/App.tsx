// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Saludar from './components/Saludo'
import Perfil from './components/Perfil'
function App() {
  // const [count, setCount] = useState(0)
const user={
  nombre:'Pepito',
  edad :23,
  profesion:'Full stack'
}
  return (
    <>
    <Saludar nombre="Jefferson"/>
    <Perfil nombre={user.nombre} edad={user.edad} profesion={user.profesion}> 
    </Perfil>
    </>
  )
}

export default App
