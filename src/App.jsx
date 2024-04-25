import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import MainLayout from './components/MainLayout'
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'

import FlashCard from './pages/FlashCard'
import Mathematices from './pages/Mathematices'
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Home/>}/>
        <Route path='/flashcard' element={<FlashCard />}>
          <Route path='mathematices' element={<Mathematices/>}/>
        </Route>

      </Route>
    )
  )
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
