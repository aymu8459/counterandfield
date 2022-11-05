// import react from 'react';
import {useState} from 'react';


function calculator () {
    
const [inputOne, setInputOne] = useState(0);
const [inputTwo, setInputTwo] = useState(0);
const handleInputOne = (e) => {
    setInputOne(Number(e.target.value));
}
const handleInputTwo = (e) => {
    setInputTwo(Number(e.target.value));
}
    return (
        <div>
            <input value = {inputOne} type="number" onChange = {handleInputOne}/>
            <input value = {inputTwo} type="number" onChange = {handleInputTwo}/>
            <h4>Sum: {inputOne+inputTwo}</h4>
        </div>
    )
}
export default calculator;