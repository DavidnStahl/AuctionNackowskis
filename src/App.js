import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation from './Components/Navigation'
import Main from './Components/Main'
import SaveNewAuctionContext from './Contexts/SaveNewAuctionContext';
import GetOpenAuctionsContext from './Contexts/GetOpenAuctionsContext';

function App() {
  return (
    <div>
    
    <SaveNewAuctionContext>
    <GetOpenAuctionsContext>
       <Navigation/>
       <Main/>
       </GetOpenAuctionsContext>
       </SaveNewAuctionContext>
       
    </div>
  )
}

export default App;
