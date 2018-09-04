//Plant Parenthood
import React, { Component } from 'react';
import Modal from './modal.js'
import smoothscroll from 'smoothscroll-polyfill';

//import our CONFIGURED firebase module
import firebase from './firebase';

// kick off the polyfill!
smoothscroll.polyfill();

class Form extends Component {
//creating the original state / template
constructor() {
  super();
  this.state = {
    plantName: '',
    plantSpecies: '',
    plantImage: '',
    plantType: '',
    plantWaterFreq: '',
    plantWaterQuant: '',
    plantSunshine: '',
    plantCare: '',
  }
}

handleChange = (e) => {
  this.setState({
    [e.target.id]: e.target.value
  });
}

handleRadioChange = (e)=> {
  this.setState({
    [e.target.name]: e.target.value
  })
}

handleImageChange = (e) => {
e.preventDefault();
let file = e.target.files[0];

this.setState({
  plantImage: file,
})
console.log(file);
}


handleSubmit = (e) => {
  //prevent the page from refreshing
  e.preventDefault();

  //image upload and url download

  //define where the photo is going
  const storageRef = firebase.storage().ref()   ; 
  console.log(this.state.plantImage);
  const plantPhoto = storageRef.child(this.state.plantImage.name);
  const self = this;


    //upload plant photo to firebase
    plantPhoto.put(this.state.plantImage).then(function (snapshot) {
     // console.log(snapshot);

      //get download url
      plantPhoto.getDownloadURL().then((url) => {
      let plantUrl = url;

    console.log(plantUrl, this)
    self.setState({
      plantImage: plantUrl,
    }, () => {
      self.props.addPlantToDatabase(self.state.plantName, self.state.plantSpecies, self.state.plantImage, self.state.plantType, self.state.plantWaterFreq, self.state.plantWaterQuant, self.state.plantSunshine, self.state.plantCare);
    }) //closes set state
    })//closes getDownloadURL
        })//closes .then (function (snapshot))
        


    //close modal on submit after information has been passed.
    this.props.closeModal(e)

}



  //display form on the page
  render(){
    return(
      <Modal className='modalStyle' isOpen={this.props.isModalOpen} onClose={() => this.closeModal()}>
      {/* <div className="modalHeader">
      <h3>Add a Plant</h3>
      </div> */}
      <div className="formWrapper">

        <form className="modalContent" onSubmit={this.handleSubmit}>
            <div className="twoPerLine">
            <div className="plantName quest">
              <label htmlFor="plantName">Plant Name</label>
              <input onChange={this.handleChange} id="plantName" type="text" placeholder="Ie. Diane" value={this.state.plantName} />
            </div>

            <div className="plantSpecies quest">
              <label htmlFor="plantSpecies">Species</label>
              <input onChange={this.handleChange} id="plantSpecies" type="text" placeholder="Ie. Monstera Deliciosa" value={this.state.plantSpecies} />
            </div>
            </div>
            < div className = "twoPerLine" >
            <div className="plantPic quest">
              <p>Plant Image</p>
              <input name="plantImage" /*value={this.state.plantUrl}*/ onChange={this.handleImageChange} id="plantImage" type="file" accept="image/*"/>
            </div>

            <div className="plantWaterQuant quest">
              <label htmlFor="plantWaterQuant">Water Quantity</label>
              <input onChange={this.handleChange} id="plantWaterQuant" type="text" placeholder="Ie. 2 ounces" value={this.state.plantWaterQuant} />
            </div>
            </div>
            <div className = "plantWaterFreq quest" >
              <p>Watering Frequency</p>
              <fieldset className="plantWaterFreqRadio">
                <div>
                  <input onChange={this.handleRadioChange} name="plantWaterFreq" id="plantWaterFreqDaily" type="radio"  value="daily"/>
                  <label htmlFor="plantWaterFreqDaily">Daily</label>
                </div>
                <div>
                  <input onChange={this.handleRadioChange} name="plantWaterFreq" id="plantWaterFreqEveryOtherDay" type="radio"  value="every 2 days"/>
                  <label htmlFor="plantWaterFreqEveryOtherDay">Every 2 days</label>
                </div>
                <div>
                  <input onChange={this.handleRadioChange} name="plantWaterFreq" id="plantWaterFreqTwiceWeekly" type="radio" value="2x weekly" />
                  <label htmlFor="plantWaterFreqTwiceWeekly">2x weekly</label>
                </div>
                <div>
                  <input onChange={this.handleRadioChange} name="plantWaterFreq" id="plantWaterFreqThriceWeekly" type="radio" value="3x weekly" />
                  <label htmlFor="plantWaterFreqThriceWeekly">3x weekly</label>
                </div>
                <div>               
                  <input onChange={this.handleRadioChange} name="plantWaterFreq" id="plantWaterFreqWeekly" type="radio" value="weekly"/>
                  <label htmlFor="plantWaterFreqWeekly">Weekly</label>
                </div>
                <div>
                  <input onChange={this.handleRadioChange} name="plantWaterFreq" id="plantWaterFreqEveryOtherWeek" type="radio" value="every 2 weeks"/>
                  <label htmlFor="plantWaterFreqEveryOtherWeek">Every 2 weeks</label>
                </div>
                <div>
                  <input onChange={this.handleRadioChange} name="plantWaterFreq" id="plantWaterFreqEveryThreeWeeks" type="radio" value="every 3 weeks"/>
                  <label htmlFor="plantWaterFreqEveryThreeWeeks">Every 3 weeks</label>
                </div>
                <div>
                  <input onChange={this.handleRadioChange} name="plantWaterFreq" id="plantWaterFreqMonthly" type="radio" value="monthly"/>
                  <label htmlFor="plantWaterFreqMonthly">Monthly</label>
                </div>
              </fieldset>
            </div>

            <div className="plantTypes quest">
              <p>Plant Type</p>
              <fieldset className="plantTypeRadio">
                <div>
                  <input onChange={this.handleRadioChange} name="plantType" id="plantTypeTropical" type="radio"  value="Tropical"/>
                  <label htmlFor="plantTypeTropical">&nbsp;Tropical</label>
                </div>
                <div>
                  <input onChange={this.handleRadioChange} name="plantType" id="plantTypeCacti" type="radio"  value="Cacti"/>
                  <label htmlFor="plantTypeCacti">&nbsp;Cacti</label>
                </div>
                <div>
                  <input onChange={this.handleRadioChange} name="plantType" id="plantTypeTree" type="radio" value="Tree"/>
                  <label htmlFor="plantTypeTree">&nbsp;Tree</label>
                </div>
                <div>
                  <input onChange={this.handleRadioChange} name="plantType" id="plantTypeSucculent" type="radio" value="Succulent" />
                  <label htmlFor="plantTypeSucculent">&nbsp;Succulent</label>
                </div>
                <div>
                  <input onChange={this.handleRadioChange} name="plantType" id="plantTypeHerb" type="radio" value="Herb"/>
                  <label htmlFor="plantTypeHerb">&nbsp;Herb</label>
                </div>
                <div>
                  <input onChange={this.handleRadioChange} name="plantType" id="plantTypeAirPlant" type="radio" value="Air Plant"/>
                  <label htmlFor="plantTypeAirPlant">&nbsp;Air Plant</label>
                </div>
              </fieldset>
            </div>

            <div className="plantSunExposure quest">
              <p>Sun Exposure</p>
              <fieldset className="plantSunshineAmountRadio">
                <div>
                  <input onChange={this.handleRadioChange} name="plantSunshine" id="plantSunshineDirectLight" type="radio"  value="direct light"/>
                  <label htmlFor = "plantSunshineDirectLight" > Direct light </label>
                </div>
                <div>
                  <input onChange={this.handleRadioChange} name="plantSunshine" id="plantSunshineIndirectLight" type="radio"  value="indirect light"/>
                  <label htmlFor = "plantSunshineIndirectLight" > Indirect light </label>
                </div>
                <div>
                  <input onChange={this.handleRadioChange} name="plantSunshine" id="plantSunshinePartialLight" type="radio"  value="partial light"/>
                  <label htmlFor = "plantSunshinePartialLight" > Partial light </label>
                </div>
                <div>
                  <input onChange={this.handleRadioChange} name="plantSunshine" id="plantSunshineFullShade" type="radio" value="full shade"/>
                  <label htmlFor = "plantSunshineFullShade" > Full shade </label>
                </div>
              </fieldset>
            </div>
        
            <div className="plantCare quest">
              <label htmlFor="plantCare">Care Notes</label>
              {/* <input onChange={this.handleChange} id="plantCare" type="text" placeholder="Enter up to 150 characters." value={this.state.plantCare} /> */}
              <textarea onChange={this.handleChange} id="plantCare" type="text" placeholder="Enter up to 120 characters." value={this.state.plantCare} maxLength="120" rows="4" cols="40">
              </textarea>
            </div>
            <div className="btnContainer">
          {/* <button className="btn btnClose" onClick={(e) => {
								e.preventDefault();
								this.props.closeModal()
							}
						}>X
          </button> */}
          </div>
          <button className="btn btnSubmit"id="addPlant" type="submit" value="Add Plant">Add Plant</button>
          <button className="btnClose" onClick={(e) => {
					  e.preventDefault();
					  this.props.closeModal()
							}
						}>X
          </button>
      </form>
    </div>
  </Modal>
    )
  }

}

export default Form;