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

  //
  return (
    <tr hidden={!props.isShowing}>
      <td colSpan="6">ID: {props.key}</td>
    </tr>
  );
};

export default DetailViewAuction;
