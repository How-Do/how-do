import React from "react";
import {Switch, Route} from 'react-router-dom';
import AddPost from "./components/AddPost";
// import AddComment from "./components/AddComment";
// import BarChart from "./components/BarChart";
import Dashboard from "./components/Dashboard";
import Favorites from "./components/Favorites"
// import Landing from "./components/Landing";
// import Login from "./components/Login";
import Post from "./components/Post";
import Profile from "./components/Profile";
// import Recent from "./components/Recent";
// import Stats from './components/Stats';

// export default (
//     <Switch>
//         <Route exact path='/' component={Dashboard}/>
//         <Route path='/addPost' component={AddPost}/>
//         <Route path='/post/:id' component={Post}/>
//         <Route path='/profile' component={Profile}/>
//         <Route path='/favorites' component={Favorites}/>
//     </Switch>
// )

export default props => {
    
    return <Switch>
         <Route exact path='/' component={Dashboard}/>
         <Route path='/addPost' component={AddPost}/>
         <Route path='/post/:id' render={routerProps => <Post {...props} {...routerProps}/>}/>
         <Route path='/profile' component={Profile}/>
         <Route path='/favorites' component={Favorites}/>
     </Switch>
}