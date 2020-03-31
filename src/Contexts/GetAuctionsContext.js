import React, {createContext,useState,useEffect} from 'react';

export const GetAuctionsContext = createContext();

const url = "https://nackowskis.azurewebsites.net/api/Auktion/2240"

const GetAuctionsContextProvider = (props) => {

    const [AuctionsToShow, setAuctionsToShow] = useState([])
     

     useEffect(() => {
     },[])
   

    const getSearchedResultAuctions = async (searchInput) =>{      
      await fetch(url).then(res => res.json()).then((data) => {
        if(searchInput === undefined) {
          setAuctionsToShow(data)
        }else{
          let filteredData = data.filter(auction => auction.Titel.toLowerCase().startsWith(searchInput.toLowerCase()));
          
        setAuctionsToShow(filteredData)
        }})
  }
    const getOpenAuctions = async() =>{
      if(AuctionsToShow.length === 0){
        await fetch(url).then(res => res.json()).then((data) => {
          let filteredData = data.filter(auction => new Date(auction.SlutDatum) > Date.now())
          setAuctionsToShow(filteredData)              
        })
      }
        
    }                           
     return (
          <GetAuctionsContext.Provider value={[AuctionsToShow, setAuctionsToShow,getOpenAuctions,getSearchedResultAuctions]}>
            {props.children}
          </GetAuctionsContext.Provider>
  )   
}

export default GetAuctionsContextProvider


