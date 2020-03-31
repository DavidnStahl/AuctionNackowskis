import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Home'
import AddNewAuction from './AddNewAuction'
import Login from './Login'

const Main = React.memo(() => {
    return (
        <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route path='/AddNewAuction' component={AddNewAuction}></Route>
            <Route path='/Login' component={Login}></Route>
        </Switch>
    )
})

export default Main