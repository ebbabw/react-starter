import React from 'react'
import { Card } from 'Card'


export const App = (props) => {

return (

    <div className="cardContainer">
    
    <Card 
    
        cardClass='lemonBox'
        subTitle='Lemon'
        emoji='🍋'
        sectionClass='lemonlightpart'
        sectionBackClass='lemonlightpartBack'
        text='This is a really tasty fruit!'
        buttonClass="lemonbutton"
        buttonText='ORDER NOW'

    />

    <Card 

        cardClass='rocketBox'
        subTitle='Rocket'
        emoji='🚀'
        sectionClass='rocketlightpart'
        sectionBackClass='rocketlightpartBack'
        text='Join us to the outer space!'
        buttonClass="rocketbutton"
        buttonText='BOOK SEAT'
    
    />

    <Card 

       cardClass='dogBox'
       headerClass='doggy-header'
       subTitle='Doggy'
       emoji='🐶'
       sectionClass='doglightpart'
       sectionBackClass='doglightpartBack'
       text="Hello, do you want to be friends?"
       buttonClass="dogbutton"
       buttonText='ADOPT ME'
    
    />

   </div>



)

}
