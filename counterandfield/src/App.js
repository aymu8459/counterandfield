import {useState} from "react";
import MyBasket from './myBasket'
import './App.css';

// This exercise uses useState to dynamically update HTML form elements
function App() {
  const [counter, setCounter] = useState(11)
  const [inputValue, setInputValue] = useState("")
  const [dropDownValue,setDropDownValue] = useState("")
  const [textAreaValue, setTextAreaValue] = useState("")
  const [checkBox, setCheckBox] = useState()
  const [genderSelection, setGenderSelection] =useState();

const incrementCounter = () => {
  setCounter(counter + 1)
}

const handleChange = (event) => {
  if (event.target.name ==="inputValue") {
    setInputValue(event.target.value)
  }
  if (event.target.name==="dropDownValue"){
    setDropDownValue(event.target.value)
  }
  if(event.target.name==="textAreaValue"){
    setTextAreaValue(event.target.value)
  }
  if (event.target.name==="checkbox"){
    setCheckBox(event.target.checked)
  }
  if(event.target.name==="gender"){
    setGenderSelection(event.target.value)
  }
}

// const handleDropDownChange = (event) => {
//   setDropDownValue(event.target.value)
// }


// const handleTextAreaChange= (event) => {
//   setTextAreaValue(event.target.value)
// }
const handleCheckBox = (event) => {
  setCheckBox(event.target.checked)
  console.log(event.target.checked)
}
const handleRadio = (e) => {
  setGenderSelection(e.target.defaultValue);
}
  return (
    <div className="App">
      <h1>hellos</h1>
      <h5>{counter}<button onClick = {incrementCounter}>+</button></h5>
      <input type="text" name = "inputValue" onChange = {handleChange} value = {inputValue}/>
      <h4>input entered: {inputValue}</h4>
      <select name="dropDownValue" onChange = {handleChange} value = {dropDownValue}>
        <option value = "kiwi">kiwi</option>
        <option value = "banana">banana</option>
        <option value = "lemon">lemon</option>
        <option value = "pineapple">pineapple</option>
      </select>
        <h4>fruit selected: {dropDownValue}</h4>
        <textarea name ="textAreaValue" id="" cols="20" rows="5" onChange={handleChange} maxLength = {50}></textarea>
        <h4>Characters left: {50 - textAreaValue.length} </h4>
        <MyBasket input={inputValue} fruit={dropDownValue}/> 
        <div>
        <input type="file"/>
        </div>
        <div>
        <input type="checkbox" id="invitation" onChange={handleCheckBox}/>
        <label htmlFor="invitation" >will participate</label>
        <h4>{checkBox ? "this guest decided to participate":"this guest won't participate"}</h4>
        <div>
          <h4>Please select your gender</h4>
          <input type="radio" id ="male" value = "male" name="gender" onChange={handleRadio}/>
          <label htmlFor="male">Male</label>
          <input type="radio" id ="female" value = "female" name="gender" onChange={handleRadio}/>
          <label htmlFor="female">Female</label>
          <h4>{genderSelection} is selected</h4>
        </div>
        </div>
    </div>
  );
}
 
export default App;
