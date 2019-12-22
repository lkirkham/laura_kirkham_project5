// Plant Parenthood

import React, { Component } from 'react';
import './styles/App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
//import our CONFIGURED firebase module
import firebase from './components/firebase';

// import components
import Form from "./components/Form";
import PlantList from "./components/PlantLibrary";
import Nav from "./components/Nav";
import Welcome from "./components/Welcome";


//authentication with google/firebase
const provider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth();

// APP STARTS
class App extends Component {
  constructor() {
    super();
    this.state = {
      plantList: [],
      isModalOpen: false,
      user: null,
    }
  }

//authentication
  login = () => {
    auth.signInWithPopup(provider)
      .then((result) => {
        const user = result.user;
        this.setState({
          user
        });
      });
  }

  logout = () => {
    auth.signOut()
      .then(() => {
        this.setState({
          user: null
        });
      });
  }

//modal
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

//scroll
  backToTop = (e) => {
  window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }

//card flip
  flip = (key) => {
    document.getElementById(key).classList.toggle("flip");
  };

  componentDidMount() {

    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState(
          { 
            user 
          }, 
          () => {
            //create reference to the firebase database root
            //input user id into reference to create a mini db for that usere.
            this.dbRef = firebase.database().ref(this.state.user.uid);
            this.dbRef.on('value', snapshot => {
              this.sortPlants(snapshot.val());
            });
          }//closes callback
          ); //closes this.setstate
      } //;closes if user
    });//closes on auth state changed
    
  }//closes component did mount

  sortPlants = (plantObject) => {
    console.log(plantObject);


    const plantsArray = Object.entries(plantObject || {})
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
    console.log(name, species, img, type, freq, quant, sun, care);
    // console.log(name, species, type, care);
    this.dbRef.push({
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


  killPlant = plantId => {
    // console.log('delete/kill plant called');
    //delete from firebase
    console.log(plantId);
    //pass the plants id to firebase so it knows which to reference
    const plantDbRef = firebase
    .database()
    .ref(`${this.state.user.uid}/${plantId}`);
    //kill/delete that plant
    plantDbRef.remove();
  }


  //render the application
  render() {
    return (
      <Router>
        <div className="App">
          {/* <Nav openModal={this.openModal} closeModal={this.closeModal} isModalOpen={this.state.isModalOpen} backToTop={this.backToTop}/> */}
          <Nav user={this.state.user} login={this.login} logout={this.logout} openModal={this.openModal} closeModal={this.closeModal} isModalOpen={this.state.isModalOpen} />
          {/* <h1>Plant Parenthood</h1> */}
          {/* <figure className="logoContainer">
            <img src={pplogo} className="AppLogo" alt="logo" />
          </figure> */}
          {/* <Logo /> */}
          <Form addPlantToDatabase={this.addPlantToDatabase} openModal={this.openModal} closeModal={this.closeModal} isModalOpen={this.state.isModalOpen} />
          {this.state.user ? (
          <Route exact path="/"
          render={(props) => (
            <PlantList
            {...props}
            listOfPlants={this.state.plantList}
            flip={this.flip}
            killPlant={this.killPlant}
            />
          )}
          />
          ) :
            <Welcome /> }
          {/* <PlantList listOfPlants={this.state.plantList} flip={this.flip} killPlant={this.killPlant} /> */}
        </div>
      </Router>
    )
  }
}



export default App;
