import React,{useContext,useEffect} from 'react'
import {GetOpenAuctionsContext} from '../Contexts/GetOpenAuctionsContext';
///Din komponent marwan////
//när programmet startar kommer getOpenAuctions köras
// useEffect kommer rendera din komponent när david har hämtat data från databasen å gjort en setAuctionsToShow(data)
// då kommer AuctionsToShow innehålla alla öppna auctions som en array med objects.
// så du kommer kunna använda AuctionsToShow för ditt table, där du kan lista ut alla auctions.

const ShowAuctionsList = () => {
    const [AuctionsToShow, setAuctionsToShow,getOpenAuctions] = useContext(GetOpenAuctionsContext);
    //getOpenAuctions hämtar data från databasen å sparar det i AuctionsToShow i GetOpenAuctionsContext.
    useEffect(() => {
        getOpenAuctions();
    },[])
  ///här renderar du om din komponent när data är hämtat
    useEffect(() => {
    },[AuctionsToShow,setAuctionsToShow])

  
       
            return(
        <div className="container text-center">
        
               
            <table>
            <thead>
    <tr>
      <th scope="col">Titel</th>
      <th scope="col">beskrivning</th>
      <th scope="col">endDate</th>
      <th scope="col">Utropspris</th>
      <th scope="col">SkapadAv</th>

    </tr>
  </thead>
  <tbody>
      
           {AuctionsToShow.map((auction) =>{
              return <div>
            
             <tr>
             <th scope="row"></th>
             <td>{auction.Titel}</td>
             <td>{auction.beskrivning}</td>
             <td>{auction.endDate}</td>
             <td>{auction.Utropspris}</td>
             <td>{auction.SkapadAv}</td>
           </tr>
             </div>
               }
                
           )}
           
           </tbody>
           </table>
        </div>
        )

    
}

export default ShowAuctionsList