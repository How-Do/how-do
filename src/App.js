import React from 'react'
import './App.css'
import Header from './components/Header'
import Post from './components/Post'
import Dashboard from './components/Dashboard'
import './styles/styles.css'
import routes from './routes'

//comment additions
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Home from './components/comments/Home';

function App() {
  return (
    <div className='App'>
      <Header />
      {routes}
    </div>
  )
}

export default App
