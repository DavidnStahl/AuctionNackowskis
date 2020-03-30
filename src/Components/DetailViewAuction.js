import React, { useContext, useEffect, useState } from "react";
import { DetailViewAuctionContext } from "../Contexts/DetailViewAuctionContext";

const DetailViewAuction = props => {
  const [isShow, setIsShow] = [props.isShowing];
  const [auctionDetails, setAuctionDetails] = useState([]);

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

  },[]); 

  const GetDetails = async bolean => {
    if (bolean === false) {
      let x = await getDataToAuctionDetailList(4606)
      console.log(x)
      return await getDataToAuctionDetailList;
    }
    return null;
  };

  //Kasta in en useEffect? som hämtar datat, inte när komponenten renderas första gången, men när motsvarande view details knapp i parent (ShowAucttionList) trycks

  //
  return (
    <tr hidden={!props.isShowing}>
      <td colSpan="6">
        <div>
          ID: {props.id} , detalj1 {auctionDetails}
        </div>
      </td>
    </tr>
  );
};

export default DetailViewAuction;