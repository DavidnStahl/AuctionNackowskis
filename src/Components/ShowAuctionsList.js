import React,{useContext,useEffect} from 'react'
import {GetAuctionsContext} from '../Contexts/GetAuctionsContext';
///Din komponent marwan////
//när programmet startar kommer getOpenAuctions köras
// useEffect kommer rendera din komponent när david har hämtat data från databasen å gjort en setAuctionsToShow(data)
// då kommer AuctionsToShow innehålla alla öppna auctions som en array med objects.
// så du kommer kunna använda AuctionsToShow för ditt table, där du kan lista ut alla auctions.

const ShowAuctionsList = () => {
    const [AuctionsToShow, setAuctionsToShow,getOpenAuctions,getSearchedResultAuctions] = useContext(GetAuctionsContext);
    //getOpenAuctions hämtar data från databasen å sparar det i AuctionsToShow i GetOpenAuctionsContext.
    useEffect(() => {
       getOpenAuctions();
    },[])

    useEffect(() => {
      
  },[setAuctionsToShow])
  ///här renderar du om din komponent när data är hämtat
    useEffect(() => {
    },[AuctionsToShow,setAuctionsToShow])

    return(
        <div className="container text-center">


            <table className="table">
            <thead>
    <tr>

      <th scope="col">Title</th>
      <th scope="col">description</th>
      <th scope="col">End Date</th>
      <th scope="col">Start price</th>
      <th scope="col">Created by</th>
      <th scope="col"></th>

    </tr>
  </thead>
  <tbody>

           {AuctionsToShow.map((auction) =>{
              return <React.Fragment>
              
             <tr>

             <td>{auction.Titel}</td>
             <td>{auction.Beskrivning}</td>
             <td>{auction.SlutDatum}</td>
             <td>{auction.Utropspris}</td>
             <td>{auction.SkapadAv}</td>
             <td>button</td>
           </tr>
           </React.Fragment>
               }

           )}

           </tbody>
           </table>
        </div>
        
        )
}

export default ShowAuctionsList