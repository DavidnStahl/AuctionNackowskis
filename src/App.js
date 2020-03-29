import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation from './Components/Navigation'
import Main from './Components/Main'
import SaveNewAuctionContext from './Contexts/SaveNewAuctionContext';
import GetAuctionsContext from './Contexts/GetAuctionsContext';
import LoginContext from './Contexts/LoginContext';
import DetailViewAuctionContext from './Contexts/DetailViewAuctionContext';

function App() {
  return (
    <div>
    
    <SaveNewAuctionContext>
    <GetAuctionsContext>
    <LoginContext>
    <DetailViewAuctionContext>
       <Navigation/>
       <Main/>
    </DetailViewAuctionContext>
    </LoginContext>
    </GetAuctionsContext>
    </SaveNewAuctionContext>
       
    </div>
  )
}

export default App;
