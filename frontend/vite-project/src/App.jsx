import { useState } from 'react'
import './App.css'
import { Signup } from './pages/Signup'
import {Routes,Route, BrowserRouter} from 'react-router-dom'
import { Signin } from './pages/Signin'
import { Home } from './pages/Home'
import { SendMoney } from './pages/Sendmoney'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Signup/>} />
      <Route path="/signin" element={<Signin/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/transfer" element={<SendMoney/>}/>
    </Routes>
    </BrowserRouter>
   
    </>
  )
}

export default App
