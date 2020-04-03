import React, {createContext,useState,useEffect} from 'react';

export const DetailViewAuctionContext = createContext();

const DetailViewAuctionContextProvider = (props) => {
    const [DetailDataForAuction, setDetailDataForAuction] = useState();
    const [BiddingDataForAuction, setBiddingDataForAuction] = useState();

    useEffect(() => {
        let d = new Date();
     console.log(d.setHours(2))
    },[])

    useEffect(() => {
    },[DetailDataForAuction, setDetailDataForAuction])

   useEffect(() => {

   },[BiddingDataForAuction,setBiddingDataForAuction])
    

    const getDataToAuctionDetailList = async (id) =>{
                let url_Get_Auction_By_AuctionID = `https://nackowskis.azurewebsites.net/api/Auktion/2240?id=${id}`;
                let a = await fetch(url_Get_Auction_By_AuctionID).then(res => res.json())
                let url_Get_BiddingData_By_AuctionID = `https://nackowskis.azurewebsites.net/api/Bud/2240?id=${id}`;
                let b = await fetch(url_Get_BiddingData_By_AuctionID).then(res => res.json())
                setDetailDataForAuction([a,b])
                return [a,b]
    }   

    const getSelectedAuctionData =  async (id) =>{
    let url_Get_Auction_By_AuctionID = `https://nackowskis.azurewebsites.net/api/Auktion/2240?id=${id}`;
    let auction = await fetch(url_Get_Auction_By_AuctionID).then(res => res.json()).then((data) => {setDetailDataForAuction(data)})
    let biddingdata = await getAuctionBiddingData(id)
    let array = [auction,biddingdata]
    return array}

    const getAuctionBiddingData = async (id) =>{
        let url_Get_BiddingData_By_AuctionID = `https://nackowskis.azurewebsites.net/api/Bud/2240?id=${id}`;
        await fetch(url_Get_BiddingData_By_AuctionID).then(res => res.json()).then((data) => {setBiddingDataForAuction(data)})}

    const createBidOnAuction =  async (data,id) =>{
        let url_create_bid_by_AuctionID = `https://nackowskis.azurewebsites.net/api/Bud/2240/${id}`;
         await fetch(url_create_bid_by_AuctionID,{
             method: 'POST',
             body: JSON.stringify(data),
             headers: {
               'Accept': 'application/json, text/plain, */*',
               'Content-Type': 'application/json'
             }
             }).then(function (data) {
               console.log(data)
                getDataToAuctionDetailList(id)
                 })}

    const UpdateAuction =  (data) =>{
        let url_update_Auction_by_AuctionID = `https://nackowskis.azurewebsites.net/api/Auktion/2240/${data.AuktionID}`;
            fetch(url_update_Auction_by_AuctionID,{
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
            }
            }).then(data => window.location.reload(false))}

    const deleteAuction = (async (id) =>{
        let url_delete_by_AuctionID = `https://nackowskis.azurewebsites.net/api/Auktion/2240/${id}`;
        await fetch(url_delete_by_AuctionID, {
        method: 'DELETE'}).then(data => {
            window.location.reload(false);})        
    })                         
     return (
          <DetailViewAuctionContext.Provider value={[DetailDataForAuction, setDetailDataForAuction,BiddingDataForAuction, setBiddingDataForAuction,getSelectedAuctionData,getDataToAuctionDetailList,createBidOnAuction,UpdateAuction,deleteAuction]}>
            {props.children}
          </DetailViewAuctionContext.Provider>
  )   
}

export default DetailViewAuctionContextProvider