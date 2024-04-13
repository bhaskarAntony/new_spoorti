import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

function FoodCart() {
    const location = useLocation();
    console.log(location); // Log location state to console
    const [items, setItems] = useState(location.state.cartItems)

    return (
        <div>
            {/* Render selectedItems if it's not undefined */}
            {items && items.length > 0 ? (
                <div className='cart-container'>
                    <h1>Selected Items:</h1>
                  <div className="row">
                    <div className="col-12 col-md-7">
                        <div className="cart-left">
                            <div className="cart-card">
                                {
                                    items.map((foodItem, foodIndex)=>(
                                        <ul className="cart-foods">
                                            <li className="cart-item">
                                                <div>
                                                    <span className="fs-5">{foodItem.title}</span>
                                                </div>
                                            </li>
                                        </ul>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-5">
                        <div className="cart-right">
                            
                        </div>
                    </div>
                  </div>
                </div>
            ) : (
                <p>No items selected</p>
            )}
        </div>
    );
}

export default FoodCart;
