import React from 'react'
import { useState } from 'react'

import {BrowserRouter,Routes,Route}  from "react-router-dom"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Header from './components/Header'
import Heroes from './components/Heroes'
import uploadProvider from './components/context/UploadProvider'
import Uploads from './components/Uploads'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Heroes/>

    <uploadProvider>
      <Uploads/>
    </uploadProvider>
   
    </>
  )
}

export default App
