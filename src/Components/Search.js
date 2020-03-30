import {GetAuctionsContext} from '../Contexts/GetAuctionsContext';
import React,{useContext,useEffect,useState,useRef} from 'react'

function Search()
{
    const searchword = useRef();
    const [AuctionsToShow, setAuctionsToShow,getOpenAuctions,getSearchedResultAuctions] = useContext(GetAuctionsContext);

  const handleSubmit = (search) => {
      getSearchedResultAuctions(search);
  }
        
        return(
            <div>
             
            <input type="text" name="search" ref={searchword}/><br/>

            <button onClick={() => handleSubmit(searchword.current.value)}>Search </button>
         
         </div>

        )
}
export default Search