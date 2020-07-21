import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'


const ProtectedRoute = (props) => {
    const {path, component} = props
    

    const isLoggedIn = useSelector(
        (reduxState) => reduxState.reducer.user
    )

    // const isAdmin = useSelector(
    //     (reduxState) => reduxState.user.is_admin
    // )
  
    if(isLoggedIn){
        return <Route path={path} component={component}/>
    } else {
        return <Redirect to='/' />
    }
      
}

export default ProtectedRoute