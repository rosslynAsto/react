import React from 'react'

const BtnColor = ({getRandonAll,randonColor}) => {
const colorObjButton={
    backgroundColor: randonColor
}
  return (
    <div className="btn">
         <button 
            className='card__btn' 
            style={colorObjButton}
            onClick={getRandonAll}
            >&#62;
        </button>
    </div>
   
  )
}

export default BtnColor