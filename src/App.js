import React, {useEffect, useState} from 'react'
import './App.css'
import Header from './components/Header'
import Post from './components/Post'
import Dashboard from './components/Dashboard'
import './styles/styles.css'
import routes from './routes'
import AddPost from "./components/AddPost";
import io from "socket.io-client";
const socket = io.connect("http://localhost:4000");

//comment additions
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Home from './components/comments/Home';

function App() {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    socket.on("sent-post", (body) => {
        // alert(body.content)
        console.log(body)
        setPosts(body)
    })
  },[])


  return (
    <div className='App'>
      <Header />
      {routes({socket})}
      <AddPost socket={socket}/>

    </div>
  )
}

export default App
