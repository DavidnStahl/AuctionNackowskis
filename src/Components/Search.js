import {GetAuctionsContext} from '../Contexts/GetAuctionsContext';
import React,{useContext,useEffect,useState,useRef} from 'react'


const Search = React.memo(() =>{ 

    const searchword = useRef();
    const [AuctionsToShow, setAuctionsToShow,getSearchedResultAuctions] = useContext(GetAuctionsContext);

    const handleSubmit = (search) => {  
        getSearchedResultAuctions(search);
    }
        return(
            <>
            <div>
            
   
            <input  type="text" name="search" ref={searchword}/>
        
            <button  className="btn-lg btn-danger" onClick={() => handleSubmit(searchword.current.value)}><i class="fa fa-search"></i> Search </button>
          
            <br/>
            <br/>
            </div>
    
            </>

        )
    })

export default Search