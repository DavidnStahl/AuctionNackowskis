import React,{useContext} from 'react'
import {SaveNewAuctionContext} from '../Contexts/SaveNewAuctionContext';
import {useState} from 'react';
import { useForm } from 'react-hook-form';
import {useHistory} from 'react-router'
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


    function App() {
        const { register, handleSubmit, errors } = useForm(); // initialise the hook
        const [NewAuctionData, setNewAuctionData, AddNewAuction] = useContext(SaveNewAuctionContext);
              const history = useHistory()


        const onSubmit = data => {
        var currentdate= new Date();
 console.log(Date.parse(currentdate))
 console.log(Date.parse(data.StartDatum))

          if(Date.parse(data.StartDatum)<Date.parse(currentdate))
          {          alert("Please write correct start Date, the data must be at after current date and time!");

 
          }
       else if(data.SlutDatum<data.StartDatum)
        {        

           alert("The end date can't be before the start date!");

        }

         else {
          AddNewAuction(data)
          history.push('/')
         }
        };
       
        return (
          <form onSubmit={handleSubmit(onSubmit)}>
              <label>Titel</label>
             <br/>
            <input type="text" name="Titel"ref={register({ required: true })} />
            <br />
            {errors.Titel && 'Title is required.'}
            <br /><br />
            
            <label>Beskrivning</label>
            <br/>
            <input type="text" name="Beskrivning" ref={register({ required: true })} />
            <br/>
            {errors.Beskrivning && 'Description is required.'}
            <br /><br />

            <label>Börjar</label>
             <br />
            <input type="datetime-local" name="StartDatum" ref={register({ required:true}  )} />
            <br/>

            {errors.StartDatum && errors.StartDatum.type === 'required' && <span>This is required</span>}
            <br /><br />
            <label>Slutar</label>
             <br />
            <input type="datetime-local" name="SlutDatum" ref={register({ required: true })} />
            <br/>
            {errors.SlutDatum && 'The endDate is required.'}
            <br /><br />
            <label>Utropspris</label>
            <br />
            <input type="text" name="Utropspris" ref={register({ required: true,  pattern: /\d+/ })} />
           <br />
      {errors.Utropspris && 'Please enter a number for estimate.'}
      <br />
      <label>SkapadAv</label>
        <br />
        <input type="hidden" name="SkapadAv" value={sessionStorage.getItem("user")} ref={register({ required: true })} />
        <br />
            {errors.SkapadAv && 'Please enter your name'}
        <br /><br />
        <input type="hidden" name="Gruppkod" value="2240"  ref={register()}/> 
            <input type="submit" />
          </form>
        );
      }
     

    
export default App