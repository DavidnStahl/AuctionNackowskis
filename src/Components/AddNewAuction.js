import React,{useContext,useState} from 'react'
import {SaveNewAuctionContext} from '../Contexts/SaveNewAuctionContext';
import { useForm } from 'react-hook-form';
import {useHistory} from 'react-router'


    function App() {
        const { register, handleSubmit, errors } = useForm(); // initialise the hook
        const [NewAuctionData, setNewAuctionData, AddNewAuction] = useContext(SaveNewAuctionContext);
        const [dateError, setdateError] = useState();
              const history = useHistory()


        const onSubmit = data => {
        var currentdate= new Date();


          if(Date.parse(data.StartDatum)<Date.parse(currentdate))
          {         
                   setdateError("Please write correct start Date, the data must be after current date and time!")
          }
       else if(data.SlutDatum<data.StartDatum)
        {        
           setdateError("The end date can't be before the start date!")

        }

         else {
          AddNewAuction(data)
          history.push('/')
         }
        };
       
        return (
          <React.Fragment>
          <div>
          <br/>
          <h1 style={{textAlign:"center"}}>Add a new auction</h1><br/><br/><br/>
          <form onSubmit={handleSubmit(onSubmit)} className="container text-center addnewauction text-white">
             <div class="form-group">
             <br/>
            <label for="Titel">Title:</label><br/>
            <input type="text" className="form-control" id="Titel" name="Titel"ref={register({ required: true })} />
            <br/>
            {errors.Titel && <span style={{color: "red"}}>This is required</span>}
            </div>
            
            <div class="form-group">
            <label for="Beskrivning">Description:</label>
            <br/>
            <input type="text" name="Beskrivning" className="form-control" id="Beskrivning" ref={register({ required: true })} />
            <br/>
            {errors.Beskrivning && <span style={{color: "red"}}>Description is required.</span>}
            </div>
            <label for="StartDate">Auction start date:</label>
             <br />
             <span style={{color: "red"}}>{dateError}</span><br/>
            <input type="datetime-local" name="StartDatum" className="text-center" id="StartDate" style={{maxWidth: "20%", align:"center" }} ref={register({ required:true})} />
            <br/>
            
            {errors.StartDatum && errors.StartDatum.type === 'required' && <span style={{color: "red"}}>Start Date is required.</span>}
            

            <br/>

            <label for="EndDate">Auction end date:</label>
             <br />
            <input type="datetime-local" name="SlutDatum" className="text-center" id="EndDate" style={{maxWidth: "20%", align:"center"}} ref={register({ required: true })} />
            <br/>
            {errors.SlutDatum && <span style={{color: "red"}}>End Date is required.</span>}
            <br />
            <div class="form-group">
            <label for="Price">Starting price:</label>
            <br />
            <input type="number" name="Utropspris" className="form-control" id="Price" ref={register({ required: true,  min:"1", pattern: /\d+/ })} />
           <br />      
          {errors.Utropspris && errors.Utropspris.type === 'min' && <span>Number shouldnt be less than one</span>}<br/>
      {errors.Utropspris && <span style={{color: "red"}}>This is required.</span>}
      </div>
        <input type="hidden" name="SkapadAv" value={sessionStorage.getItem("user")} ref={register({ required: true })} />
     
        <input type="hidden" name="Gruppkod" value="2240"  ref={register()}/> 
            <input type="submit" value="Create Auction" />
          </form>
          </div>
          </React.Fragment>
        );
      }
     

    
export default App