import React, { useEffect, useState, useContext } from "react";
import { DetailViewAuctionContext } from "../Contexts/DetailViewAuctionContext";
import "./Login.css";

const DetailClosedAuctionItem = React.memo(props => {
  const [DetailDataForAuction, setDetailDataForAuction,BiddingDataForAuction, setBiddingDataForAuction,getSelectedAuctionData,getDataToAuctionDetailList,createBidOnAuction,UpdateAuction,deleteAuction] = useContext(DetailViewAuctionContext);
  const [DataInfo, setDataInfo] = useState();
  const [TableContent, setTableContent] = useState();
  const [TableContent2, setTableContent2] = useState();

  useEffect(() => {
  }, []);

  useEffect(() => {}, [
    TableContent,
    setTableContent,
    getDataToAuctionDetailList
  ]);

  useEffect(() => {}, [props.getdetails]);

  useEffect(() => {
    setDataInfo(props.auctionDetails);
    if (props.auctionDetails.length !== 0) {
        let arr = [""]
        if(props.auctionDetails[1].length !== 0){
            arr = props.auctionDetails[1].sort((a, b) => b.Summa - a.Summa);
        }
      
      setTableContent2(() => {
        return (
          <React.Fragment>
            <td>{props.auctionDetails[0].Titel}</td>
            <td>{props.auctionDetails[0].Beskrivning}</td>
            <td>{props.auctionDetails[0].StartDatum.replace("T"," ")}</td>
            <td>{props.auctionDetails[0].SlutDatum.replace("T"," ")}</td>
            <td>{props.auctionDetails[0].Utropspris}</td>
            <td>{props.auctionDetails[0].SkapadAv}</td>
          </React.Fragment>
        );
      });

      setTableContent(() => {
        return (
          <React.Fragment>
            <tr>
              <td>{arr[0].Summa}</td>
              <td>{arr[0].Budgivare}</td>
            </tr>
          </React.Fragment>
        );
      });
    }
  }, [getDataToAuctionDetailList]);

  return (
    <div className="container text-center">
      <div className="wrapper fadeInDown">
        <div id="formContent2">
          <div className="fadeIn first form-center">
            <table className="table table-borderless">
            <thead>
              <tr>              
                <th scope="col">Title</th>
                <th scope="col">description</th>
                <th scope="col">Start Date</th>
                <th scope="col">End Date</th>
                <th scope="col">Start price</th>
                <th scope="col">Created by</th>
                </tr>
                </thead>
                <tbody>
              <tr>
              {TableContent2}
              </tr>
              </tbody>
            </table>
            <table className="table table-borderless">
            <thead>
              <tr>
                <th scope="col">Highest Bid</th>
                <th scope="col">Winning Bidder</th>
                </tr>
                </thead>                
              {TableContent}              
            </table>
          </div>
        </div>
      </div>
    </div>
  );
});

export default DetailClosedAuctionItem;