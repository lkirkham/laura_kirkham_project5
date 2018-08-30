//Plant Parenthood
import React, { Component } from 'react';

class Form extends Component {
//creating the original state / template
constructor() {
  super();
  this.state = {
    plantName: '',
    plantSpecies: '',
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


handleSubmit = (e) => {
  //prevent the page from refreshing
  e.preventDefault();

  this.props.addPlantToDatabase(this.state.plantName, this.state.plantSpecies, this.state.plantType, this.state.plantWaterFreq, this.state.plantWaterQuant, this.state.plantSunshine, this.state.plantCare);

  // resetting the form values to be empty strings
  this.setState({
    plantName: '',
    plantSpecies: '',
    plantType: '',
    plantWaterFreq: '',
    plantWaterQuant: '',
    plantSunshine: '',
    plantCare: '',
  });
}



  //display form on the page
  render(){
    return(
      <div className="formWrapper">
      <form onSubmit={this.handleSubmit}>

      <label htmlFor="plantName">Plant Name</label>
      <input onChange={this.handleChange} id="plantName" type="text" placeholder="Ie. Diane" value={this.state.plantName} />
      
      <label htmlFor="plantSpecies">Species</label>
      <input onChange={this.handleChange} id="plantSpecies" type="text" placeholder="Ie. Monstera Deliciosa" value={this.state.plantSpecies} />
      
      <p>Plant Selfie</p>
      <div id="filesubmit">
       <input type="file" class="file-select" accept="image/*"/>
      </div>
      
       <p>Plant Type</p>
      <fieldset id="plantTypeRadio">
      <input onChange={this.handleRadioChange} name="plantType" id="plantTypeTropical" type="radio"  value="Tropical"/>
      <label htmlFor="plantTypeTropical">Tropical</label>
      <input onChange={this.handleRadioChange} name="plantType" id="plantTypeCacti" type="radio"  value="Cacti"/>
      <label htmlFor="plantTypeCacti">Cacti</label>
      <input onChange={this.handleRadioChange} name="plantType" id="plantTypeSucculent" type="radio" value="Succulent" />
      <label htmlFor="plantTypeSucculent">Succulent</label>
      <input onChange={this.handleRadioChange} name="plantType" id="plantTypeTree" type="radio" value="Tree"/>
      <label htmlFor="plantTypeTree">Tree</label>
      <input onChange={this.handleRadioChange} name="plantType" id="plantTypeHerb" type="radio" value="Herb"/>
      <label htmlFor="plantTypeHerb">Herb</label>
      </fieldset>

       <p>Watering Frequency</p>
      <fieldset id="plantWaterFreqRadio">
      <input onChange={this.handleRadioChange} name="plantWaterFreq" id="plantWaterFreqDaily" type="radio"  value="Daily"/>
      <label htmlFor="plantWaterFreqDaily">Daily</label>
      <input onChange={this.handleRadioChange} name="plantWaterFreq" id="plantWaterFreqEveryOtherDay" type="radio"  value="Every other day"/>
      <label htmlFor="plantWaterFreqEveryOtherDay">Every other day</label>
      <input onChange={this.handleRadioChange} name="plantWaterFreq" id="plantWaterFreqTwiceWeekly" type="radio" value="Twice weekly" />
      <label htmlFor="plantWaterFreqTwiceWeekly">Twice weekly</label>
      <input onChange={this.handleRadioChange} name="plantWaterFreq" id="plantWaterFreqWeekly" type="radio" value="Weekly"/>
      <label htmlFor="plantWaterFreqWeekly">Weekly</label>
      <input onChange={this.handleRadioChange} name="plantWaterFreq" id="plantWaterFreqEveryOtherWeek" type="radio" value="Every other week"/>
      <label htmlFor="plantWaterFreqEveryOtherWeek">Every other week</label>
      <input onChange={this.handleRadioChange} name="plantWaterFreq" id="plantWaterFreqEveryThreeWeeks" type="radio" value="Every three weeks"/>
      <label htmlFor="plantWaterFreqEveryThreeWeeks">Every three weeks</label>
      <input onChange={this.handleRadioChange} name="plantWaterFreq" id="plantWaterFreqMonthly" type="radio" value="Monthly"/>
      <label htmlFor="plantWaterFreqMonthly">Monthly</label>
      </fieldset>

      <label htmlFor="plantSpecies">Water Quantity</label>
      <input onChange={this.handleChange} id="plantWaterQuant" type="text" placeholder="Ie. 'Full Soak' or '1oz'" value={this.state.plantWaterQuant} />
      
       <p>Sun Exposure</p>
      <fieldset id="plantWaterAmountRadio">
      <input onChange={this.handleRadioChange} name="plantSunshine" id="plantSunshineBrightLight" type="radio"  value="Bright light"/>
      < label htmlFor = "plantSunshineBrightLight" > Bright light </label>
      <input onChange={this.handleRadioChange} name="plantSunshine" id="plantSunshineIndirectLight" type="radio"  value="Indirect light"/>
      < label htmlFor = "plantSunshineIndirectLight" > Indirect light </label>
      <input onChange={this.handleRadioChange} name="plantSunshine" id="plantSunshineDappledLight" type="radio" value="Dappled light" />
      < label htmlFor = "plantSunshineDappledLight" > Dappled light </label>
      <input onChange={this.handleRadioChange} name="plantSunshine" id="plantSunshinePartialLight" type="radio"  value="Partial light"/>
      < label htmlFor = "plantSunshinePartialLight" > Partial light </label>
      <input onChange={this.handleRadioChange} name="plantSunshine" id="plantSunshineLowLight" type="radio" value="Low light"/>
      < label htmlFor = "plantSunshineLowLight" > Low light </label>
      </fieldset>



      <label htmlFor="plantCare">Care Notes</label>
      {/* <input onChange={this.handleChange} id="plantCare" type="text" placeholder="Enter up to 150 characters." value={this.state.plantCare} /> */}
      <textarea onChange={this.handleChange} id="plantCare" type="text" placeholder="Enter up to 200 characters." value={this.state.plantCare} maxlength="150" rows="4" cols="50">
      </textarea>


      <button type="submit" value="Add Plant">Add plant</button>
      </form>
      </div>
    )

  }

}

export default Form;