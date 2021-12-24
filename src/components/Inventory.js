/** @format */

import React from "react";
import { inventoryItemsArr } from "../data/data";

function Inventory() {
  const products = inventoryItemsArr.map((procuct, item) => {
    return (
      <div className='invenContentDiv' key={item}>
        <div className='invenBtnDiv'>
          {/* i want this input to dynamically change the shown qty */}
          <input
            type='number'
            placeholder='Update QTY...'
            className='invenContentInput'
          />
          <button type='submit' className='invenBtn'>
            Update QTY
          </button>
        </div>
        <strong>Name:</strong> {procuct.name}
        <strong>Size:</strong> {procuct.size}
        <strong>Quantity:</strong> {procuct.quantity}
        <div className='invenImgDiv'>{procuct.image}</div>
      </div>
    );
  });

  console.log(products);

  return (
    <div className='invenDiv' id='inventory'>
      <h1 className='invenTitle'>Your Inventory</h1>
      <div className='invenWrapperDiv'>
        <div className='invenContentDiv'>
          <p className='invenContentTitle'>{products[0]}</p>
        </div>

        <div className='invenContentDiv'>
          <p className='invenContentTitle'>{products[1]}</p>
        </div>

        <div className='invenContentDiv'>
          <p className='invenContentTitle'>{products[2]}</p>
        </div>

        <div className='invenContentDiv'>
          <p className='invenContentTitle'>{products[3]}</p>
        </div>

        <div className='invenContentDiv'>
          <p className='invenContentTitle'>{products[4]}</p>
        </div>

        <div className='invenContentDiv'>
          <p className='invenContentTitle'>{products[5]}</p>
        </div>

        <div className='invenContentDiv'>
          <p className='invenContentTitle'>{products[6]}</p>
        </div>

        <div className='invenContentDiv'>
          <p className='invenContentTitle'>{products[7]}</p>
        </div>

        <div className='invenContentDiv'>
          <p className='invenContentTitle'>{products[8]}</p>
        </div>
      </div>
    </div>
  );
}

export default Inventory;
