import React from 'react'
import './App.css'
import Header from './components/Header'
import Post from './components/Post'
import Dashboard from "./components/Dashboard";

//comment additions
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Home from './components/comments/Home';

function App() {
  return (
    <div className='App'>
      <Header />
      <Dashboard />
      {/* ⬇This is just to see the post form, this will be a route from our new post button ➕*/}
      {/* <AddPost/> */}
    </div>
  )
}

export default App