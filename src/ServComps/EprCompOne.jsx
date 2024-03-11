import React from 'react'

const EprCompOne = ({comnData}) => {
  return (
    <>
       <section className="serv-comp-one">
        <div className="comon-container-2">
          <div className="serv-heading">
            <h3> {comnData.name} </h3> 
            <p> {comnData.para} </p>
         
          </div>

          <div className="full-text full-text2 mb-5">
            <h6> {comnData.title} </h6>
            <p>
           {comnData.text}
            </p>
            <span> {comnData.keyword} </span>
          </div>

          <div className="full-width-img">
            <img src="/images/customImg/banner-bg.png" alt="" />
          </div>
        </div>
      </section>
    </>
  )
}

export default EprCompOne
