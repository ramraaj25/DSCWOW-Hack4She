import React from 'react'
import './Discussion.css'
import M from 'materialize-css'
function Discussion() {
    return (
        <div style={{backgroundColor:"#b2dfdb"}}>
        <div className="container">
        <nav style={{backgroundColor:"teal"}}>
    <div className="nav-wrapper" >
      <a href="#" class="brand-logo center">DISCUSSION FORUM</a>
      </div>
        </nav>
        <p style={{fontWeight:"bold"}}>Did you find a location unsafe? Don't forget to add it here.</p>
        </div>
        <div className="container">
            <div className="row">
            <div className="input-field row" style={{color:"black"}}>
          <input placeholder="Enter location" id="location" type="text" className="validate" />
          <label for="location">Location</label>
            </div>

            <div className="input-field row" style={{color:"black"}}>
          <input placeholder="Enter description" id="description" type="text" className="validate"/>
          <label for="description">Description</label>
            </div>

            <div class="file-field input-field">
      <div class="btn">
        <span>Upload Image</span>
        <input type="file"/>
      </div>
      <div class="file-path-wrapper">
        <input class="file-path validate" type="text"/>
      </div>
    </div>

    <button class="btn waves-effect waves-light" type="submit" name="action">Post
  </button>
            </div>
            </div>

                <div className= "container">
                <div className = "row">
                <div class="col s12 m7">
    <div class="card horizontal">
      <div class="card-image">
        <img src="https://lorempixel.com/100/190/nature/6"/>
      </div>
      <div class="card-stacked">
        <div class="card-content">
          <p>I am a very simple card. I am good at containing small bits of information.</p>
        </div>
        <div class="card-action">
          <a href="#">This is a link</a>
        </div>
        </div>
        </div>
        </div>
        </div>

      <div className = "row">
                <div class="col s12 m7">
    <div class="card horizontal">
      <div class="card-image">
        <img src="https://lorempixel.com/100/190/nature/6"/>
      </div>
      <div class="card-stacked">
        <div class="card-content">
          <p>I am a very simple card. I am good at containing small bits of information.</p>
        </div>
        <div class="card-action">
          <a href="#">This is a link</a>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
    )
}

export default Discussion
