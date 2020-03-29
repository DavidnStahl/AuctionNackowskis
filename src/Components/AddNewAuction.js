import React,{useContext} from 'react'
import {SaveNewAuctionContext} from '../Contexts/SaveNewAuctionContext';
import {useState} from 'react';
///Din komponent Micke////
///AddNewAuction är functionen du anropar i din knapp när man submitar Auktionen
// tex skapar du en function saveData som tar alla refs från inputsen sen i den functionen skapar du ett object data som du sedan stoppar in
/// som inparameter i AddNewAuction(data);
/* exemple


// Ska ta refs
const saveData = (titel,beskrivning,slutdatum,utropspris,skapadav) => {
    let startDate = new Date()
      let endDate = new Date();
      endDate.setHours(endDate.getHours() + 60);  här sätter man hur många timmar auktionen ska leva. exemple 60

// Objekt
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


//Mickes Komponent
const AddNewAuction = () => {

    const [NewAuctionData, setNewAuctionData, AddNewAuction] = useContext(SaveNewAuctionContext);
    
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

        AddNewAuction(auction);
    }

    return (
        <React.Fragment>
        <form>
        <label>Titel</label>
        <br />
        <input type="text" ref={(text) => title = text}/>
        <br /><br />
        <label>Beskrivning</label>
        <br />
        <input type="text" ref={(text) => description = text}/>
        <br /><br />
        <label>Börjar</label>
        <br />
        <input type="datetime-local" ref={(dateTime) => startDate = dateTime}/>
        <br /><br />
        <label>Slutar</label>
        <br />
        <input type="datetime-local" ref={(dateTime) => endDate = dateTime}/>
        <br /><br />
        <label>Utropspris</label>
        <br />
        <input type="text" ref={(value) => estimate = value}/>
        <br /><br />
        <label>SkapadAv</label>
        <br />
        <input type="text" ref={(name) => createdBy = name}/>
        <br /><br />
        <input type="submit" onClick={
            () => {
                saveData(title.value, 
                description.value, 
                startDate.value,
                endDate.value,
                estimate.value,
                createdBy.value);
            }
        } value="Spara" />
            
        </form>
        </React.Fragment>
    );
}
    
export default AddNewAuction