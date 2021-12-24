/** @format */

import React from "react";

function Supplies() {
  const supplierArr = [
    { name: "Tandy Leather", website: "tandyleather.com" },
    { name: "Walmart", website: "walmart.com" },
    { name: "JoAnne Fabrics", website: "joannefabric.com" },
    { name: "Paracord Galaxy", website: "paracordgalaxy.com" },
    { name: "Fake Paracord Co", website: "fakeparacord.com" },
    { name: "Another Faker Co", website: "anotherfaker.com" },
  ];

  const companies = supplierArr.map((place, item) => {
    return (
      <div className='suppContentDiv' key={item}>
        <p>Name: {place.name} </p>
        <a href='#faker' target='_blank'>
          Website: {place.website}
        </a>
      </div>
    );
  });

  console.log(companies);

  return (
    <div className='suppDiv' id='supplies'>
      <h1 className='suppTitle'>Where do you get your supplies?</h1>
      <p className='suppText'>
        Below you can find the places you order from, for a reference.
      </p>

      <div className='suppWrapperDiv'>
        <div className='suppContentDiv'>{companies}</div>
      </div>
    </div>
  );
}

export default Supplies;
