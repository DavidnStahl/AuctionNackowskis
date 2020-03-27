import React, {createContext,useState,useEffect} from 'react';

export const GetOpenAuctionsContext = createContext();

const url = "https://nackowskis.azurewebsites.net/api/Auktion/2240"

const GetOpenAuctionsContextProvider = (props) => {
    const [AuctionsToShow, setAuctionsToShow] = useState([]);
     
    useEffect(() => {

    },[setAuctionsToShow])

    const getOpenAuctions = () =>{
        fetch(url).then(res => res.json()).then((data) => {

          let filteredData = data.filter(auction => new Date(auction.SlutDatum) > Date.now())
          setAuctionsToShow(filteredData)              
        })
    }    
                       
     return (
          <GetOpenAuctionsContext.Provider value={[AuctionsToShow, setAuctionsToShow,getOpenAuctions]}>
            {props.children}
          </GetOpenAuctionsContext.Provider>
  )   
}

export default GetOpenAuctionsContextProvider


