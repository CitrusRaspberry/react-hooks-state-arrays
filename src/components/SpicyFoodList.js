import React, { useState } from "react";
import { spicyFoods, getNewSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);

  function handleAddFood() {
    const newFood = getNewSpicyFood();
    setFoods(() => [...foods, newFood]);
  }

  const listItems = foods.map(({id, name, cuisine, heatLevel}) => {
    return (<li key={id}>{name}: {cuisine}, heat level {heatLevel}</li>)
  });

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{listItems}</ul>
    </div>
  );
}

export default SpicyFoodList;
