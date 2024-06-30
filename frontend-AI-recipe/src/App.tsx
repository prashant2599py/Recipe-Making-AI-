
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Signup } from './pages/Signup'
import Signin from './pages/Signin'
import Landing from './components/Landing'

function App() {


  return (
    <>
    <Landing />
      <BrowserRouter>
        <Routes>
            <Route path='/signup' element={<Signup />} />
            <Route path='/signin' element={<Signin />} />
        </Routes>      
      </BrowserRouter>    
    </>
  )
}

export default App
