import React, { useContext, useEffect, useState } from "react";
import { DetailViewAuctionContext } from "../Contexts/DetailViewAuctionContext";
import DetailItem from "./DetailItem";

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

  useEffect(() => {
    console.log(auctionListItemData);
    console.log(auctionListItemData[0]);
    if (auctionListItemData[0] !== undefined) {
      setListItemVersion(() => {
        console.log(auctionListItemData[0].SkapadAv);
        console.log(sessionStorage.getItem("user"));
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
      setauctionListItemData(data);
      console.log("lal", auctionListItemData);
    }
  };

  //Kasta in en useEffect? som hämtar datat, inte när komponenten renderas första gången, men när motsvarande view details knapp i parent (ShowAucttionList) trycks

  //
  /*   titel={auction.Titel}
  beskrivning={auction.Beskrivning}
  slutDatum={auction.SlutDatum}
  utropspris={auction.Utropspris}
  skapadAv={auction.SkapadAv} */
  return (
    <tr hidden={!props.isShowing}>
      <td colSpan="6">
        <ul>
          <li>ID: {props.id}</li>
          <li>Titel: {props.titel}</li>
          <li>Beskrivning: {props.beskrining}</li>
          <li>Utropspris: {props.utropspris}</li>
          <li>Hösta bud: 243 000</li>
        </ul>
        <div> {ListItemVersion}</div>
        <DetailItem id={props.id} auctionDetails={auctionListItemData} />
      </td>
    </tr>
  );
};

export default DetailViewAuction;
