import React from 'react';
import { Link, Route, } from 'react-router-dom';
import Pizza from './Pizza';
import styled
from 'styled-components';

const StyledH2 = styled.h2`
font-size: 2rem;
`

const StyledButton = styled.button`
color: black;
margin: 16px;
padding: 16px 8px 12px 16px;
font-size: 1rem;
border-radius: 15px;
`

export default function Home() {

  return (
    <div>
      <StyledH2>Home of the Best Pizza in Tech!</StyledH2>  
        <StyledButton > 
            <Link id="order-pizza" to="/pizza">
                Order Your Pizza Here!
            </Link> 
        </StyledButton>                       
        <Route exact path="/pizza" >
            <Pizza/>
        </Route>              
    </div>     
  )
}