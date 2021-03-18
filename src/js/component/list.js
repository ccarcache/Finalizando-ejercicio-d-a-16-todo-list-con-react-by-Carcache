import React from "react";
import PropTypes from "prop-types";

function List(props) {
	const deleteItemfromList = key => {
		const newList = props.itemList.filter(itemObj => {
			return itemObj.key !== key;
		});

		props.updateItemList(newList);
	};

	return (
		<div>
			{props.itemList.map((itemObj, index) => {
				return (
					<div id="lista" className="row" key={itemObj}>
						<div id="texto" className="col-8 bg-white p-2">
							{itemObj.item}
						</div>
						<div className="col-4 bg-white">
							<button
								onClick={() => deleteItemfromList(itemObj.key)}
								type="button"
								className="close p-2"
								aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
					</div>
				);
			})}
		</div>
	);
}
List.propTypes = {
	itemList: PropTypes.string,
	updateItemList: PropTypes.string
};

export default List;
