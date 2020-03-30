import React, { useContext, useEffect, useState } from "react";
import { DetailViewAuctionContext } from "../Contexts/DetailViewAuctionContext";

const DetailViewAuction = props => {
  const [
    DetailDataForAuction,
    setDetailDataForAuction,
    BiddingDataForAuction,
    setBiddingDataForAuction,
    getSelectedAuctionData
  ] = useContext(DetailViewAuctionContext);

  useEffect(() => {
    getSelectedAuctionData(props.id);
  }, []);

  //Kasta in en useEffect? som hämtar datat, inte när komponenten renderas första gången, men när motsvarande view details knapp i parent (ShowAucttionList) trycks

  //
  return (
    <tr hidden={!props.isShowing}>
      <td colSpan="6">
        <div>ID: {props.id}</div>
      </td>
    </tr>
  );
};

export default DetailViewAuction;
