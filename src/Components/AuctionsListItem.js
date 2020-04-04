import React,{useEffect,useContext,useState,useInterval} from "react";
import { GetAuctionsContext } from "../Contexts/GetAuctionsContext";

const AuctionsListItem = React.memo(props => {
 const [AuctionsToShow, setAuctionsToShow,getSearchedResultAuctions] = useContext(GetAuctionsContext)
 const [timer, setTimer] = useState(0);
 const [startdate, setstartdate] = useState(0);
 const [stimer, setStartTimer] = useState(0);
 const [name, setName] = useState("Show Auction Details");


 
 useEffect(() => {
    
  const interval = setInterval(() => {
    /*setStartTimer(() =>{
     
      let x = Date.now()
      
      let y = x - new Date(props.startDatum)
      var seconds = (y / 1000 % 60).toFixed(0);
  
      var minutes = Math.floor((y / (1000 * 60) % 60).toFixed(2));
  
      var hours = Math.floor(y / (1000 * 60 * 60) % 24).toFixed(0);
  
      var days = (y / (1000 * 60 * 60 * 24)).toFixed(0);
      return (`${Math.abs(days)}d\u00A0${Math.abs(hours)}h${Math.abs(minutes)}m${Math.abs(seconds)}s`)   
      });*/
    setstartdate(() => {
      let x = Date.now()
      let y = x - new Date(props.startDatum)
      
      if(y > 0){
        return "Open"
      }else{
        var seconds = (y / 1000 % 60).toFixed(0);

       var minutes = Math.floor((y / (1000 * 60) % 60).toFixed(0));

       var hours = Math.floor(y / (1000 * 60 * 60) % 24 + 1).toFixed(0);

       var days = (y / (1000 * 60 * 60 * 24)).toFixed(0);
       return (`${Math.abs(days)}d\u00A0${Math.abs(hours)}h${Math.abs(minutes+1)}m${Math.abs(seconds)}s`)
      }
    })
    setTimer(() =>{
    
    let x = Date.now()
    let y = x - new Date(props.slutDatum)
    if(y > 0){
      return "Auction Closed"
    }else{

    

    var seconds = (y / 1000 % 60).toFixed(0);

    var minutes = Math.floor((y / (1000 * 60) % 60).toFixed(2));

    var hours = Math.floor(y / (1000 * 60 * 60) % 24 + 1).toFixed(0);

    var days = (y / (1000 * 60 * 60 * 24)).toFixed(0);
    return (`${Math.abs(days)}d\u00A0${Math.abs(hours)}h${Math.abs(minutes+1)}m${Math.abs(seconds)}s`) 
    }  
    }); 
  
  }, 100);
  return () => clearInterval(interval);
}, [getSearchedResultAuctions]);

  useEffect(() => {
  },[getSearchedResultAuctions])
  useEffect(() =>{
  },[name,setName])

    const nameFunction = (e) => {
      if(name === "Show Auction Details"){
        setName("Hide Auction Details")
      }else{
        setName("Show Auction Details")
      }    
    }
  return (
    <tr>
      <td>{props.titel}</td>
      <td>{startdate}</td>
      <td>{/*Date.now() > new Date(props.slutDatum) ? "Auction closed " :*/timer}</td>
      <td>{props.utropspris.toLocaleString()}</td>
      <td>{props.skapadAv}</td>
      <td>
        <button type="button" class="btn btn-info" value={props.id} onClick={(e) => {
          props.event(e)
          nameFunction(e)
           }}>
        
          {name}
        </button>
      </td>
    </tr>
  );
});

export default AuctionsListItem;
