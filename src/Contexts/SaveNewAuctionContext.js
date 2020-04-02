import React, {createContext,useState,useEffect} from 'react';
import {useHistory} from 'react-router'

export const SaveNewAuctionContext = createContext();

const url = "https://nackowskis.azurewebsites.net/api/Auktion/2240"

const SaveNewAuctionContextProvider = (props) => {
    const [NewAuctionData, setNewAuctionData] = useState();
    const history = useHistory();
    useEffect(() => {
    }, [NewAuctionData, setNewAuctionData])

     const AddNewAuction = (data) => {
      setNewAuctionData(data)
         fetch(url,{
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          }
          }).then(function (data) {
            history.push('/Home')
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