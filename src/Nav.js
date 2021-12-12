/** @format */

import React from "react";

const Nav = () => {
  return (
    <div className='navDiv'>
      <a className='active' href='#home'>
        HOME
      </a>
      <a href='#inventory'>INVENTORY</a>
      <a href='#supplies'>SUPPLIES</a>
      <div className='navSearchDiv'>
        <form action='/action_page.php'>
          <input type='text' placeholder='Search' name='search' />
          <button type='submit' className='navBtn'>
            <i className='fas fa-search'></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Nav;
