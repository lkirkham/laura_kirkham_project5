//Plant Parenthood
import React, { Component } from 'react';



// const PlantList = (props) => {
//   console.log(props);
class PlantList extends Component {



render(){
  return (
    <section className="plantList">
    <h2>My Plants</h2>
    {this.props.listOfPlants.map( (plant) => {
      return (


        <div id={plant.key} className="plant" key={plant.key}> {/*opens plant*/}
{ console.log(plant.key) }
        <div className="cardFront"> {/*opens cardFrontk*/}
          <div className="leftSide">
            <figure className="plantSelfie">
            <img src={plant.plantImage} alt={plant.plantName}/>
            </figure>
          </div>

        <div className = "rightSide" >
          <h3>{plant.plantName}</h3>
          <p>{plant.plantSpecies}</p>
          <p>{plant.plantType}</p>
          {/* original flip button styling commented out for reference */}
          {/* <button class="clickable" onClick={() =>this.props.flip()}> <i class="fas fa-chevron-circle-right"></i></button>  */}
          <div className="clickable" onClick={() =>this.props.flip(plant.key)}>
          <i className="fas fa-chevron-circle-right"></i>
          </div>


        </div> {/* closes rightSide */}
        </div> {/*closes cardFront*/}

        <div className="cardBack"> {/*opens cardBack*/}
        <div className="plantStats">
          <p>Watering Frequency: {plant.plantWaterFreq}</p>
          <p>Water Amount: {plant.plantWaterQuant}</p>
          <p>Sun exposure: {plant.plantSunshine}</p>
          <p>Additional plant care: {plant.plantCare}</p>
          {/* original flip button styling commented out for reference */}
          {/* <button class="clickable" onClick={() =>this.props.flip()}> <i class="fas fa-chevron-circle-right"></i></button>  */}
          <div className="clickable" onClick={() =>this.props.flip(plant.key)}>
          <i className="fas fa-chevron-circle-left"></i>
          </div>
          <button onClick={() =>this.props.killPlant(plant.key)} id={plant.key}>RIP Plant</button>
          </div>
          </div>{/*closes cardBack*/}
    
          </div> /*closes plant*/
      )
    })}
    </section>
  )
}
}

export default PlantList;