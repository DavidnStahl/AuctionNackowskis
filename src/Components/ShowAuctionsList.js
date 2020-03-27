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

    return (
        <div className="container text-center">
        {/*Här har du ett exemple marwan hur du får ut titlarna*/}
           {AuctionsToShow.map((auction) =>{
               return <p>{auction.Titel}</p>
           })}
        </div>
    )
}

export default ShowAuctionsList