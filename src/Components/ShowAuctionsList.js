import React, { useContext, useEffect, useState} from "react";
import { GetAuctionsContext } from "../Contexts/GetAuctionsContext";
import AuctionsListItem from "./AuctionsListItem";
import DetailViewAuction from "./DetailViewAuction";

const ShowAuctionsList = React.memo(() => {

  const [isShowingDetails, setIsShowingDetails] = useState([]);

  const [
    AuctionsToShow, setAuctionsToShow,getSearchedResultAuctions
  ] = useContext(GetAuctionsContext);

  useEffect(() => {
    getSearchedResultAuctions("open")
  },[]);

  useEffect(() => {}, [AuctionsToShow,setAuctionsToShow]);
  useEffect(() => {}, [AuctionsToShow]);

  const showDetails = e => {

  
  if (isShowingDetails.indexOf(e.target.value) > -1) {
    let newState = isShowingDetails.filter(id => id !== e.target.value);
      
    console.log(newState);
      
    return setIsShowingDetails(newState);
    }
    
    console.log("hej");
    
    setIsShowingDetails(isShowingDetails.concat(e.target.value));
  };

  return (
    <div className="container text-center">
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th scope="col" >Title</th>
            <th scope="col">Starts</th>
            <th scope="col">Ends</th>
            <th scope="col">Start price</th>
            <th scope="col">Created by</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {AuctionsToShow.map(auction => {
            return (
              <React.Fragment>
                <AuctionsListItem
                  id={auction.AuktionID}
                  titel={auction.Titel}
                  beskrivning={auction.Beskrivning}
                  startDatum={auction.StartDatum}
                  slutDatum={auction.SlutDatum}
                  utropspris={auction.Utropspris}
                  skapadAv={auction.SkapadAv}
                  event={showDetails}
                  objectState={isShowingDetails}

                />
                <DetailViewAuction
                  id={auction.AuktionID}
                  key={auction.AuktionID}
                  event={showDetails}
                  isShowing={isShowingDetails.includes(
                    auction.AuktionID.toString()
                  )}
                />
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );
});

export default ShowAuctionsList;
