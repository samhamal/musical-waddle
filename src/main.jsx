import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import Calc from './calc.jsx'
import AgeCheck from './AgeCheck.jsx'
import Nasa from './Nasa.jsx'
import UserList from './UserList.jsx'
import Trivia from './Trivia.jsx'
import Github from './Github.jsx'
import TodoGrid from './TodoGrid.jsx'
import Router from './Router.jsx'
import Mui from './Mui.jsx'
import Firebase from './Firebase.jsx'
import Bookstore from './Bookstore.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> 
    {/*<Router />*/}
    <Bookstore />
  </React.StrictMode>,
)
