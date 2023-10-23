import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'
import '../styles/App.css'
import Navbar from '../components/navbar'
import Header from '../components/header'
import HeadlineNews from '../components/headline'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header></Header>
        <Navbar></Navbar>
        <HeadlineNews></HeadlineNews>
      </div>
    </>
  )
}

export default App
