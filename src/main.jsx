import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './styles/reset.css'
import './styles/index.css'

import Home from './pages/Home'
import Details from './pages/Details'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path='/' element={<Home />} />
          <Route path='/:id' element={<Details />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
