import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation from './Components/Navigation'
import Main from './Components/Main'
import SaveNewAuctionContext from './Contexts/SaveNewAuctionContext';
import GetOpenAuctionsContext from './Contexts/GetOpenAuctionsContext';
import LoginContext from './Contexts/LoginContext';

function App() {
  return (
    <div>
    
    <SaveNewAuctionContext>
    <GetOpenAuctionsContext>
    <LoginContext>
       <Navigation/>
       <Main/>
       </LoginContext>
       </GetOpenAuctionsContext>
       </SaveNewAuctionContext>
       
    </div>
  )
}

export default App;
