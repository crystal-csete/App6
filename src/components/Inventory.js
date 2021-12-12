/** @format */

import React from "react";
import braceletSmall from "../images/4smallbracelets.jpg";
import braceletMed from "../images/2medbracelets.jpg";
import rings from "../images/2strandrings.jpg";
import braceletAnchor from "../images/1anchorbracelet.jpg";
import woven from "../images/wovenbracelets.jpg";
import xlbracelets from "../images/xlbracelets.jpg";
import monkey from "../images/monkeyfist.jpg";
import keychain from "../images/keychain.jpg";
import chunky from "../images/chunkybracelets.jpg";

function Inventory() {
  return (
    <div className='invenDiv'>
      <h1 className='invenTitle'>Your Inventory</h1>
      <div className='invenWrapperDiv'>
        <div className='invenContentDiv'>
          <h2 className='invenContentTitle'>Small Paracord Bracelets</h2>
          <div className='invenBtnDiv'>
            <input
              className='invenContentInput'
              type='text'
              placeholder='Add new Qty...'
            />
            <button className='invenBtn'>Add</button>
          </div>

          <p className='invenContentQty'>On Hand Qty: X</p>
          <img src={braceletSmall} alt='4 paracord bracelets small size' />
        </div>
        <div className='invenContentDiv'>
          <h2 className='invenContentTitle'>Medium Paracord Bracelets</h2>
          <div className='invenBtnDiv'>
            <input
              className='invenContentInput'
              type='text'
              placeholder='Add new Qty...'
            />
            <button className='invenBtn'>Add</button>
          </div>
          <p className='invenContentQty'>On Hand Qty: X</p>
          <img src={braceletMed} alt='2 paracord bracelets medium size' />
        </div>
        <div className='invenContentDiv'>
          <h2 className='invenContentTitle'>Anchor Paracord Bracelets</h2>
          <div className='invenBtnDiv'>
            <input
              className='invenContentInput'
              type='text'
              placeholder='Add new Qty...'
            />
            <button className='invenBtn'>Add</button>
          </div>
          <p className='invenContentQty'>On Hand Qty: X</p>
          <img
            src={braceletAnchor}
            alt='paracord bracelet with anchor closure'
          />
        </div>
        <div className='invenContentDiv'>
          <h2 className='invenContentTitle'>2 Strand Rings</h2>
          <div className='invenBtnDiv'>
            <input
              className='invenContentInput'
              type='text'
              placeholder='Add new Qty...'
            />
            <button className='invenBtn'>Add</button>
          </div>
          <p className='invenContentQty'>On Hand Qty: X</p>
          <img src={rings} alt='paracord rings' />
        </div>
        <div className='invenContentDiv'>
          <h2 className='invenContentTitle'>Woven Bracelets</h2>
          <div className='invenBtnDiv'>
            <input
              className='invenContentInput'
              type='text'
              placeholder='Add new Qty...'
            />
            <button className='invenBtn'>Add</button>
          </div>
          <p className='invenContentQty'>On Hand Qty: X</p>
          <img src={woven} alt='paracord bracelet woven' />
        </div>
        <div className='invenContentDiv'>
          <h2 className='invenContentTitle'>Chunky Bracelets</h2>
          <div className='invenBtnDiv'>
            <input
              className='invenContentInput'
              type='text'
              placeholder='Add new Qty...'
            />
            <button className='invenBtn'>Add</button>
          </div>
          <p className='invenContentQty'>On Hand Qty: X</p>
          <img src={chunky} alt='paracord bracelet chunky' />
        </div>
        <div className='invenContentDiv'>
          <h2 className='invenContentTitle'>XL Bracelets</h2>
          <div className='invenBtnDiv'>
            <input
              className='invenContentInput'
              type='text'
              placeholder='Add new Qty...'
            />
            <button className='invenBtn'>Add</button>
          </div>
          <p className='invenContentQty'>On Hand Qty: X</p>
          <img src={xlbracelets} alt='paracord bracelet XL size' />
        </div>
        <div className='invenContentDiv'>
          <h2 className='invenContentTitle'>Keychains</h2>
          <div className='invenBtnDiv'>
            <input
              className='invenContentInput'
              type='text'
              placeholder='Add new Qty...'
            />
            <button className='invenBtn'>Add</button>
          </div>
          <p className='invenContentQty'>On Hand Qty: X</p>
          <img src={keychain} alt='paracord keychains' />
        </div>
        <div className='invenContentDiv'>
          <h2 className='invenContentTitle'>Monkey Fists</h2>
          <div className='invenBtnDiv'>
            <input
              className='invenContentInput'
              type='text'
              placeholder='Add new Qty...'
            />
            <button className='invenBtn'>Add</button>
          </div>
          <p className='invenContentQty'>On Hand Qty: X</p>
          <img src={monkey} alt='paracord monkeyfist keychains' />
        </div>
      </div>
    </div>
  );
}

export default Inventory;
