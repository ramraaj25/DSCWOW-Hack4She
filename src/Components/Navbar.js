import React from 'react'
import Helpnumbers from './Helpnumbers'
import Tips from './Tips'
import Selfdefence from './Selfdefence'
import M from "materialize-css"
function Navbar() {
  return (
    <div style={{ backgroundColor: "#ffd54f" }}>
      <nav className="nav-extended">
        <div class="nav-wrapper">
          <a href="#" class="brand-logo center">Women Safety Measures</a>
        </div>
        <div class="nav-content">
          <ul class="tabs tabs-transparent">
            <li class="tab" style={{ fontWeight: "bold" }}><a href="#Selfdefence">Self Defence</a></li>
            <li class="tab" style={{ fontWeight: "bold" }}><a class="active" href="#Precautions">Precautions</a></li>
            <li class="tab" style={{ fontWeight: "bold" }}><a href="#Helpline">Helpline</a></li>
          </ul>
        </div>
      </nav>
      <div id="Selfdefence" class="col s12"><Selfdefence /></div>
      <div id="Precautions" class="col s12"> <Tips /></div>
      <div id="Helpline" class="col s12"><Helpnumbers /></div>
    </div>
  )
}

export default Navbar
