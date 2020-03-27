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

   /* return (
        <div className="container text-center">
        {Här har du ett exemple marwan hur du får ut titlarna}
           {AuctionsToShow.map((auction) =>{
               return <p>{auction.Titel}</p>
           })}
        </div>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
    )*/
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