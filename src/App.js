import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Todo from './screen/Todo';

const App = () => {
  const [bgColor, setBgColor] = useState('bg-white');
  const [textColor, setTextColor] = useState('text-black');

  const handleColorChange = (newColor) => {
    setBgColor(newColor); // Update background color state
  };

  const handleTextChange = (newColor) => {
    setTextColor(newColor); // Update text color state
  };

  return (
    <div className={`h-screen ${bgColor} ${textColor}`}>
      <Navbar setBgColor={handleColorChange} setTextColor={handleTextChange} />
      <Todo/>
    </div>
  );
};

export default App;
