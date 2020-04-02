import React, {createContext,useState,useEffect,useContext} from 'react';

export const GetAuctionsContext = createContext();

const url = "https://nackowskis.azurewebsites.net/api/Auktion/2240"

const GetAuctionsContextProvider = (props) => {

    const [AuctionsToShow, setAuctionsToShow] = useState([])
    
    const getSearchedResultAuctions = async (searchInput) =>{      
      await fetch(url).then(res => res.json()).then((data) => {
        if(searchInput === undefined) {          
          let x = data.sort((a,b)=>new Date(a.SlutDatum)-new Date(b.SlutDatum));
          setAuctionsToShow(x)
        }else if(searchInput === "open"){
          let y = Date.now()
          y += 3600000
          let filteredData = data.filter(auction => new Date(auction.SlutDatum) > y)
          let x = filteredData.sort((a,b)=>new Date(a.SlutDatum)-new Date(b.SlutDatum));
          console.log(x)
          setAuctionsToShow(x)
        }
        else{
          let filteredData = data.filter(auction => auction.Titel.toLowerCase().startsWith(searchInput.toLowerCase()));
          let x = filteredData.sort((a,b)=>new Date(a.SlutDatum)-new Date(b.SlutDatum));  
        setAuctionsToShow(x)
        }})
  }                            
     return (
          <GetAuctionsContext.Provider value={[AuctionsToShow, setAuctionsToShow,getSearchedResultAuctions]}>
            {props.children}
          </GetAuctionsContext.Provider>
  )   
}

export default GetAuctionsContextProvider


