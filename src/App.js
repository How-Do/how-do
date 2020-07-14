import React from 'react'
import './App.css'
import Header from './components/Header'
import Post from './components/Post'
import Dashboard from './components/Dashboard'
import './styles/styles.css'

function App() {
  return (
    <div className='App'>
      <Header />
      {/* ⬇This is just to see the post form, this will be a route from our new post button ➕*/}
      <Post />
      <Dashboard />
    </div>
  )
}

export default App
