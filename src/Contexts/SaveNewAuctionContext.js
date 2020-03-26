import React, {createContext,useState} from 'react';

export const SaveNewAuctionContext = createContext();


const SaveNewAuctionContextProvider = (props) => {
    const [] = useState();
    
                       
     return (
          <SaveNewAuctionContext.Provider value={[]}>
            {props.children}
          </SaveNewAuctionContext.Provider>
  )   
}

export default SaveNewAuctionContextProvider