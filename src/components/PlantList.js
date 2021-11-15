import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants}) {
  // const newPlantlists = plants.map(plant => Object.assign({...plant}, {isSold : false}))
  return (
   
    <ul className="cards">{/* render PlantCards components in here */}
    {/* {newPlantlists.map(plant => <PlantCard key={plant.id} plant={plant} onSold={handleSold}/>)} */}
    {plants.map(plant => <PlantCard key={plant.id} plant={plant}/>)}
    </ul>
  
  );
}

export default PlantList;
