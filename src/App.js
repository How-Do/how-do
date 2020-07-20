import React, {useEffect} from 'react'
import './App.css'
import Header from './components/Header'
import './styles/styles.css'
import routes from './routes'
import AddPost from "./components/AddPost";
import {useDispatch} from "react-redux";
import axios from 'axios';
import io from "socket.io-client";
import {setUser} from "./redux/reducer";
const socket = io.connect("http://localhost:4000");

//comment additions
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Home from './components/comments/Home';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get('api/setUser')
            .then((res) => dispatch(setUser(res.data)))
            .catch(error => console.log(error))
    },[])

  return (
    <div className='App'>
      <Header />
      {routes({socket})}
      <AddPost className="AddPost-container" socket={socket}/>

    </div>
  )
}

export default App
