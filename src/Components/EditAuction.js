import React from 'react';
import { useState, useEffect,useRef } from 'react';
import { useContext } from 'react';
import {DetailViewAuctionContext} from '../Contexts/DetailViewAuctionContext';
import {GetAuctionsContext} from '../Contexts/GetAuctionsContext';
import './Login.css'

const EditAuction = React.memo((props) => {
    
    const [DetailDataForAuction, setDetailDataForAuction,BiddingDataForAuction, setBiddingDataForAuction,getSelectedAuctionData,getDataToAuctionDetailList,createBidOnAuction,UpdateAuction,deleteAuction] = useContext(DetailViewAuctionContext);
    const [AuctionsToShow, setAuctionsToShow,getOpenAuctions,getSearchedResultAuctions] = useContext(GetAuctionsContext)
    const [TableContent, setTableContent] = useState();
    const titletext = useRef();
    const descriptiontext = useRef();
    const startdatetext = useRef();
    const enddatetext = useRef();
    const startpricetext = useRef();

    const eraseTitle = (e) => {
        e.target.value = props.auctionDetails[0].Titel;
    }
    const eraseDescription = (e) => {
        e.target.value = props.auctionDetails[0].Beskrivning;      
      }
      const eraseStartDate = (e) => {
        e.target.value = props.auctionDetails[0].StartDatum;     
      }
      const eraseEndDate = (e) => {
        e.target.value = props.auctionDetails[0].SlutDatum;      
      }
      const eraseStartingPrice = (e) => {
        e.target.value = props.auctionDetails[0].Utropspris;      
      }
    useEffect(()=> {
        if(props.auctionDetails.length !== 0){
            setTableContent(() => {
               
                return(<React.Fragment>
                     <br />
                    <label>Title:</label>
                    <br />
                    <input type="text" ref={titletext} onClick={eraseTitle} placeholder={props.auctionDetails[0].Titel}/>                   
                    <br /><br />
                    <label>Description:</label>
                    <input type="text" ref={descriptiontext} onClick={eraseDescription} placeholder={props.auctionDetails[0].Beskrivning}/>
                    <br /><br />
                    <label>Start Date:</label>

                    <input type="datetime-local" ref={startdatetext} onClick={eraseStartDate} placeholder={props.auctionDetails[0].StartDatum}/>
                    <br /><br />
                    <label>End Date:</label>

                    <input type="datetime-local" ref={enddatetext} onClick={eraseEndDate} placeholder={props.auctionDetails[0].SlutDatum}/>
                    <br /><br />
                    <label>Starting price</label>

                    <input type="number" minValue="1" ref={startpricetext} onClick={eraseStartingPrice} placeholder={props.auctionDetails[0].Utropspris}/>
                    <br /><br />
                    <label>Created by: </label>

                    <span> {sessionStorage.getItem("user")}</span>
                    <br /><br />
                    <button className="btn btn-primary mr-3" onClick={
                        () => {
                            saveData(titletext.current.value, 
                            descriptiontext.current.value, 
                            startdatetext.current.value,
                            enddatetext.current.value,
                            startpricetext.current.value);
                        }
                    }>Update Auction</button>
            
                    <button class="btn btn-danger" onClick={() => {
                        deleteAuction(props.auctionDetails[0].AuktionID)
                    }}>Delete Auction</button>
            <br /><br />
                    </React.Fragment>)
            })   
        }
    },[getDataToAuctionDetailList])

    useEffect(() => {

    },[props.getdetails])

    function saveData(title, description, startDate, endDate, estimate)
    {
        let parsedStartDate = new Date(startDate);
        let parsedEndDate = new Date(endDate);
        let auction = {
            "AuktionID": props.id,
            "Titel": title,
            "Beskrivning": description,
            "StartDatum": parsedStartDate,
            "SlutDatum": parsedEndDate,
            "Gruppkod": 2240,
            "Utropspris": estimate,
            "SkapadAv": sessionStorage.getItem("user")
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
})

export default EditAuction;