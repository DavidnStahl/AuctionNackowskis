import React,{useContext,useEffect,useState,useRef} from 'react'
import {DetailViewAuctionContext} from '../Contexts/DetailViewAuctionContext';
import './Login.css'

const DetailItem = React.memo((props) => {

    const [DetailDataForAuction, setDetailDataForAuction,BiddingDataForAuction, setBiddingDataForAuction,getSelectedAuctionData,getDataToAuctionDetailList,createBidOnAuction,UpdateAuction,deleteAuction] = useContext(DetailViewAuctionContext);
    
    const [TableContent, setTableContent] = useState();
    const [TableContent2, setTableContent2] = useState();
    const [TableContent3, setTableContent3] = useState();
    const [errorMessageBid,seterrorMessageBid] = useState();
    const [datainfo,setdatainfo] = useState();
    const input = useRef();
    useEffect(() => {
      setdatainfo(props.auctionDetails)
    },[errorMessageBid,seterrorMessageBid])

    useContext(() =>{
    },[datainfo]) 
    
    useEffect(() => {

    },[BiddingDataForAuction, setBiddingDataForAuction])

    useEffect(() => {
      setdatainfo(props.auctionDetails)
       if(props.auctionDetails.length !== 0){
        props.auctionDetails[1].sort((a,b) => (b.Summa-a.Summa))
        setTableContent2(() => {

                  return(<React.Fragment>
                  <br/>
                  <span style={{color:"black"}}><h3>{props.auctionDetails[0].Titel}</h3></span><br/>
                  <span style={{color:"black"}}><p>{props.auctionDetails[0].Beskrivning}</p></span><br/>
                  <table className="table table-borderless">
                  <thead>
                      <tr>
                       <th scope="col">Start Date</th>
                       <th scope="col">End Date</th>
                       <th scope="col">Start price</th>
                       <th scope="col">Created by</th>           
                      </tr>
                      </thead><tr>
                      
                      <td>{props.auctionDetails[0].StartDatum.replace("T"," ")}</td>
                      <td>{props.auctionDetails[0].SlutDatum.replace("T"," ")}</td>
                      <td>{props.auctionDetails[0].Utropspris.toLocaleString()}</td>
                      <td>{props.auctionDetails[0].SkapadAv}</td>
                      </tr>
                      </table>
                  </React.Fragment>)
                  })
                  setTableContent(() =>{
                    let x = props.auctionDetails[1].map((item) => {
                      return (<React.Fragment><tr><td>{item.Summa.toLocaleString()}</td><td>{item.Budgivare}</td></tr></React.Fragment>)})    
                      return x})
                  setTableContent3(() => {
                    if(sessionStorage.getItem("user") !== props.auctionDetails[0].SkapadAv){
                      return (<React.Fragment><label></label>
                        <input type="number" ref={input}/>                             
                        <br /><br />                
                        <button class="btn btn-primary" onClick={
                            () => {
                                saveEstimate(input.current.value, bidder.value, props.id);                                                                    //^...............^
                            }
                        }>Save bid</button></React.Fragment>)
                    } 
                    return
                  })
        }
    },[getDataToAuctionDetailList])

    useEffect(() => {
    },[TableContent, setTableContent,getDataToAuctionDetailList])

    useEffect(() => {
    },[TableContent3, setTableContent3])

    useEffect(() => {

    },[props.getdetails])

    useEffect(() => {
      props.getdetails(true)
    },[errorMessageBid,seterrorMessageBid])

    useEffect(() => {

     },[])

    let [bid, bidder] = useState();

    function saveEstimate(sum)
    {
      console.log(sum)
      if(props.auctionDetails[1].length !== 0){
      let arr = props.auctionDetails[1].sort((a,b) => (b.Summa-a.Summa))
     
      if(arr[0].Summa < sum && props.auctionDetails[0].Utropspris < sum){
        createBidOnAuction({
          "Summa": sum,
          "AuktionID": props.id,
          "Budgivare": sessionStorage.getItem("user")
      },props.id);       
      seterrorMessageBid(() =>{
        return <span className="text-success">Your bid was accepted</span>
        
      })
      props.getdetails(true)
      }else{
        seterrorMessageBid(() =>{
          return <span className="text-danger">Too low bid</span>         
      })
    }
     }else{ 

      if(props.auctionDetails[0].Utropspris < sum){
        createBidOnAuction({
          "Summa": sum,
          "AuktionID": props.id,
          "Budgivare": sessionStorage.getItem("user")
      });       
      seterrorMessageBid(() =>{
        return <span className="text-success">Your bid was accepted</span>
        
      })
      props.getdetails(true)
      }else{
        seterrorMessageBid(() =>{
          return <span className="text-danger">Too low bid</span>         
      })
    }
     }    
    };
    return(
        <React.Fragment>
        <div className="container text-center">        
        <div className="container text-center">
            <div className="wrapper fadeInDown">
            <div id="formContent2">
            <div className="fadeIn first form-center">
            {TableContent2}
            {errorMessageBid}<br/>
            {TableContent3}
            <table className="table table-borderless">
            <thead>
            <tr>
            <th scope="col">Bid</th>
            <th scope="col">Bidder</th>
          </tr></thead>
            
            {TableContent}</table>           
            </div>
            </div>
          </div>
        </div>                       
        </div>
        </React.Fragment>
    );
})

export default DetailItem;