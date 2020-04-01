import React from 'react';
import {NavLink} from 'react-router-dom'

const Navigation = React.memo(() =>{
    
  return (<nav className="navbar navbar-expand-lg bg-dark text-white">
      <ul className="navbar-nav mr-auto">
          <li id="home" className="nav-item" hidden><NavLink exact to='/Home' className="nav-link">Home</NavLink></li>
          <li id="addnewauction" className="nav-item" hidden><NavLink to='/AddNewAuction' className="nav-link">Add new auction</NavLink></li>

      </ul>
      <ul className="navbar-nav mr">
        <li  className="nav-item"><NavLink exact to='/' className="nav-link">Login</NavLink></li>
      </ul>
  </nav>   
  )
})

export default Navigation