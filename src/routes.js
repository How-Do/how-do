import React from "react";
import {Switch, Route} from 'react-router-dom';
import AddPost from "./components/AddPost";
import Dashboard from "./components/Dashboard";
import Favorites from "./components/Favorites"
import Post from "./components/Post";
import Profile from "./components/Profile";


export default props => {
    return <Switch>
         <Route exact path='/' render={routerProps => <Dashboard {...props} {...routerProps}/>}/>
         <Route path='/addPost' component={AddPost}/>
         <Route path='/post/:id' render={routerProps => <Post {...props} {...routerProps}/>}/>
         <Route path='/profile' component={Profile}/>
         <Route path='/favorites' component={Favorites}/>
     </Switch>
}