import React from 'react'
import ShowAuctionsList from './ShowAuctionsList'
import Search from './Search'
//Komponent som visar searchinput samt button som 1 komponent, samt en komponent som har en lista, samt en komponent till höger i mitten
//som har visar den valda auktionens info samt bud
function Home() {


    // logic//
    return (
        <div className="container text-center">
        Här är sidan som visar sök,lista på komponenter samt auktion detalj view.
           {<Search/>}
           <ShowAuctionsList/>
           {/*<AuctionDetailItems/>*/}
        </div>
    )
}

export default Home
