import React from "react";
import { useState } from "react/cjs/react.development";

function PlantCard({plant}) {

  const [inCart, setinCart] = useState(plant.isSold)

  function handleSold(){
    setinCart(!inCart)
  }
  Object.assign(plant, {isSold: inCart})
  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {inCart ? (
       <button onClick={handleSold}>Out of Stock</button>
      ) : (
        <button onClick={handleSold} className="primary">In Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
