import React, { useState } from 'react'

const AddAttributes = ({onclickClose , data}) => {
    const [attribute , setAttribute] = useState([]);
    const [value , setValue] = useState('');

    const handleInputChange = (e) => {
        setValue(e.target.value);
    }

    const handleKeyPress = (e) => {

        if(e.key === 'Enter' && value.trim() !== ""){
            setAttribute([...attribute , value.trim()])
            setValue('')
        }
        
    }

    const handleDelteChange = (i) => {

        const newData =  attribute.filter((elem,id) => id !== i );
        setAttribute(newData)
        
    }
    
  return (
    <>

    <section className="add-attribute-comp" onClick={onclickClose}>

        <div className="add-atribute-bx" onClick={(e) => e.stopPropagation()}>

            <div className="attribute-heading">

            <div className="atrbiute-heading">
                <h6> {data.title} </h6>
                <p> {data.para} </p>
            </div>

        
            <button onClick={onclickClose} className=" delt-btn21221">
            <ion-icon name="close-outline"></ion-icon>
                            </button>

            </div>

        <div className="atribute-fields-flex-bx">

            
        <div className="ord-filt-bx add-prod-inpt-bx">
            <span>Attribute Title
            </span>
                <input type="text" name='atributtitle' id='atributtitle' placeholder='Color or Size or Dimension or Material or Fabric' autoComplete='off' required  />
            </div>

                     
        <div className="ord-filt-bx add-prod-inpt-bx">
            <span>Display Name
            </span>
                <input type="text" name='displayname' id='displayname' placeholder='Display Name' autoComplete='off' required  />
            </div>
            

        <div className="ord-filt-bx add-prod-inpt-bx">
            <span>Options
              
            </span>

            <div className=" at-sel-bx">
                <select name="options" id="options">
                    <option value="option">Choose Options</option>
                    <option value="Dropdown">Dropdown</option>
                    <option value="Radio">Radio</option>

                </select>
                </div>
        
            </div>

            <div className="ord-filt-bx add-prod-inpt-bx">
            <span>Variants </span>

            <div className="variants-attribute-bx">

                    <div className="variant-elem--bx">
                        {attribute.map((curElem,indx) => 
                        <div className="variant-bx" key={indx}>
                            <span> {curElem} </span>
                            <button onClick={() => handleDelteChange(indx)}>
                            <ion-icon name="close-outline"></ion-icon>
                            </button>
                        </div>
                        )}
                    </div>

                    
                    <input type="text" name='varint' id='varint' value={value} onChange={handleInputChange} 
                    onKeyDown={handleKeyPress} placeholder='Please enter to add variants' autoComplete='off' required />
            
            </div>

         

        
            </div>
            
        </div>
          
        <div className=" attribute-btns-flex">
                <button className='prod-add-del-btn upld-can-prod'>Cancel</button>
                <button className='prod-add-del-btn upld-add-prod'>Add Product</button>
            </div>
        </div>
        
    </section>

      
    </>
  )
}

export default AddAttributes
