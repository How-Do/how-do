import React from "react";
import {Switch, Route} from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute'
import AddPost from "./components/AddPost";
import Dashboard from "./components/Dashboard";
import Favorites from "./components/Favorites"
import Post from "./components/Post";
import Profile from "./components/Profile";
import Register from "./components/Register";


export default props => {
    return <Switch>
         <Route exact path='/' render={routerProps => <Dashboard {...props} {...routerProps}/>}/>
         <Route path='/addPost' component={AddPost}/>
         <Route path='/post/:id' render={routerProps => <Post {...props} {...routerProps}/>}/>
         <ProtectedRoute path='/profile' component={Profile}/>
         <Route path='/favorites' component={Favorites}/>
         <Route path='/register' component={Register}/>
     </Switch>
}