import React, {Component} from 'react'
import hammerstrike from './hammerstrike.gif'
import groinkick from './groinkick.gif'
import heelpalm from './heelpalm.gif'
import elbowstrike from './elbowstrike.gif'
import bearhug from './bearhug.gif'
import handtrap from './handtrap.gif'
import headlock from './headlock.gif'
import './Selfdefence.css'
import AliceCarousel from 'react-alice-carousel';

class Gallery extends React.Component {

  onSlideChange(e) {
    console.log('Item`s position during a change: ', e.item);
    console.log('Slide`s position during a change: ', e.slide);
  }

  onSlideChanged(e) {
    console.log('Item`s position after changes: ', e.item);
    console.log('Slide`s position after changes: ', e.slide);
  }

  render() {
    const responsive = {
      0: {
        items: 1
      }
    };

    return (
      <AliceCarousel
        duration={200}
        autoPlay={true}
        startIndex = {1}
        fadeOutAnimation={true}
        mouseDragEnabled={true}
        playButtonEnabled={true}
        responsive={responsive}
        autoPlayInterval={2000}
        autoPlayDirection="rtl"
        autoPlayActionDisabled={true}
        onSlideChange={this.onSlideChange}
        onSlideChanged={this.onSlideChanged}
      >
        <div><img src = {hammerstrike} alt = 'loading...' className="selfdef"/><h4>HAMMER STRIKE</h4></div>
        <div><img src = {groinkick} alt = 'loading...' className="selfdef"/><h4>GROIN KICK</h4></div>
        <div><img src = {heelpalm} alt = 'loading...' className="selfdef"/><h4>HEEL PALM STRIKE</h4></div>
        <div><img src = {elbowstrike} alt = 'loading...' className="selfdef"/><h4>ELBOW STRIKE</h4></div>
        <div><img src = {bearhug} alt = 'loading...' className="selfdef"/><h4>ESCAPE FROM A 'BEAR HUG ATTACK'</h4></div>
        <div><img src = {handtrap} alt = 'loading...' className="selfdef"/><h4>ESCAPE WITH HAND TRAPPED</h4></div>
        <div><img src = {headlock} alt = 'loading...' className="selfdef"/><h4>ESCAPE FROM SIDE HEADLOCK</h4></div>
      </AliceCarousel>
    );
  }
}

function Selfdefence() {
    return (
        <div style={{backgroundColor:"lightgrey"}}>
            <h4>BASIC SELF DEFENCE MOVES</h4>
            <Gallery/>
            <hr style={{color:"black"}}/>
        </div>
    )
}

export default Selfdefence
