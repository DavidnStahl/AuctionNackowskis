import {GetAuctionsContext} from '../Contexts/GetAuctionsContext';
import React,{useContext,useEffect,useState,useRef} from 'react'

const Search = React.memo(() =>{ 

    const searchword = useRef();
    const [AuctionsToShow, setAuctionsToShow,getOpenAuctions,getSearchedResultAuctions] = useContext(GetAuctionsContext);

  const handleSubmit = (search) => {
      getSearchedResultAuctions(search);
  }
        return(
            <div>
             
            <input type="text" name="search" ref={searchword}/><br/>

            <button class="btn btn-danger" onClick={() => handleSubmit(searchword.current.value)}>Search </button>
         <br/>
         <br/>
         </div>

        )
})
export default Search