import React from 'react';
import {NavLink} from 'react-router-dom'

const Navigation = () =>{
    
  return (<nav className="navbar navbar-expand-lg navbar-light bg-light">
      <ul className="navbar-nav mr-auto">
          <li className="nav-item"><NavLink exact to='/' className="nav-link">Home</NavLink></li>
          <li className="nav-item"><NavLink to='/AddNewAuction' className="nav-link">Add new auction</NavLink></li>

      </ul>
      <ul className="navbar-nav mr">
        <li  className="nav-item"><NavLink to='/Login' className="nav-link">Login</NavLink></li>
      </ul>
  </nav>   
  )
}

export default Navigation