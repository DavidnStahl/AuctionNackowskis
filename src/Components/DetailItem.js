import React,{useContext,useEffect,useState} from 'react'
import {DetailViewAuctionContext} from '../Contexts/DetailViewAuctionContext';
import './Login.css'

const DetailItem = (props) => {

    const [DetailDataForAuction, setDetailDataForAuction,BiddingDataForAuction, setBiddingDataForAuction,getSelectedAuctionData,getDataToAuctionDetailList,createBidOnAuction] = useContext(DetailViewAuctionContext);
    const [TableContent, setTableContent] = useState();
    const [TableContent2, setTableContent2] = useState();
    useEffect(() => {
       if(DetailDataForAuction !== undefined){
        DetailDataForAuction[1].sort((a,b) => (b.Summa-a.Summa))
        setTableContent2(() => {

                  return(<React.Fragment><td>{DetailDataForAuction[0].Titel}</td>
                                         <td>{DetailDataForAuction[0].Beskrivning}</td>
                                         <td>{DetailDataForAuction[0].StartDatum}</td>
                                         <td>{DetailDataForAuction[0].SlutDatum}</td>
                                         <td>{DetailDataForAuction[0].Utropspris}</td>
                                         <td>{DetailDataForAuction[0].SkapadAv}</td>
                  </React.Fragment>)
                  })

                  setTableContent(() =>{
                    let x = DetailDataForAuction[1].map((item) => {
                      return (<React.Fragment><tr><td>{item.Summa}</td><td>{item.Budgivare}</td></tr></React.Fragment>)})
    
                      return x})

        }
    },[getSelectedAuctionData])

    useEffect(() => {
     console.log()
    },[TableContent, setTableContent,getDataToAuctionDetailList])

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
        <div className="container text-center">
        
        <div className="container text-center">
            <div className="wrapper fadeInDown">
            <div id="formContent2">

            <div className="fadeIn first form-center">
            <table className="table table-borderless">

            <tr>
            <th scope="col">Title</th>
            <th scope="col">description</th>
            <th scope="col">Start Date</th>
            <th scope="col">End Date</th>
            <th scope="col">Start price</th>
            <th scope="col">Created by</th>
            
          </tr>
            {TableContent2}</table>
            <label>My bid:</label>
        <input type="text" ref={(text) => bid = text}/>       
       
        <br /><br />

        <button class="btn btn-primary" onClick={
            () => {
                                                    // AuktionID behöver skickas hit
                saveEstimate(bid.value, bidder.value, props.id);
                                                    //^...............^
            }
        }>Save bid</button>
            <table className="table table-borderless">

            <tr>
            <th scope="col">Bid</th>
            <th scope="col">Bidder</th>
          </tr>
            {TableContent}</table>
            
            </div>

            </div>
          </div>
        </div>
        
        
        
        </div>
        </React.Fragment>
    );
}

export default DetailItem;