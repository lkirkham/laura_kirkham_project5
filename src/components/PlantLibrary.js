// Plant Parenthood
import React, { Component } from 'react';


const PlantList = (props) => {
  console.log(props);

  return (
    <section className="plantList">
    <h2>My Plants</h2>
    {props.listOfPlants.map( (plant) => {
      return (
        <div className="plant" key={plant.key}>
        <h3>{plant.plantName}</h3>
        <p>{plant.plantSpecies}</p>
        <p>{plant.plantType}</p>
        <p>Watering Frequency: {plant.plantWaterFreq}</p>
        <p>{plant.plantCare}</p>

        <button onClick={() =>props.killPlant(plant.key)} id={plant.key}>RIP Plant</button>
        </div>
      )
    })}
    </section>
  )
}

export default PlantList;