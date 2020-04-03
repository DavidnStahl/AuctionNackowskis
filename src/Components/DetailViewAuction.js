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
    //console.log(auctionListItemData);
    //console.log(auctionListItemData[0])
    if (auctionListItemData[0] !== undefined) {
      
      
      setListItemVersion(() => {
        let y = Date.now() + 3600000
        //y += 3600000
        //console.log(auctionListItemData[0].SkapadAv)
        //console.log(sessionStorage.getItem("user"))
        if (
          auctionListItemData[0].SkapadAv === sessionStorage.getItem("user") &&
          auctionListItemData[1].length === 0
        ) {
          //"ListState: egen auction som är tom och går att ta bort och uppdatera"
          return  (<EditAuction id={props.id} isShowing={props.isShowing}  getdetails={GetDetails} auctionDetails={auctionListItemData} />);
        } else if (
          
          auctionListItemData[0].SkapadAv !== sessionStorage.getItem("user") && new Date(auctionListItemData[0].StartDatum) > y
          
        ) {
          //"ListState: egen auction som har bud och går inte att ta bort eller uppdatera";
          console.log("auktion som inte börjat ännu")
          return ( <DetailClosedAuctionItem auctionDetails={auctionListItemData}/>)
        }else if (
          auctionListItemData[0].SkapadAv === sessionStorage.getItem("user") &&
          auctionListItemData[1].length !== 0
        ) {
          //"ListState: egen auction som har bud och går inte att ta bort eller uppdatera";
          console.log("egen auction som har bud och går inte att ta bort eller uppdatera")
          return ( <DetailItem
            key={uuidv4}
            id={props.id}
            getdetails={GetDetails}
            auctionDetails={auctionListItemData}
          />);
        } else if (
          auctionListItemData[0].SkapadAv !== sessionStorage.getItem("user") && new Date(auctionListItemData[0].SlutDatum) > y
        ) {
          console.log("annans auction som går att buda på")
          //"ListState: annans auction som går att buda på"
          return (<DetailItem
            key={uuidv4}
            id={props.id}
            getdetails={GetDetails}
            auctionDetails={auctionListItemData}
          />);
        } else if (new Date(auctionListItemData[0].SlutDatum) < y) {
          //"ListState: stäng auction"
          console.log("stängd auction")
          
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

  //Kasta in en useEffect? som hämtar datat, inte när komponenten renderas första gången, men när motsvarande view details knapp i parent (ShowAucttionList) trycks

  //
  return (
    <tr hidden={!props.isShowing}>
      <td colSpan="6">
        {<div>{ListItemVersion}</div>}
{/*      {    <DetailItem
          key={uuidv4}
          id={props.id}
          getdetails={GetDetails}
          auctionDetails={auctionListItemData}
        /> } */}

{/*         <DetailClosedAuctionItem auctionDetails={auctionListItemData}/>
        <EditAuction id={props.id} isShowing={props.isShowing}  getdetails={GetDetails} auctionDetails={auctionListItemData} /> */}
      </td>
    </tr>
  );
});

export default DetailViewAuction;
