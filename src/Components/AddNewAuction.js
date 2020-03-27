import React,{useContext} from 'react'
import {SaveNewAuctionContext} from '../Contexts/SaveNewAuctionContext';
///Din komponent Micke////
///AddNewAuction är functionen du anropar i din knapp när man submitar Auktionen
// tex skapar du en function saveData som tar alla refs från inputsen sen i den functionen skapar du ett object data som du sedan stoppar in
/// som inparameter i AddNewAuction(data);
/* exemple
const saveData = (titel,beskrivning,slutdatum,utropspris,skapadav) => {
    let startDate = new Date()
      let endDate = new Date();
      endDate.setHours(endDate.getHours() + 60);  här sätter man hur många timmar auktionen ska leva. exemple 60

  let data = {
      "Titel": titel,
      "Beskrivning": beskrivning,
      "StartDatum": startDate,
      "SlutDatum": endDate,
      "Gruppkod": 2240,
      "Utropspris": utropspris,
      "SkapadAv": skapadav   
  }

  AddNewAuction(data);
}*/
const AddNewAuction = () => {
    const [NewAuctionData, setNewAuctionData,AddNewAuction] = useContext(SaveNewAuctionContext);
    return (
        <div className="container text-center">
            Mickes Komponent
        </div>
    )
}

export default AddNewAuction
