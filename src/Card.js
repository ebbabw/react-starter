import React, { useState } from 'react'

export const Card = (props) => {

    const [clicked, setClicked] = useState(false)

    return (

        <article>
             {clicked === false &&
           <div className={props.cardClass}>
                <h1 className={props.subTitle}>{props.subTitle}<span className="emoji" role="img" aria-label="Emoji">{props.emoji}</span></h1>
                <section className={props.sectionClass}>
                <h2 className="text">{props.text}</h2>
                <button 
                className={props.buttonClass}
                onClick={() => setClicked(true)}
                >{props.buttonText}</button>
            
            </section>
           </div>
           }
            {clicked === true &&
            
            <div className={props.cardClass}>
            <h1 className={props.subTitle}>{props.subTitle}</h1>
            <section className={props.sectionBackClass}>
            <span className="emoji-back" role="img" aria-label="Emoji">{props.emoji}</span>
            </section>
            
            </div>
            
            
            }



        </article>

        
    )
  
}

