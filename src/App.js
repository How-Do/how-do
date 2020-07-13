import React from 'react'
import './App.css'
import Header from './components/Header'
import Post from './components/Post'

function App() {
  return (
    <div className='App'>
      <Header />
      {/* ⬇This is just to see the post form, this will be a route from our new post button ➕*/}
      <Post/>
    </div>
  )
}

export default App
