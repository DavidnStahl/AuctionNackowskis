import React from 'react';
import { useState, useEffect,useRef } from 'react';
import { useContext } from 'react';
import {DetailViewAuctionContext} from '../Contexts/DetailViewAuctionContext';
import './Login.css'

const EditAuction = (props) => {
    
    const [DetailDataForAuction, setDetailDataForAuction,BiddingDataForAuction, setBiddingDataForAuction,getSelectedAuctionData,getDataToAuctionDetailList,createBidOnAuction,UpdateAuction,deleteAuction] = useContext(DetailViewAuctionContext);
    const [TableContent, setTableContent] = useState();
    const titletext = useRef();
    const descriptiontext = useRef();
    const startdatetext = useRef();
    const enddatetext = useRef();
    const startpricetext = useRef();
    const createdbytext = useRef();

    useEffect(()=> {
        if(props.auctionDetails.length !== 0){
            setTableContent(() => {
                return(<React.Fragment>
                     <br />
                    <label>Title:</label>
                    <br />
                    <input type="text" ref={titletext} value={props.auctionDetails[0].Titel}/>
                    <br /><br />
                    <label>Description:</label>
                    <input type="text" ref={descriptiontext} value={props.auctionDetails[0].Beskrivning}/>
                    <br /><br />
                    <label>Start Date:</label>

                    <input type="datetime-local" ref={startdatetext} value={props.auctionDetails[0].StartDatum}/>
                    <br /><br />
                    <label>End Date:</label>

                    <input type="datetime-local" ref={enddatetext} value={props.auctionDetails[0].SlutDatum}/>
                    <br /><br />
                    <label>Starting price</label>

                    <input type="number" ref={startpricetext} value={props.auctionDetails[0].Utropspris}/>
                    <br /><br />
                    <label>Created by:</label>

                    <span>{sessionStorage.getItem("user")}</span>
                    <br /><br />
                    <button className="btn btn-primary" onClick={
                        () => {
                            saveData(titletext.current.value, 
                            descriptiontext.current.value, 
                            startdatetext.current.value,
                            enddatetext.current.value,
                            startpricetext.current.value,
                            createdbytext.current.value);
                        }
                    }>Update Auction</button>
            
                    <button class="btn btn-danger" onClick={() => {
                        deleteAuction(props.auctionDetails[0].AuktionID)
                        props.getdetails(false);
                    }}>Delete Auction</button>
            
                    </React.Fragment>)
            })
            
        }
    },[getDataToAuctionDetailList])

    useEffect(() => {

    },[props.getdetails])
    // hela returnen ska egentligen skapas

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
        <div className="container text-center">
            <div className="wrapper fadeInDown">
            <div id="formContent">

            <div className="fadeIn first">

            {TableContent}
            </div>
            </div>
            </div>
            </div>
        

        </React.Fragment>
    );
}

export default EditAuction;