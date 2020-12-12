import React from 'react'
import spray from './spray.jpg'
import loud from './loud.jpg'
import drink from './drink.jpg'
import alone from './alone.jpg'
import stranger from './stranger.jpg'
import cab from './cab.jpg'
import './Tips.css'
function Tips() {
    return (
        <div style={{backgroundColor:"#b2dfdb"}}>
            <h5>“Safety isn’t expensive, it’s priceless.”</h5>
            <div style={{margin:"10px"}}>
            <div style={{display:"flex", justifyContent:"space-between"}}>
        <div className="row">
        <div className="col m3 m7">
        <div className="card">
        <div className="card-image" style={{position:"relative", height:"300px", width:"400px"}}>
          <img src={spray} style={{height:"300px", width:"400px"}}/>
          <span className="card-title" style={{position:"absolute",fontWeight:"bold",fontSize:"15px"}}>ALWAYS CARRY A HANDY PEPPER SPRAY WITH YOU!</span>
        </div>
        </div>

        
        </div>
        </div>

        <div className="row">
        <div className="col m3 m7">
        <div className="card">
        <div className="card-image" style={{position:"relative", height:"300px", width:"400px"}}>
          <img src={loud} style={{height:"300px", width:"400px"}}/>
          <span className="card-title" style={{position:"absolute",fontWeight:"bold",fontSize:"15px"}}>NEVER SPEAK YOUR PERSONAL DETAILS LOUD!</span>
        </div>
        </div>
        </div>
        </div>
        <div className="row">
        <div className="col m3 m7">
        <div className="card">
        <div className="card-image" style={{position:"relative", height:"300px", width:"400px"}}>
          <img src={cab} style={{height:"300px", width:"400px"}}/>
          <span className="card-title" style={{position:"absolute",fontWeight:"bold",fontSize:"15px"}}>ALWAYS NOTE THE CAB NUMBER WHEN TRAVELLING!</span>
        </div>
        </div>
        </div>
        </div>
        </div>

        <div style={{display:"flex", justifyContent:"space-between"}}>
        <div className="row">
        <div className="col m3 m7">
        <div className="card">
        <div className="card-image" style={{position:"relative", height:"300px", width:"400px"}}>
          <img src={alone} style={{height:"300px", width:"400px"}}/>
          <span className="card-title" style={{position:"absolute",fontWeight:"bold",fontSize:"15px"}}>AVOID TRAVELLING IN DESERTED PLACE ALONE!</span>
        </div>
        </div>
        </div>
        </div>

        <div className="row">
        <div className="col m3 m7">
        <div className="card">
        <div className="card-image" style={{position:"relative", height:"300px", width:"400px"}}>
          <img src={stranger} style={{height:"300px", width:"400px"}}/>
          <span className="card-title" style={{position:"absolute",fontWeight:"bold",fontSize:"15px"}}>BEWARE OF PEOPLE AROUND YOU!</span>
        </div>
        </div>
        </div>
        </div>


        <div className="row">
        <div className="col m3 m7">
        <div className="card">
        <div className="card-image" style={{position:"relative", height:"300px", width:"400px"}}>
          <img src={drink} style={{height:"300px", width:"400px"}}/>
          <span className="card-title" style={{position:"absolute",fontWeight:"bold",fontSize:"15px"}}>
              ALWAYS POUR YOUR OWN DRINK. DRINKS MIGHT BE SPIKED!</span>
        </div>
        </div>
        </div>
        </div>
        </div>
            </div>
        <hr style={{color:"black"}}/>
        </div>
    )
}

export default Tips
