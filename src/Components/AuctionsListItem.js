import React,{useEffect,useContext,useState,useInterval} from "react";
import { GetAuctionsContext } from "../Contexts/GetAuctionsContext";

const AuctionsListItem = React.memo(props => {
 const [AuctionsToShow, setAuctionsToShow,getOpenAuctions,getSearchedResultAuctions] = useContext(GetAuctionsContext)
 const [timer, setTimer] = useState(0);
 const [name, setName] = useState("Show Auction Details");
 
 useEffect(() => {
    
  const interval = setInterval(() => {
    setTimer(() =>{

    let x = Date.now()
    x += 3600000
    let y = x - new Date(props.slutDatum)
    var seconds = (y / 1000 % 60).toFixed(0);

    var minutes = Math.floor((y / (1000 * 60) % 60).toFixed(2));

    var hours = Math.floor(y / (1000 * 60 * 60) % 24).toFixed(0);

    var days = (y / (1000 * 60 * 60 * 24)).toFixed(0);
    return (`${Math.abs(days)}d\u00A0${Math.abs(hours)}h${Math.abs(minutes)}m${Math.abs(seconds)}s`)
   
      
    });
  
  }, 100);
  return () => clearInterval(interval);

}, [getSearchedResultAuctions]);

  useEffect(() => {
  },[getSearchedResultAuctions])

  useEffect(() =>{

  },[name,setName])


   
  /*function TimerIndicator() {

    if(Date.parse(props.slutDatum)>Date.parse(new Date())){
      return ({timer});
    }
    return "Closed auction"
  }*/
  
  /*     key={auction.AuktionID}
    titel={auction.Titel}
    beskrivning={auction.Beskrivning}
    slutDatum={auction.SlutDatum}
    utropspris={auction.Utropspris}
    skapadAv={auction.SkapadAv} */
/*     useEffect = () =>{
      
      let x = Date.now()
      let y = x - new Date(props.slutDatum)
      var seconds = (y / 1000 % 60).toFixed(0);

      var minutes = (y / (1000 * 60) % 60).toFixed(0);

      var hours = (y / (1000 * 60 * 60) % 24).toFixed(0);

      var days = (y / (1000 * 60 * 60 * 24)).toFixed(0);
      const str = ("Days:" + days.replace("-","") + "  Hours:"+ hours.replace("-","") + " Minutes:" + minutes.replace("-","") + " Seconds:" + seconds.replace("-","")).toString();

      setTimer(str);

    } */

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
      <td>{props.beskrivning}</td>
      <td>{Date.now() > new Date(props.slutDatum) ? "Auction closed " :timer}</td>
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
