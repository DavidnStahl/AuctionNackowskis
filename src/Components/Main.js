import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Home'
import AddNewAuction from './AddNewAuction'

const Main = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route path='/AddNewAuction' component={AddNewAuction}></Route> 
        </Switch>
    )
}

export default Main