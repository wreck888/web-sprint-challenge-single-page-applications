describe('Form App', ()=>{
    beforeEach(() =>{
        cy.visit('http://localhost:3001/pizza')
    })

    const nameInput = () => cy.get('input[name=name]');
    const specialInput = () => cy.get('input[name=special]');
    const toppingsBox = () => cy.get('[type=checkbox]');
    const submitBtn = () => cy.get('button[id="order-button"]');
    const sizeSelect = () => cy.get('select[name=size');
    const sauceChoice = () => cy.get('[type="radio"]');


    it('CHECKING ON MY SANITY', () => {
        expect(1 + 2).to.equal(3);
        expect(2 + 2).not.to.equal(5); 
        expect({}).not.to.equal({}); 
        expect({}).to.eql({});
    })

    it('Checking if proper elements are showing', () => {
        nameInput().should('exist')
        specialInput().should('exist')
        toppingsBox().should('exist')
        submitBtn().should('exist')      
        sizeSelect().should('exist')
        sauceChoice().should('exist')
    })

    it('Checking if confirm order button is disabled', () => {
        submitBtn().should('be.disabled');
  })

  describe('Inputing Data', () => {
        
    it('Test input data in text boxes and select multiple toppings', () => {
        nameInput()
            .should('have.value', '')
            .type('Luke Skywalker')
            .should('have.value', 'Luke Skywalker')

        sizeSelect()
            .should('have.value', '')
            .select(['Medium'])
            .should('have.value', 'Medium')

        toppingsBox()
            .check()
            .should('be.checked')
        
        specialInput()
            .should('have.value', '')
            .type('I live about 2 parsecs away')
            .should('have.value', 'I live about 2 parsecs away')

    })

    
  
})

    describe('Checking error validation if name is inputed incorrectly', () => {
        
       it('Validating errors', () => {
            nameInput()
                .should('have.value', '')
                .type('A')
                .should('have.value', 'A')    

        cy.contains('name must be at least 2 characters').should('exist')
      
        })  

    })
    describe('Testing Submiting the Form', () => {
        
        it('Testing comfirm button', () => {
            nameInput()
                .should('have.value', '')
                .type('Luke Skywalker')
                .should('have.value', 'Luke Skywalker')
    
            sizeSelect()
                .should('have.value', '')
                .select(['Medium'])
                .should('have.value', 'Medium')
            
            sauceChoice()
                .first().check()

            toppingsBox()
                .check()
                .should('be.checked')

            specialInput()
                .should('have.value', '')
                .type('I live about 2 parsecs away')
                .should('have.value', 'I live about 2 parsecs away')

            submitBtn()
                .click()
    
        })  
             
    })









})