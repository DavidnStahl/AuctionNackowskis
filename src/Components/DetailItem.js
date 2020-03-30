import React,{useContext} from 'react'
import {useState} from 'react';
import {DetailViewAuctionContext} from '../Contexts/DetailViewAuctionContext';

const DetailItem = (props) => {

    const [getAuctionBiddingData, createBidOnAuction] = useContext(DetailViewAuctionContext);
    
    let [bid, bidder] = useState();

    function saveEstimate(sum, auctionID, bidder)
    {
        var bid = {
            Summa: sum,
            AuktionID: auctionID,
            Budgivare: bidder
        }

        // Post
        createBidOnAuction(bid);

        console.log(bid);
    }
    
    
    // AuktionID behöver skickas hit
    var bidHistory = props.auctionDetails;
    //                                     ^.............^

    let tableContent = bidHistory.map((item) => {
        
        return (<tr>
        <td>
        {item.Summa}
        </td>
        <td>
            {item.Budgivare}
        </td>
        </tr>);
    });
    return(
        
        <React.Fragment>
        
        <table>{tableContent}</table>
        
        <label>Mitt bud:</label>
        <input type="text" ref={(text) => bid = text}/>
        
        <br /><br />

        <label>Mitt namn:</label>
        <input type="text" ref={(text) => bidder = text}/>
        
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