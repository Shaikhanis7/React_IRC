import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidup from './Pages/Sidup'
import Signup from './Pages/Signup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Signup/>
    </>
  )
}

export default App
