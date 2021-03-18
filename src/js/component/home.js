import React, { useState } from "react";
import List from "./list.js";

//create your first component
export const Home = () => {
	const [inputValue, setInputValue] = useState();
	const [itemList, updateItemList] = useState([]);

	const addItems = e => {
		if (e.key === "Enter" && e.target.value !== "") {
			updateItemList([
				...itemList,
				{ item: inputValue, key: Date.now() }
			]);
			setInputValue(" ");
		}
	};

	return (
		<div>
			<h1>todos</h1>
			<div className="card">
				<div className=" input-card">
					<input
						value={inputValue}
						onKeyPress={addItems}
						onChange={e => setInputValue(e.target.value)}
						type="text"
						className="form-control"
						placeholder="What needs to be done?"
						aria-label="Username"
						aria-describedby="addon-wrapping"></input>
				</div>
				<List
					itemList={itemList}
					updateItemList={updateItemList}></List>
				<span id="lista1" className="list-item bg-white p-2 text-muted">
					<span className="numero">{itemList.length}</span> items left
				</span>
			</div>
		</div>
	);
};
