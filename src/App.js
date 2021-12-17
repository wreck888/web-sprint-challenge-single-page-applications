import React, { useState, useEffect } from "react";
import { Route, Link, Router, Switch, useHistory  } from 'react-router-dom';
import Home from './Home';
import Pizza from './Pizza';
import * as yup from 'yup';
import schema from './validation/schema'
import axios from 'axios';
import Confirmation from "./Form";

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
        username: formValues.name.trim(),
        size: formValues.size,
        toppings: ['pepperoni', 'sausage', 'chicken','cheese', 'pineapple', 'mushroom'].filter(pizza => !!formValues[pizza]),
        sauce: formValues.sauce,
        special: formValues.special.trim(),
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
      <div className='App'>
      <nav>
        <h1 className='store-header'>BloomTech Eats</h1>
        <div className='nav-links'>
          <Link to ='/'>Home</Link>
          <Link>Login</Link>
        </div>
      </nav>

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
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      </div>


    
  );
};
export default App;
