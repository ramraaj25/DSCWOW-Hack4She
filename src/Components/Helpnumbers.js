import React from 'react';
import M from "materialize-css"
import women from './women.jpg'


function Helpnumbers() {
    const numbers = [
        {
            name: "Women in Distress",
            num: 1091
        },
        {
            name: "Police Control Room",
            num: 100
        },
        {
            name: "Child Helpline",
            num: 1098
        },
        {
            name: "Anti Stalking/Obscene calls",
            num: 1096
        }
    ]
    return (
        <div style={{ backgroundColor: "lightgray" }}>
            <span className="card-title" style={{ fontWeight: "bold", fontSize: "15px" }}><h4>HELPLINE NUMBERS</h4></span>
            <h5>
                Don't take eve-teasing lightly. Report immediately!
            </h5>
            {numbers.map((number) => (
                <p>{number.name} : {number.num}</p>
            ))}
        </div>
    )
}
export default Helpnumbers