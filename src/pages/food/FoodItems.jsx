import React, { useState } from 'react';
import menu from '../../data/foods';
import './style.css';
import { Link } from 'react-router-dom';

function FoodItems({ type }) {
    const [selectedCategory, setSelectedCategory] = useState('Breakfast');
    const [selectedFood, setSelectedFood] = useState(null);
    const [selectedItem, setSelectedItem] = useState({});

    const addQuantity = () => {
        setSelectedFood({ ...selectedFood, quantity: (selectedFood.quantity || 0) + 1 });
    };

    const removeQuantity = () => {
        if (selectedFood.quantity > 0) {
            setSelectedFood({ ...selectedFood, quantity: selectedFood.quantity - 1 });
        }
    };

    const handleAddClick = (fooditem) => {
        if (selectedFood && selectedFood.id === fooditem.id) {
            // If the same food item is clicked again and quantity > 0, keep the quantity adjustment buttons visible
            setSelectedFood(selectedFood.quantity > 0 ? { ...selectedFood } : null);
        } else {
            // If a new food item is clicked, set it as selected with quantity 1
            setSelectedFood({ ...fooditem, quantity: 1 });
        }
    };

    return (
        <div className=' container-fluid p-2 p-md-4 bg-white'>
            <div className="food-categories">
                {menu.map((item, index) => (
                    <div className="menu-item text-center" key={index} onClick={() => setSelectedCategory(item.title)}>
                        <img src={item.image} alt="" className='mb-3' />
                        <div className="menu-info">
                            <p className="fs-4">{item.title}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="filter p-3 d-flex gap-3 py-4 overflow-auto flex-nowrap position-sticky top-0 bg-white">
                <button className="btn btn-outline-secondary px-4 rounded-3"><i className="bi bi-funnel"></i> Filter</button>
                <button className="btn btn-outline-secondary px-4 rounded-3"><i className="bi bi-star"></i> Rating 4.0+</button>
                <button className="btn btn-outline-secondary px-4 rounded-3"><i className="bi bi-check-circle"></i> Pure veg</button>
                <button className="btn btn-outline-secondary px-4 rounded-3"><i className="bi bi-bar-chart-steps"></i> Cuisines</button>
            </div>

            <div className="allfoods p-2">
                <h1 className="fs-1 fw-bold mt-3">{selectedCategory}</h1>
                <hr />
                <div className="row">
                    {menu.map((item, index) => (
                        item.title === selectedCategory && item.foods.map((fooditem, foodIndex) => (
                            fooditem.veg === type ? (
                                <div className="col-12 col-md-3 mb-4" key={fooditem.id}>
                                    <div className="food-card d-flex flex-column justify-content-between h-100 p-3">
                                        <div className="food-card-top" >
                                            <img src={fooditem.image} alt="" className='w-100 mb-3' data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample" />
                                            {(selectedFood && selectedFood.id === fooditem.id && selectedFood.quantity > 0) ? (
                                                <div className="add active d-flex align-items-center">
                                                    <button onClick={removeQuantity} className='fs-4'>-</button>
                                                    <span className='fs-4'>{selectedFood.quantity}</span>
                                                    <button onClick={addQuantity} className='fs-4'>+</button>
                                                </div>
                                            ) : (
                                              <div className="add d-flex align-item-center justify-content-center">
                                                  <span className="fs-4" onClick={() => handleAddClick(fooditem)}>Add</span>
                                              </div>
                                            )}
                                            <div className="type">
                                                <div className={`type-circle ${fooditem.veg === 'veg' ? 'bg-success' : 'bg-danger'}`}></div>
                                            </div>
                                        </div>
                                        <span className="fs-5 d-block fw-bold text-dark">{fooditem.title}</span>
                                        <div className="d-flex gap-3 mt-2 align-items-center">
                                            <small className="fs-6 text-secondary caption">{fooditem.caption}</small>
                                            <span className="fs-5 price fw-bold btn btn-outline-success p-1 btn-sm">&#8377; {fooditem.price}/-</span>
                                        </div>
                                    </div>
                                </div>
                            ) : (null)
                        ))
                    ))}
                </div>
            </div>

            <div class="offcanvas offcanvas-bottom" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Details</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    
  </div>
</div>
        </div>
    );
}

export default FoodItems;
