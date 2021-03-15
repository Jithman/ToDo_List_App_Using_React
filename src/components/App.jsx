import React, { useState } from "react";
import List from "./List"


function App(){
	
	const [inputList, setInputList] = useState("");
	const [items , setItems] = useState([]);

	const handleChange = (event) => {
		setInputList(event.target.value)
	}

	const addItem = () =>{
		setItems(preVal => {
			return [...preVal, inputList]
		});
		setInputList("")
	}


	const deleteItems = (id) => {
		setItems(preVal => {
			return preVal.filter((item,index) =>{
				return	id !== index;
			});
		});
	}


	return (
		<div className="back-container">
		<div className="front-container">

		<br />
		<h1>ToDo List</h1>
		<br />
		<input 
		type="text" 
		placeholder="Add Item" 
		onChange={handleChange}
		value={inputList}
		/>

		<button onClick={addItem} > + </button>

		
		<ol>

		{items.map((itemVal,index) => {
			return <List key={index} id={index} value = {itemVal} onSelect={deleteItems}/>
		})}
		
		</ol>

		</div>
		</div>
	)
}


export default App;