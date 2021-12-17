import React from "react"
import styled from 'styled-components'

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


const Pizza = (props) => {
    const {
         submit, change, errors, values, disabled
    } = props

    const onSubmit = event => {
        event.preventDefault()
        submit()
    }
    const onChange = evt => {
        const { name, value, checked, type } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse)
      }
    
    return(
        <StyledDiv>
    <form onSubmit={onSubmit} id='pizza-form'> 
    <div> 
       <h2>Build Your Own Pizza!</h2> 
       
            <div>
               <label><h3>Choose Your Size</h3>
               <select name = 'size' id = 'size-dropdown' value = {values.size} onChange={onChange}>
                    <option value="">-- Select a Size --</option>
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                </select>
            </label> <br/>
            </div>
            <div>
            <h3>Choose Your Sauce</h3>
            <label>Marinara Sauce
              <input
                type='radio'
                name='sauce'
                value='marinara'
                onChange={onChange}
                checked={values.sauce === 'marinara'}
              />
            </label><br/>
    
            <label>Buffalo Sauce
              <input
                type='radio'
                name='sauce'
                value='buffalo'
                onChange={onChange}
                checked={values.sauce === 'buffalo'}
              />
            </label><br/>
            <label>BBQ Sauce
              <input
                type='radio'
                name='sauce'
                value='bbq'
                onChange={onChange}
                checked={values.sauce === 'bbq'}
              />
            </label><br/>
            </div>

            <h3>Gluten Option</h3>
            <label>Gluten Free Crust 
              <input
                type='radio'
                name='glutenfree'
                value='Gluten Free'
                onChange={onChange}
                checked={values.glutenfree === 'Gluten Free'}
              />
            </label><br/>
           
            <h3>Choose Toppings</h3> 
               <label>Pepperoni&nbsp;
               <input 
                   checked = {values.pepperoni} 
                   onChange = {onChange} 
                   name = 'pepperoni' 
                   type = 'checkbox' 
               />
                </label><br/>
                    <label>Sausage&nbsp;
                <input 
                   checked = {values.sausage} 
                   onChange = {onChange} 
                   name = 'sausage' 
                   type = 'checkbox' 
               />
                </label><br/>
                <label>Chicken&nbsp;
                <input 
                   checked = {values.chicken} 
                   onChange = {onChange} 
                   name = 'chicken' 
                   type = 'checkbox' 
               />
                </label><br/>
                <label>Cheese&nbsp;
                <input 
                   checked = {values.cheese} 
                   onChange = {onChange} 
                   name = 'cheese' 
                   type = 'checkbox' 
               />
               </label><br/>
               <label>Pineapple&nbsp;
                <input 
                   checked = {values.pineapple} 
                   onChange = {onChange} 
                   name = 'pineapple' 
                   type = 'checkbox' 
               />
                </label><br/>
                <label>Mushroom&nbsp;
                <input 
                   checked = {values.mushroom} 
                   onChange = {onChange} 
                   name = 'mushroom' 
                   type = 'checkbox' 
               />
                </label>  <br/>
                <h3>Customer Information</h3>
                   <label> 
              Name&nbsp;  
               <input 
                   value = {values.name} 
                   onChange = {onChange} 
                   name = 'name' 
                   type = 'text'
                   id = 'name-input' 
               />                                    
           </label><br/> 
           <label> 
              Special Instructions&nbsp;  
               <input 
                   id = 'special-text'
                   value = {values.special} 
                   onChange = {onChange} 
                   name = 'special' 
                   type = 'text' 
               />                                    
           </label> <br/> 
                  
       
       <div> 
      
           <button id = 'order-button' disabled={disabled}>Confirm Order</button> 
           <p>{errors.name}</p> 
       
           </div> 
    </div> 
    </form> 
    </StyledDiv>
    );
}

export default Pizza;

                       