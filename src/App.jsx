import React from 'react'
import View from './Components/View'
import Add from './Components/Add'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
      <Route path='/'element={<View/>}></Route>
      <Route path='/Add'element={<Add/>}></Route>
     </Routes>
    </div>
  )
}

export default App