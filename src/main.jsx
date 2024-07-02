import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './Home/Home'
import Login from './components/Login.jsx'
import Register from './components/Register.jsx'
import Contact from './components/Contact.jsx'
import About from './components/About.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/about' element={<About />} />
    </Route>
  )
)

  ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)
