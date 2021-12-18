import React, { useState, useEffect } from "react";
import { Route, Link, Router, Switch, useHistory  } from 'react-router-dom';
import Home from './Home';
import Pizza from './Pizza';
import * as yup from 'yup';
import schema from './validation/schema'
import axios from 'axios';
import Confirmation from "./Form";
import styled from 'styled-components';
import './App.css'; 

const StyledApp = styled.div`
    text-align: center;
    border: 1px solid rgb(210, 210, 210);
    box-shadow: 0px 1px 6px -2px rgb(128, 127, 127);
    border-radius: 8px;
    margin: 16px;
    padding: 16px 8px 12px 16px;
    background-color: #2D82B7;
    
`
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
    const StyledNav = styled.div`
    text-align: center;
    border: 1px solid rgb(210, 210, 210);
    box-shadow: 0px 1px 6px -2px rgb(128, 127, 127);
    border-radius: 8px;
    margin: 16px;
    padding: 16px 8px 12px 16px;
    background-color: #f3f3f3;
    color: black;
    `



const initialFormValues = { 
  name: "", 
  size: "",
  pepperoni: false,
  sausage: false,
  chicken: false,
  cheese: false,
  pineapple: false,
  mushroom: false,
  sauce: "",
  special: "",
  glutenfree: "",
} 

const initialFormErrors = {
  name: '',
}

const initialPizza = []
const initialDisabled = true 

const App = () => {


  const [pizza, setPizza] = useState(initialPizza) 
  const [formValues, setFormValues] = useState(initialFormValues) 
  const [formErrors, setFormErrors] = useState(initialFormErrors) 
  const [disabled, setDisabled] = useState(initialDisabled) 
  const history = useHistory();

  const validate = (name, value) => {
      yup.reach(schema, name)
        .validate(value)
        .then(() => setFormErrors({ ...formErrors, [name]: '' }))
        .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }
  
  const postNewPizza = newPizza => { 
    axios.post('https://reqres.in/api/orders', newPizza) 
    .then (response =>{ 
      console.log(response)
      setPizza([response.data, ...pizza]); 
    }).catch(error => console.error(error)) 
    .finally(() => setFormValues(initialFormValues)) 

  } 

        
  const inputChange = (name, value) => {           
      validate(name, value);            
      setFormValues({ ...formValues, [name] : value})
      }
    
    const formSubmit = () => {
      const newPizza = {
        name: formValues.name,
        size: formValues.size,
        toppings: ['pepperoni', 'sausage', 'chicken','cheese', 'pineapple', 'mushroom'].filter(pizza => !!formValues[pizza]),
        sauce: formValues.sauce,
        special: formValues.special.trim(),
        glutenfree: formValues.glutenfree,
      }
      postNewPizza(newPizza)
      setFormValues(initialFormValues)
      history.push('/form')
    }
    

    useEffect(() => {
      schema.isValid(formValues).then(valid =>
        setDisabled(!valid)
      )
    }, [formValues])
  
  return (
    <StyledApp>
      <StyledNav className='App'>      
              <h1 className='store-header'>BloomTech Eats</h1>        
          <Link to ='/'>Home</Link>&nbsp;
          <Link>Login</Link>     
        </StyledNav>

    <Switch>        
      <Route exact path="/form">
            {pizza.map(confirmation => {
              return (
                <Confirmation key={confirmation.id} details={confirmation} />
              )
            })}
      </Route>
            
      <Route path='/pizza'>
        <Pizza
          values = {formValues} 
          change = {inputChange} 
          submit = {formSubmit} 
          disabled = {disabled} 
          errors = {formErrors} 
        /> 
      </Route> 

    <StyledDiv>
      <Route path="/">
          <Home />
      </Route>
    </StyledDiv>

    </Switch>   
    </StyledApp>
    
  );
};
export default App;
