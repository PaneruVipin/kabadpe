import React, { useState } from 'react'

const Accordion = ({title , para}) => {
    const [isOpen , setIsOpen] = useState(false);

    const toggleAccordion = () => {

        setIsOpen(!isOpen)
        
    }
    
  return (
    <>

    <div className="accordion-bx">

        <div className={ isOpen ? "accordion-title-bx accordionactive" : "accordion-title-bx"} onClick={toggleAccordion}>

            <h6> {title} </h6>
            
        </div>

        {isOpen && <p> {para} </p>   }


    </div>
      
    </>
  )
}

export default Accordion
