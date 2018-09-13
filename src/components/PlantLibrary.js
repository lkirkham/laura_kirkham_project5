//Plant Parenthood
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



// const PlantList = (props) => {
//   console.log(props);
class PlantList extends Component {



render(){
  return (
    <section className="plantList">
    <div className = "wrapper" >
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
          <h3 className="plantName">{plant.plantName}</h3>
          <p className="plantSpecies">{plant.plantSpecies}</p>
          <p className="plantType">{plant.plantType}</p>
          {/* original flip button styling commented out for reference */}
          {/* <button class="clickable" onClick={() =>this.props.flip()}> <i class="fas fa-chevron-circle-right"></i></button>  */}
          <div className="clickable flipForward" onClick={() =>this.props.flip(plant.key)}>
          <i className="fas fa-chevron-right"></i>
          </div>


        </div> {/* closes rightSide */}
        </div> {/*closes cardFront*/}

        <div className="cardBack"> {/*opens cardBack*/}
        
        <p className="title"> {plant.plantName} the {plant.plantSpecies}</p>
          
          <div className="plantStats">
          <ul>
          <li><p><i class="fas fa-tint"></i>&nbsp;{plant.plantWaterQuant}, {plant.plantWaterFreq}.</p></li>
          <li><p><i class="fas fa-sun"></i> Keep me in {plant.plantSunshine}.</p></li>
          <li><p>{plant.plantCare}</p></li>
          </ul>
          </div>{/*closes plantStats*/}
          
          
          { /* original killPlant styling commented out for reference */ }
          {/* <button onClick={() =>this.props.killPlant(plant.key)} id={plant.key}><i class="fas fa-skull"></i></button> */}
          <div className="killPlant" onClick={() =>this.props.killPlant(plant.key)} id={plant.key}>
          {/* to add toolTips class above to use the tooltip */}
          {/* <span class="toolTipText">Delete dead plant</span> */}
          <i className="fas fa-skull"></i><p>RIP</p>
          </div> {/*closes killPlant */}

          {/* original flip button styling commented out for reference */}
          {/* <button class="clickable" onClick={() =>this.props.flip()}> <i class="fas fa-chevron-circle-right"></i></button>  */}
          <div className="clickable flipBack" onClick={() =>this.props.flip(plant.key)}>
           <i className="fas fa-chevron-left"></i>
        
          </div> {/*closes flipBack*/}
          </div>{/*closes cardBack*/}
    
          </div> /*closes plant*/
      )
    })}
    </div>
    </section>
  )
}
}

export default PlantList;