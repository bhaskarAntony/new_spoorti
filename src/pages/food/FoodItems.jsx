import React, { useState } from 'react'
import menu from '../../data/foods'
import './style.css'

function FoodItems({type}) {
    const [selectedCategory, setSelectedCategory] = useState(null);
  return (
    <div className=' container-fluid p-2 p-md-4'>
        <div className="food-categories">
            {
               menu.map((item, index)=>(
                <div className="menu-item text-center" onClick={()=>setSelectedCategory(item.title)}>
                    <img src={item.image} alt="" className='mb-3' />
                 <div className="menu-info">
                 <p className="fs-4">{item.title}</p>
                 </div>
                </div>
               )) 
            }
        </div>
        <div className="allfoods p-2">
            <h1 className="fs-1 fw-bold mt-3">{selectedCategory}</h1>
            <hr />
          <div className="row">
          {
                menu.map((item, index)=>(
                    
                        item.title == selectedCategory &&(
                         item.foods.map((fooditem, foodIndex)=>(
                            <div className="col-12 col-md-3">
                                <div className="food-card">
                                <img src={fooditem.image} alt="" className='w-100'/>
                                <span className="fs-5 d-block">{fooditem.title}</span>
                              <div className="d-flex gap-3 mt-2">
                              <small className="fs-6 text-secondary caption">{fooditem.caption}</small>
                              <span className="fs-5 price fw-bold"> &#8377; {fooditem.price}/-</span>
                              </div>
                            </div>
                            </div>
                         ))
                        )
                    
                ))
            }
          </div>
        </div>
    </div>
  )
}

export default FoodItems