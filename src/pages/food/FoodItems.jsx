import React, { useState } from 'react'
import menu from '../../data/foods'
import './style.css'

function FoodItems({type}) {
    const [selectedCategory, setSelectedCategory] = useState('Breakfast');
    // if(type == ""|| type ==null|| type == undefined || type == " "){
    //   type = "veg";
    // }
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

        <div className="filter p-3 d-flex gap-3 py-4 overflow-auto flex-nowrap">
          <button className="btn btn-outline-secondary px-4 rounded-3"><i class="bi bi-funnel"></i> Filter</button>
          <button className="btn btn-outline-secondary px-4 rounded-3"><i class="bi bi-star"></i> Rating 4.0+</button>
          <button className="btn btn-outline-secondary px-4 rounded-3"><i class="bi bi-check-circle"></i> Pure veg</button>
          <button className="btn btn-outline-secondary px-4 rounded-3"><i class="bi bi-bar-chart-steps"></i> Cuisines</button>
        </div>
        <div className="allfoods p-2">
            <h1 className="fs-1 fw-bold mt-3">{selectedCategory}</h1>
            <hr />
          <div className="row">
          {
                menu.map((item, index)=>(
                    
                        item.title == selectedCategory &&(
                         item.foods.map((fooditem, foodIndex)=>(
                          fooditem.veg == type ?(
                            <div className="col-12 col-md-3 mb-4">
                            <div className="food-card d-flex flex-column justify-content-between h-100 p-3">
                          <div className="food-card-top">
                          <img src={fooditem.image} alt="" className='w-100 mb-3'/>
                          <div className="type">
                            <div className={`type-circle ${fooditem.veg=='veg' ? 'bg-success':'bg-danger'}`}></div>
                          </div>
                          </div>
                            <span className="fs-5 d-block fw-bold">{fooditem.title}</span>
                          <div className="d-flex gap-3 mt-2 align-items-center">
                          <small className="fs-6 text-secondary caption">{fooditem.caption}</small>
                          <span className="fs-5 price fw-bold btn btn-outline-success p-1 btn-sm"> &#8377; {fooditem.price}/-</span>
                          </div>
                        </div>
                        </div>
                          ):(null)
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