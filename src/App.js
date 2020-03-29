import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation from './Components/Navigation'
import Main from './Components/Main'
import SaveNewAuctionContext from './Contexts/SaveNewAuctionContext';
import GetAuctionsContext from './Contexts/GetAuctionsContext';
import LoginContext from './Contexts/LoginContext';

function App() {
  return (
    <div>
    
    <SaveNewAuctionContext>
    <GetAuctionsContext>
    <LoginContext>
       <Navigation/>
       <Main/>
    </LoginContext>
    </GetAuctionsContext>
    </SaveNewAuctionContext>
       
    </div>
  )
}

export default App;
