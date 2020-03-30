import React, {createContext,useState,useEffect} from 'react';

export const DetailViewAuctionContext = createContext();

const DetailViewAuctionContextProvider = (props) => {
    const [DetailDataForAuction, setDetailDataForAuction] = useState();
    const [BiddingDataForAuction, setBiddingDataForAuction] = useState();
    const [DetailViewItemToShow, setDetailViewItemToShow] = useState([]);
    
    /*useEffect(()=> {
        getSelectedAuctionData(4606)

            console.log("hej")
            console.log(DetailDataForAuction)       
        //detailViewActionStateHandler(DetailDataForAuction)
    },[]);

    useEffect(()=> {
            console.log(DetailDataForAuction)       
        detailViewActionStateHandler(DetailDataForAuction)
    },[DetailDataForAuction])

    /*useEffect(()=> {
        console.log("Kollar så att detailViewActionStateHandler fungerar ")
        detailViewActionStateHandler(DetailDataForAuction)
    },[[DetailDataForAuction, setDetailDataForAuction]])*/

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
        

        //getAuctionBiddingData(4605)
        /*createBidOnAuction({
            "Summa": 4000,
            "AuktionID": 4605,
            "Budgivare": "David test"
        })
    },[])*/

    useEffect(() => {
        const getSelectedAuctionData =  async (id) =>{
            let url_Get_Auction_By_AuctionID = `https://nackowskis.azurewebsites.net/api/Auktion/2240?id=${id}`;
             await fetch(url_Get_Auction_By_AuctionID).then(res => res.json()).then((data1) => {setDetailDataForAuction(data1)
                let url_Get_BiddingData_By_AuctionID = `https://nackowskis.azurewebsites.net/api/Bud/2240?id=${id}`;
                fetch(url_Get_BiddingData_By_AuctionID).then(res => res.json()).then((data2) => {setBiddingDataForAuction(data2)
                    let array = [data1,data2]
                    console.log(array)
                return array})})}
                
                 /*return array})
            let biddingdata = await getAuctionBiddingData(id)
            let array = [auction,biddingdata]
            return array}*/
            let x = getSelectedAuctionData(4606);
            console.log(x)
    },[])

    /*useEffect(() => {
        console.log(DetailDataForAuction)
        
        //console.log(BiddingDataForAuction)
    },[DetailDataForAuction,setDetailDataForAuction,BiddingDataForAuction, setBiddingDataForAuction])*/

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
          <DetailViewAuctionContext.Provider value={[DetailDataForAuction, setDetailDataForAuction,BiddingDataForAuction, setBiddingDataForAuction,getSelectedAuctionData]}>
            {props.children}
          </DetailViewAuctionContext.Provider>
  )   
}

export default DetailViewAuctionContextProvider