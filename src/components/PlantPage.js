import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plants, setPlanet] = useState([])
  const [searchText, setSearchText] = useState('')
  const [isShowSold, setIsshowSold] = useState(false)

  useEffect(() => {
    fetch('http://localhost:6001/plants')
    .then(res => res.json())
    .then(data => {
      const newPlantlist = data.map(d => Object.assign({...d}, {isSold:false}))
      setPlanet(newPlantlist)
    })
    .catch(error => console.error('There is an error fetching plants', error))
  },[])

  // function handleSold(plant) {
  //   const newPlent = {...plant, isSold: true}
  //   // console.log(newPlent)
  //   setSoldlist([...soldlist, plant ])
  // }

  const filtered = (
    isShowSold ? plants.filter(plant => plant.isSold) :
    plants.filter((plant) => plant.name.toLowerCase().includes(searchText.toLowerCase()))
  )

  function handleAddNewPlant(plant) {

    setPlanet([...plants], plant)

    console.log(plants)
  }
  return (
    <main>
      <NewPlantForm onAdd={handleAddNewPlant}/>
      <Search searchText={searchText} onSearch={setSearchText}/>
      <button onClick={() => setIsshowSold(!isShowSold)}>Show Sold plants</button>
      <PlantList plants={filtered}/>
    </main>
  );
}

export default PlantPage;
