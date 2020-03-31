import React from 'react';
import { useState, useEffect } from 'react';
import { useContext } from 'react';
import {DetailViewAuctionContext} from '../Contexts/DetailViewAuctionContext';

const EditAuction = (props) => {
    
    const [DetailDataForAuction, setDetailDataForAuction,BiddingDataForAuction, setBiddingDataForAuction,getSelectedAuctionData,getDataToAuctionDetailList,createBidOnAuction, UpdateAuction, deleteAuction] = useContext(DetailViewAuctionContext);

    let [title, 
        description, 
        startDate, 
        endDate, 
        estimate, 
        createdBy] = useState("");

    function saveData(title, description, startDate, endDate, estimate, createdBy)
    {
        let parsedStartDate = new Date(startDate);
        let parsedEndDate = new Date(endDate);

        let auction = {
            "Titel": title,
            "Beskrivning": description,
            "StartDatum": parsedStartDate,
            "SlutDatum": parsedEndDate,
            "Gruppkod": 2240,
            "Utropspris": estimate,
            "SkapadAv": createdBy
        }
        
        console.log(auction);

        UpdateAuction(auction);
    }

    

    return (
        
        <React.Fragment>
        
        <label>Titel</label>
        <br />
        <input type="text" ref={(text) => title = text} value={DetailDataForAuction[0].title}/>
        <br /><br />
        <label>Beskrivning</label>
        <br />
        <input type="text" ref={(text) => description = text} value={DetailDataForAuction[0].description}/>
        <br /><br />
        <label>Börjar</label>
        <br />
        <input type="datetime-local" ref={(dateTime) => startDate = dateTime} value={DetailDataForAuction[0].startDate}/>
        <br /><br />
        <label>Slutar</label>
        <br />
        <input type="datetime-local" ref={(dateTime) => endDate = dateTime} value={DetailDataForAuction[0].endDate}/>
        <br /><br />
        <label>Utropspris</label>
        <br />
        <input type="text" ref={(value) => estimate = value} value={estimate}/>
        <br /><br />
        <label>SkapadAv</label>
        <br />
        <input type="text" ref={(name) => createdBy = name} value={createdBy}/>
        <br /><br />
        <button className="btn btn-primary" onClick={
            () => {
                saveData(title.value, 
                description.value, 
                startDate.value,
                endDate.value,
                estimate.value,
                createdBy.value);
            }
        }>Spara Auktion</button>

        <button class="btn btn-danger" onClick={() => {
            deleteAuction(props.id)
        }}>Radera</button>

        </React.Fragment>
    );
}

export default EditAuction;