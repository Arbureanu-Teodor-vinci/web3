/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const colors = ['red', 'green', 'blue', 'yellow', 'violet'];

function ColorBox() {
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  const handleColorChange = () => {
    setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
  };

  const currentColor = colors[currentColorIndex];
  const nextColor = colors[(currentColorIndex + 1) % colors.length];

  return (
    <div style={{ backgroundColor: currentColor, width: '200px', height: '200px', padding: '20px', margin: '10px' }}>
      <button onClick={handleColorChange}>
        {nextColor}
      </button>
      <p>{currentColor}</p>
    </div>
  );
}

export default ColorBox;