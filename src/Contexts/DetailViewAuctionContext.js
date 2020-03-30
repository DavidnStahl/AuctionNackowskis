import React, {createContext,useState,useEffect} from 'react';

export const DetailViewAuctionContext = createContext();

const DetailViewAuctionContextProvider = (props) => {
    const [DetailDataForAuction, setDetailDataForAuction] = useState();
    const [BiddingDataForAuction, setBiddingDataForAuction] = useState();
    const [DetailViewItemToShow, setDetailViewItemToShow] = useState([]);
    
    

    /*const detailViewActionStateHandler = async (data) => {
        if(data !== undefined){
            if(data.SkapadAv === sessionStorage.getItem("user")){
                //await getSelectedAuctionData(data.AuktionID)
                console.log("skapat av user")
                let bidding = await getAuctionBiddingData(data.AuktionID)
                sessionUserInloggedAuctionStateHandler(bidding)
               } else {
                //await getSelectedAuctionData(data.AuktionID)
                await getAuctionBiddingData(data.AuktionID)
                sessionUserCanBidStateHandler()
               }
        }
       
    }

    const sessionUserCanBidStateHandler = () => {
            setDetailViewItemToShow(() => {
                console.log("Auction som går att bidda på")
                return ("Auction som går att bidda på ")  
    })}

    const sessionUserInloggedAuctionStateHandler = (biddinghistory) => {
        if(biddinghistory.length === 0){
            setDetailViewItemToShow(() => {
                console.log("Auction som man kan ta bort eller ändra")
                return ("Auction som man kan ta bort eller ändra")
            })
        }else{
            setDetailViewItemToShow(() => {
                console.log("Auction som man inte kan bidda på men se historik")
                return ("Auction som man inte kan bidda på men se historik")
            })
        }
    }*7
    
    useEffect(() => {
       // deleteAuction(4605);
       /* UpdateAuction({
            "AuktionID": 4606,
            "Titel": "test",
            "Beskrivning": "testUpdate",
            "StartDatum": "2020-03-29T10:39:28.8511151+00:00",
            "SlutDatum": "2020-03-29T10:39:28.8511151+00:00",
            "Gruppkod": 2240,
            "Utropspris": 1000,
            "SkapadAv": "david"
        })*/
        //getSelectedAuctionData(4606);//
        
        /*useEffect(() => {
        //getAuctionBiddingData(4665)
        createBidOnAuction({
            "Summa": 4000,
            "AuktionID": 4665,
            "Budgivare": "David test"
        })
    },[])*/

    

    const getDataToAuctionDetailList = async (id) =>{
                let url_Get_Auction_By_AuctionID = `https://nackowskis.azurewebsites.net/api/Auktion/2240?id=${id}`;
                let a = await fetch(url_Get_Auction_By_AuctionID).then(res => res.json())
                let url_Get_BiddingData_By_AuctionID = `https://nackowskis.azurewebsites.net/api/Bud/2240?id=${id}`;
                let b = await fetch(url_Get_BiddingData_By_AuctionID).then(res => res.json())
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

    const createBidOnAuction = async (data) =>{
        let url_create_bid_by_AuctionID = `https://nackowskis.azurewebsites.net/api/Bud/2240/${4605}`;
        await fetch(url_create_bid_by_AuctionID,{
             method: 'POST',
             body: JSON.stringify(data),
             headers: {
               'Accept': 'application/json, text/plain, */*',
               'Content-Type': 'application/json'
             }
             }).then(function (data) {
                 console.log(data)})}

    const UpdateAuction =  (data) =>{
        let url_update_Auction_by_AuctionID = `https://nackowskis.azurewebsites.net/api/Auktion/2240/${data.AuktionID}`;
            fetch(url_update_Auction_by_AuctionID,{
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
            }
            }).then(data => console.log(data))}

    const deleteAuction = async (id) =>{
        let url_delete_by_AuctionID = `https://nackowskis.azurewebsites.net/api/Auktion/2240/${id}`;
        fetch(url_delete_by_AuctionID, {
        method: 'DELETE'})
    }
                             
     return (
          <DetailViewAuctionContext.Provider value={[DetailDataForAuction, setDetailDataForAuction,BiddingDataForAuction, setBiddingDataForAuction,getSelectedAuctionData,getDataToAuctionDetailList]}>
            {props.children}
          </DetailViewAuctionContext.Provider>
  )   
}

export default DetailViewAuctionContextProvider