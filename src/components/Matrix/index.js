// src/Matrix.js
import React, { useState } from 'react';
import './index.css';

const Matrix = () => {
  // State to keep track of the color of each box
  const [boxes, setBoxes] = useState(Array(9).fill(null));
  
  // State to keep track of the order in which boxes are clicked
  const [clickOrder, setClickOrder] = useState([]);

  const handleClick = (index) => {
    // If the box is not clicked yet
    if (!boxes[index]) {
      // Mark the clicked box as 'green'
      const updatedBoxes = [...boxes];
      updatedBoxes[index] = 'green';
      setBoxes(updatedBoxes);

      // Track the click order
      const updatedClickOrder = [...clickOrder, index];
      setClickOrder(updatedClickOrder);

      // If all boxes are clicked, change all to 'orange' in the order of clicks
      if (updatedClickOrder.length === 9) {
        setTimeout(() => {
          const finalBoxes = Array(9).fill(null);
          updatedClickOrder.forEach((i, order) => {
            setTimeout(() => {
              finalBoxes[i] = 'orange';
              setBoxes([...finalBoxes]);
            }, order*1000); // Delay each box change slightly
          });
        }, 1000); // Delay before starting to change to orange
      }
    }
  };

  return (
    <div className="matrix">
      {boxes.map((color, index) => (
        <div
          key={index}
          className="box"
          style={{ backgroundColor: color }}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
};

export default Matrix;
