import React from 'react'
import './App.css'
import Header from './components/Header'
import Post from './components/Post'
<<<<<<< HEAD
import Dashboard from './components/Dashboard'
import './styles/styles.css'
=======
import Dashboard from "./components/Dashboard";
import routes from "./routes";

//comment additions
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Home from './components/comments/Home';
>>>>>>> master

function App() {
  return (
    <div className='App'>
      <Header />
<<<<<<< HEAD
      {/* ⬇This is just to see the post form, this will be a route from our new post button ➕*/}
      <Post />
      <Dashboard />
=======
        {routes}
>>>>>>> master
    </div>
  )
}

export default App