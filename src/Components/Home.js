import React,{useEffect} from 'react'
import ShowAuctionsList from './ShowAuctionsList'
import Search from './Search'

//Komponent som visar searchinput samt button som 1 komponent, samt en komponent som har en lista, samt en komponent till höger i mitten
//som har visar den valda auktionens info samt bud
const Home = () =>{
    
    useEffect(() => {
        
        if(sessionStorage.getItem("user") !== null){
            let home = document.getElementById("home")
            home.hidden = false;
            let addnewauction = document.getElementById("addnewauction")
            addnewauction.hidden = false;
        }
    })
    // logic//
    return (
        <div className="container text-center">
        <br/>
        <h1>Nackowskis</h1>
        <br/>
           {<Search/>}
           <ShowAuctionsList/>
           {/*<AuctionDetailItems/>*/}
        </div>
    )
}

export default Home
