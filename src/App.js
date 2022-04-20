import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import ShoppingWindow from './components/ShoppingWindow'
import ShoppingList from './components/ShoppingList'

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<ShoppingList/>}/>
        <Route path='/window' element={<ShoppingWindow/>}/>

      </Routes>
      </BrowserRouter>

    </div>
  )
}
