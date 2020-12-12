import React from 'react'
import women from './women.jpg'
function Law() {
    return (
        <div style= {{backgroundColor:"lightgray"}}>
    <div>
    <nav className="nav-extended" style= {{backgroundImage:`url(${women})`, backgroundPosition:"center",backgroundSize:"cover"}}>
    <div className="nav-wrapper"style={{alignItems:"center", fontWeight:"bold", textDecoration:"underine", fontSize:"20px"}}>
    <span className="nav-title">WOMEN SAFETY</span>
    </div>
    <div className="nav-content">
      <span className="nav-title" style={{alignItems:"center", fontWeight:"bold"}}>Laws for Women</span>
    </div>
    <div className="nav-content" style={{alignItems:"center", fontWeight:"bold"}}>
      <ul className="tabs tabs-transparent">
        <li className="tab"><a className="active" href="#test1">Stage 1</a></li>
        <li className="tab"><a href="#test2">Stage 2</a></li>
        <li className="tab"><a href="#test3">Stage 3</a></li>
        <li className="tab"><a href="#test4">Stage 4</a></li>
        <li className="tab"><a href="#test5">Stage 5</a></li>
        <li className="tab"><a href="#test6">Stage 6</a></li>
      </ul>
    </div>
  </nav>
    </div>
  <p style= {{fontWeight:"bold"}}>Crimes against women have increased manifolds in this ongoing pandemic.Knowledge about laws for women in this country is of utmost importance at this hour.At all the stages, women are victims of one or the other crimes. Awareness about laws regarding women safety is the need of the hour. 
                <br/>DON'T HESITATE TO RAISE YOUR VOICE EVEN AT THE SLIGHTEST WRONG DONE TO YOU. REMEMBER, ONE VOICE CAN MOTIVATE MILLIONS!</p>
        
  <div className="container"><div id="test1" className="col s12" style= {{backgroundColor:"rgb(26, 200, 190)"}}>Stage 1<br/>Foeticide and infanticide<br/><ul><li>Medical Termination of Pregnancy Act,1971</li></ul></div></div>
  <div className="container"><div id="test2" className="col s12" style= {{backgroundColor:"#778899"}}>Stage 2<br/>	School girl<br/><ul><li>The Prohibition of Child Marriage Act, 2006</li></ul></div></div>
  <div className="container"><div id="test4" className="col s12" style= {{backgroundColor:"rgb(26, 200, 190)"}}>Stage 3<br/>	Adolescence<br/><ul><li>Protection of Children from Sexual Offences Act, 2012</li></ul></div></div>
  <div className="container"><div id="test1" className="col s12" style= {{backgroundColor:"#778899"}}>Stage 4<br/>	Marriage<br/><ul><li>Protection of Women from Domestic Violence Act, 2005 <br/></li>
  <li>The Commission of Sati (Prevention) Act, 1987 (3 of 1988)<br/></li>
  <li>The Dowry Prohibition Act, 1961 (28 of 1961) (Amended in 1986)</li></ul></div></div>
  <div className="container"><div id="test2" className="col s12" style= {{backgroundColor:"rgb(26, 200, 190)"}}>Stage 5<br/>	Motherhood<br/><ul><li>Medical Termination of Pregnancy Act,1971</li></ul></div></div>
  <div className="container"><div id="test4" className="col s12" style= {{backgroundColor:"#778899"}}>Stage 6<br/>	Workplace <br/> 
  <ul><li>The Sexual Harassment of Women at Workplace (PREVENTION, PROHIBITION and REDRESSAL) Act, 2013<br/></li>
  <li>Equal Remuneration Act, 1976</li></ul></div></div>
  <footer className="page-footer" style= {{backgroundColor:"teal"}}>
          <div>
            <div className="row">
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Navigate</h5>
                <ul style= {{display:"inline-flex",margin:"0px",padding:"0px",overflow:"hidden",float:"left"}}>
                  <li style= {{display:"flex",margin:"10px",padding:"10px"}}><a className="grey-text text-lighten-3" href="#test1">Stage 1</a></li>
                  <li style= {{margin:"10px",padding:"10px"}}><a className="grey-text text-lighten-3" href="#test2">Stage 2</a></li>
                  <li style= {{margin:"10px",padding:"10px"}}><a className="grey-text text-lighten-3" href="#test3">Stage 3</a></li>
                  <li style= {{margin:"10px",padding:"10px"}}><a className="grey-text text-lighten-3" href="#test4">Stage 4</a></li>
                  <li style= {{margin:"10px",padding:"10px"}}><a className="grey-text text-lighten-3" href="#test5">Stage 5</a></li>
                  <li style= {{margin:"10px",padding:"10px"}}><a className="grey-text text-lighten-3" href="#test6">Stage 6</a></li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
            </div>
    )
}

export default Law
