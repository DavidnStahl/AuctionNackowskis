import React,{useContext,useEffect,useState} from 'react'
import {DetailViewAuctionContext} from '../Contexts/DetailViewAuctionContext';

const DetailItem = (props) => {

    const [DetailDataForAuction, setDetailDataForAuction,BiddingDataForAuction, setBiddingDataForAuction,getSelectedAuctionData,getDataToAuctionDetailList,createBidOnAuction] = useContext(DetailViewAuctionContext);
    const [TableContent, setTableContent] = useState();

    useEffect(() => {
       if(DetailDataForAuction !== undefined){
        setTableContent(() =>{
            //console.log(DetailDataForAuction[1])
            console.log("1")
               DetailDataForAuction[1].map((items) => {
                 //console.log(items)
                  return <h3>{items.Summa}</h3>
            
        })})
       }
        

    },[getSelectedAuctionData])

    useEffect(() => {

    },[TableContent, setTableContent])
    let [bid, bidder] = useState();

    function saveEstimate(sum)
    {
        createBidOnAuction({
            "Summa": parseInt(sum),
            "AuktionID": props.id,
            "Budgivare": sessionStorage.getItem("user")
        });

    };

    return(
        
        <React.Fragment>
        
        <table>{TableContent}</table>
        <label>Mitt bud:</label>
        <input type="text" ref={(text) => bid = text}/>       
       
        <br /><br />

        <button class="btn btn-primary" onClick={
            () => {
                                                    // AuktionID behöver skickas hit
                saveEstimate(bid.value, bidder.value, props.id);
                                                    //^...............^
            }
        }>Spara bud</button>
        </React.Fragment>
    );
}

export default DetailItem;