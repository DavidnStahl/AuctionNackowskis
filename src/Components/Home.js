import React,{useEffect} from 'react'
import ShowAuctionsList from './ShowAuctionsList'
import Search from './Search'

const Home = () =>{
    
    useEffect(() => {        
        if(sessionStorage.getItem("user") !== null){
            let home = document.getElementById("home")
            home.hidden = false;
            let addnewauction = document.getElementById("addnewauction")
            addnewauction.hidden = false;
        }
    })
    return (
        <div className="container text-center">
        <br/>
        <h1>Nackowskis</h1>
        <br/>
           {<Search/>}
           <ShowAuctionsList/>
        </div>
    )
}

export default Home
