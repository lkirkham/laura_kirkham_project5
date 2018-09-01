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

          <div className="leftSide">
            <figure className="plantSelfie">
            <img src={plant.plantImage} alt={plant.plantName}/>
            </figure>
          </div>

        <div className = "rightSide" >
          <h3>{plant.plantName}</h3>
          <p>{plant.plantSpecies}</p>
          <p>{plant.plantType}</p>
        </div>

        <div className="plantStats">
          <p>Watering Frequency: {plant.plantWaterFreq}</p>
          <p>Water Amount: {plant.plantWaterQuant}</p>
          <p>Sun exposure: {plant.plantSunshine}</p>
          <p>Additional plant care: {plant.plantCare}</p>
          <button onClick={() =>props.killPlant(plant.key)} id={plant.key}>RIP Plant</button>
          </div>
          
          </div>
      )
    })}
    </section>
  )
}

export default PlantList;