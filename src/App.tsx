
// import { Switch } from '@material-tailwind/react'
import './App.css'
import Login from './Page/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUp from './Page/SignUp'




function App() {
   

  return (
    <>

    <div>
      <BrowserRouter>
      <Routes>
       <Route index element={<Login/>} />
       <Route index element={<SignUp/>} />
      </Routes>
      </BrowserRouter>
    </div>
    
    
      
     
    </>
  )
}

export default App
