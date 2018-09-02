// Plant Parenthood

import React, { Component } from 'react';
import './styles/App.css';
// import smoothscroll from 'smoothscroll-polyfill';

//import our CONFIGURED firebase module
import firebase from './components/firebase';

// import components
import Form from "./components/Form"
import PlantList from "./components/PlantLibrary";
import Nav from "./components/Nav";

// kick off the polyfill! - used for back to top / smooth scrolling. 
// smoothscroll.polyfill();

//create reference to the firebase database root
const dbRef = firebase.database().ref();


// APP STARTS

class App extends Component {
  constructor() {
    super();
    this.state = {
      plantList: [],
      isModalOpen: false,
      // isFlipped: false,
    }
  }

  openModal = (e) => {
    console.log(this)
    this.setState({
  	  isModalOpen: true
    });
    
  }
  
  closeModal = (e) => {
  	this.setState({
  	  isModalOpen: false
  	})
  }

  backToTop = (e) => {
  window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }





  componentDidMount() {
    console.log('App componentdidmount fired')
    dbRef.on('value', (snapshot) => {
    // console.log(snapshot);
    this.sortPlants(snapshot.val());
   })
  }

  sortPlants = (plantObject) => {
    console.log(plantObject);
  
    const plantsArray = Object.entries(plantObject)
    .map(
      (item) => {
        return ({
          key: item[0],
          plantName: item[1].plantName,
          plantSpecies: item[1].plantSpecies,
          plantImage: item[1].plantImage,
          plantType: item[1].plantType,
          plantWaterFreq: item[1].plantWaterFreq,
          plantWaterQuant: item[1].plantWaterQuant,
          plantSunshine: item[1].plantSunshine,
          plantCare: item[1].plantCare,
        })
      })


  this.setState({
    plantList: plantsArray
  })


}

  addPlantToDatabase = (name, species, img, type, freq, quant, sun, care) => {
    console.log('images', img)
    // console.log(name, species, type, care);
    dbRef.push({
      plantName: name,
      plantSpecies: species,
      plantImage: img,
      plantType: type,
      plantWaterFreq: freq,
      plantWaterQuant: quant,
      plantSunshine: sun,
      plantCare: care,
    })
  }


  killPlant = (plantId) => {
    // console.log('delete/kill plant called');
    //delete from firebase
    console.log(plantId);
    //pass the plants id to firebase so it knows which to reference
    const plantDbRef = firebase.database().ref(`/${plantId}`);

    //kill/delete that plant
    plantDbRef.remove();
  }

  flip = () => {
    document.getElementById("plantCard").classList.toggle("flip");
  };

  render() {
    return (
      
      <div className = "App" >

      {/* <Nav openModal={this.openModal} closeModal={this.closeModal} isModalOpen={this.state.isModalOpen} backToTop={this.backToTop}/> */}
      <Nav openModal={this.openModal} closeModal={this.closeModal} isModalOpen={this.state.isModalOpen}/>
      <h1>Plant Parenthood</h1>
      <Form addPlantToDatabase={this.addPlantToDatabase} openModal={this.openModal} closeModal={this.closeModal} isModalOpen={this.state.isModalOpen} />
      <PlantList listOfPlants={this.state.plantList} flip={this.flip}  killPlant={this.killPlant}/>
      </div>
    );
  }
}



export default App;
