import "./App.css"
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import Home from './components/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap";
// import Playground from "./components/Playground"
import MySandpackComponent from "./components/CodeEditor"
import App from "./App"
let router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
      <Route path="/home" element={<Home/>}/>
      <Route path="/editor" element={<MySandpackComponent/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
