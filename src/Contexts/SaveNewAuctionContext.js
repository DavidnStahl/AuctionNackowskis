import React, {createContext,useState,useEffect} from 'react';
import {useHistory} from 'react-router'

export const SaveNewAuctionContext = createContext();

const url = "https://nackowskis.azurewebsites.net/api/Auktion/2240"

//såhär ska data objectet sättas för att post ska fungera

/*let startDate = new Date()
      let endDate = new Date();
      endDate.setHours(endDate.getHours() + 60);
      const dataToUse = {
        "Titel": "Iphone XR",
        "Beskrivning": "En mobil 2 år gammal",
        "StartDatum": startDate,
        "SlutDatum": endDate,
        "Gruppkod": 2240,
        "Utropspris": 1000,
        "SkapadAv": "David"
      }*/
     

const SaveNewAuctionContextProvider = (props) => {
    const [NewAuctionData, setNewAuctionData] = useState();
    const history = useHistory();
    useEffect(() => {
      //console.log(NewAuctionData)
    }, [NewAuctionData, setNewAuctionData])

     const AddNewAuction = (data) => {
      setNewAuctionData(data)
       //console.log(data)
         fetch(url,{
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          }
          }).then(function (data) {
            history.push('/')
            window.location.reload(); 
         }) 
        }
                       
     return (
          <SaveNewAuctionContext.Provider value={[NewAuctionData, setNewAuctionData,AddNewAuction]}>
            {props.children}
          </SaveNewAuctionContext.Provider>
  )   
}

export default SaveNewAuctionContextProvider