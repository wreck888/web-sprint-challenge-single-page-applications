import React from "react";
import styled from 'styled-components';

const StyledDiv = styled.div`
    text-align: center;
    border: 1px solid rgb(210, 210, 210);
    box-shadow: 0px 1px 6px -2px rgb(128, 127, 127);
    border-radius: 8px;
    margin: 16px;
    padding: 16px 8px 12px 16px;
    background-color: #f3f3f3;
    color: black;
    `


function Confirmation({ details }) {
   
    return (       
        <StyledDiv className='pizza-container'>
            <h1>Pizza Confirmed!!</h1>
            <h2>Congrats! Pizza is on it's way!</h2>
            <div >
                <p>Name: {details.name}</p>
                <p>Size: {details.size}</p>               
                <p>Sauce: {details.sauce}</p>                
                <p>{details.glutenfree}</p>
                {               
                <p>Toppings:
                    <p>
                        {details.toppings.map((top, idx) => <p key={idx}>{top}</p>)}
                     </p>
                </p>
                }
                <p>Special Instructions: {details.special}</p>
            </div>
        </StyledDiv>
    )
}
export default Confirmation 