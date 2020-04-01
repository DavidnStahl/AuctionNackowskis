import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Home'
import AddNewAuction from './AddNewAuction'
import Login from './Login'

const Main = React.memo(() => {
    return (
        <Switch>
            <Route path='/Home' component={Home}></Route>
            <Route path='/AddNewAuction' component={AddNewAuction}></Route>
            <Route exact path='/' component={Login}></Route>
        </Switch>
    )
})

export default Main