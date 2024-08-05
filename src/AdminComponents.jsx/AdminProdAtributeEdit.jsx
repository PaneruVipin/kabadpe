import React, { useState } from "react";

const AdminProdAtributeEdit = ({onClickClose , data}) => {
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
      <section className="waste-prod-edit-comp" onClick={onClickClose}>
        <div className="waste-prod-edit-main-bx admin-prod-atribute-main-bx" 
        onClick={(e) => e.stopPropagation()}>
          <h5> {data.title} </h5>

          <div className="two-fild-grid">
            <div className="admin-login-fild admin-login-fild3">
              <label htmlFor="#">Attribute Title</label>
              <input
                type="text"
                name="atributetitle"
                id="atributetitle"
                autoComplete="off"
                placeholder="Color or Size or Dimension or Material or Fabric"
              />
            </div>
            <div className="admin-login-fild admin-login-fild3">
              <label htmlFor="#">Display Name</label>
              <input
                type="text"
                name="displayname"
                id="displayname"
                autoComplete="off"
                placeholder="Display Name"
              />
            </div>
          </div>

          <div className="admin-login-fild admin-login-fild3 mt-3 mb-4">
            <label htmlFor="#">Options</label>
            <select
              type="text"
              name="category"
              id="productname"
              autoComplete="off"
            >
              <option value="choose">Choose Options</option>
              <option value="checkbox">Check Box</option>
            </select>
          </div>

          <div className="admin-login-fild admin-login-fild3">
          <label htmlFor="#">Display Name</label>
          <div className="variants-attribute-bx variants-attribute-bx-admin">
            <div className="variant-elem--bx">
              {attribute.map((curElem, indx) => (
                <div className="variant-bx" key={indx}>
                  <span> {curElem} </span>
                  <button onClick={() => handleDelteChange(indx)}>
                    <ion-icon name="close-outline"></ion-icon>
                  </button>
                </div>
              ))}
            </div>

            <input
              type="text"
              name="varint"
              id="varint"
              value={value}
              onChange={handleInputChange}
              onKeyDown={handleKeyPress}
              placeholder="Please enter to add variants"
              autoComplete="off"
              required
            />
          </div>
          </div>

          <button type="submit" className="add-prod-btn  confirm-btn-aa confirm-btn">
            Add Attribute
          </button>

          <div onClick={onClickClose} className="close-btn">
            <i className="fa-solid fa-xmark"></i>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminProdAtributeEdit;
