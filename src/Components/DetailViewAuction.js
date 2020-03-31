import React, { useContext, useEffect, useState } from "react";
import { DetailViewAuctionContext } from "../Contexts/DetailViewAuctionContext";
import DetailClosedAuctionItem from "./DetailClosedAuctionItem";
import DetailItem from "./DetailItem";
import { v4 as uuidv4 } from "uuid";

const key = uuidv4();
console.log("Test uuid key :" + key);

const DetailViewAuction = props => {
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
    //console.log(auctionListItemData);
    //console.log(auctionListItemData[0])
    if (auctionListItemData[0] !== undefined) {
      setListItemVersion(() => {
        //console.log(auctionListItemData[0].SkapadAv)
        //console.log(sessionStorage.getItem("user"))
        if (
          auctionListItemData[0].SkapadAv === sessionStorage.getItem("user") &&
          auctionListItemData[1].length === 0
        ) {
          return "ListState: egen auction som är tom och går att ta bort och uppdatera";
        } else if (
          auctionListItemData[0].SkapadAv === sessionStorage.getItem("user") &&
          auctionListItemData[1].length !== 0
        ) {
          return "ListState: egen auction som har bud och går inte att ta bort eller uppdatera";
        } else if (
          auctionListItemData[0].SkapadAv !== sessionStorage.getItem("user")
        ) {
          return "ListState: annans auction som går att buda på";
        }
      });
    }
  }, [auctionListItemData, setauctionListItemData]);

  const GetDetails = async bolean => {
    if (bolean === true) {
      let data = await getDataToAuctionDetailList(props.id);
      console.log(data);
      setauctionListItemData(data);
    }
  };

  //Kasta in en useEffect? som hämtar datat, inte när komponenten renderas första gången, men när motsvarande view details knapp i parent (ShowAucttionList) trycks

  //
  return (
    <tr hidden={!props.isShowing}>
      <td colSpan="6">
        {/*<div>ID: {props.id} , detalj , {ListItemVersion}</div>*/}
        <DetailItem
          key={uuidv4}
          id={props.id}
          getdetails={GetDetails}
          auctionDetails={auctionListItemData}
        />

        {
          //<DetailClosedAuctionItem auctionDetails={auctionListItemData} />}
        }
      </td>
    </tr>
  );
};

export default DetailViewAuction;
