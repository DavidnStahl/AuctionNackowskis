import {GetAuctionsContext} from '../Contexts/GetAuctionsContext';
import React,{useContext,useEffect,useState} from 'react'

function Search()
{
    const [name, setName] = useState("");
    const [AuctionsToShow, setAuctionsToShow,getOpenAuctions,getSearchedResultAuctions] = useContext(GetAuctionsContext);

  const handleSubmit = (evt) => {
      evt.preventDefault();
      getSearchedResultAuctions(name);
  }
        
        return(
            <div>
            <form onSubmit={handleSubmit}> 
            <input type="text" name="search" onChange={e => setName(e.target.value)}/><br/>

            <button>Search </button>
         </form>
         </div>

        )
}
export default Search