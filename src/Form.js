import React from "react";

function Confirmation({ details }) {
   
    return (
        
        
        <div className='pizza-container'>
            <h1>Pizza Confirmed!!</h1>
            <div className="array">
                <h2> {details.name}</h2>
                <p>Size: {details.size}</p>
                <p>Special: {details.special}</p>
                <p>Sauce: {details.sauce}</p>
                

                {
                    !!details.toppings && !!details.toppings.length &&
                    <div>
                        Toppings:
                        <ul>
                            {details.toppings.map((like, idx) => <li key={idx}>{like}</li>)}
                        </ul>
                    </div>
                }
            </div>

        </div>
    )
}
export default Confirmation 