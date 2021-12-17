import React from 'react';
import { useHistory, BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Pizza from './Pizza';

export default function Home() {

  return (
    <div>
      <h2>Home of the Best Pizza in Tech!</h2>  
        <button > 
            <Link id="order-pizza" to="/pizza">
                Order Your Pizza Here!
            </Link> 
        </button>                       
        <Route exact path="/pizza" >
            <Pizza/>
        </Route>              
    </div>     
  )
}