import React from 'react'
import menu from '../../data/foods'
import './style.css'

function FoodItems() {
  return (
    <div>
        <div className="food-categories">
            {
               menu.map((item, index)=>(
                <div className="menu-item text-center">
                    <img src={item.image} alt="" className='mb-3' />
                 <div className="menu-info">
                 <p className="fs-4">{item.title}</p>
                 </div>
                </div>
               )) 
            }
        </div>
    </div>
  )
}

export default FoodItems