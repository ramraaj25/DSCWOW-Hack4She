import React from 'react';

function Helpnumbers(){
    const numbers =[
        {
            name:"Women in Distress",
            num: 1091
        },
        {
            name:"Police Control Room",
            num: 100
        },
        {
            name:"Child Helpline",
            num: 1098
        },
        {
            name:"Anti Stalking/Obscene calls",
            num: 1096
        }
    ]
    return(
        <div>
            <h2>HELPLINE NUMBERS</h2>
            <h4>
                Don't take eve-teasing lightly. Report immediately!
            </h4>
            {numbers.map((number)=>(
                <p>{number.name} : {number.num}</p>
            ))}
        </div>
    )
}
export default Helpnumbers