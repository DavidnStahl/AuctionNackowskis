import React, { useContext, useEffect, useState } from "react";
import { DetailViewAuctionContext } from "../Contexts/DetailViewAuctionContext";
import DetailClosedAuctionItem from "./DetailClosedAuctionItem";
import DetailItem from "./DetailItem";
import { v4 as uuidv4 } from "uuid";
import EditAuction from './EditAuction';

const key = uuidv4();
//console.log("Test uuid key :" + key);

const DetailViewAuction = React.memo(props => {
  const [auctionListItemData, setauctionListItemData] = useState([]);
  const [ListItemVersion, setListItemVersion] = useState([]);

  const [
    DetailDataForAuction,
    setDetailDataForAuction,
    BiddingDataForAuction,
    setBiddingDataForAuction,
    getSelectedAuctionData,
    getDataToAuctionDetailList
  ] = useContext(DetailViewAuctionContext);

  useEffect(() => {
    GetDetails(props.isShowing);
  }, [props.isShowing]);

  useEffect(() => {}, [auctionListItemData, setauctionListItemData]);
  useEffect(() => {
    if (auctionListItemData[0] !== undefined) {
      setListItemVersion(() => {
        if (
          auctionListItemData[0].SkapadAv === sessionStorage.getItem("user") &&
          auctionListItemData[1].length === 0
        ) {
          return  (<EditAuction id={props.id} isShowing={props.isShowing}  getdetails={GetDetails} auctionDetails={auctionListItemData} />);
        } else if (
          auctionListItemData[0].SkapadAv === sessionStorage.getItem("user") &&
          auctionListItemData[1].length !== 0
        ) {
          return ( <DetailItem
            key={uuidv4}
            id={props.id}
            getdetails={GetDetails}
            auctionDetails={auctionListItemData}
          />);
        } else if (
          auctionListItemData[0].SkapadAv !== sessionStorage.getItem("user") && new Date(auctionListItemData[0].SlutDatum) > Date.now()
        ) {
          return (<DetailItem
            key={uuidv4}
            id={props.id}
            getdetails={GetDetails}
            auctionDetails={auctionListItemData}
          />);
        } else if (new Date(auctionListItemData[0].SlutDatum) < Date.now()) {
          return (<DetailClosedAuctionItem auctionDetails={auctionListItemData}/>);
        }
      });
    }
  }, [auctionListItemData, setauctionListItemData]);

  const GetDetails = async bolean => {
    if (bolean === true) {
      let data = await getDataToAuctionDetailList(props.id);
      setauctionListItemData(data);
    }
  };
  return (
    <tr hidden={!props.isShowing}>
      <td colSpan="6">
        {<div>{ListItemVersion}</div>}
      </td>
    </tr>
  );
});

export default DetailViewAuction;
