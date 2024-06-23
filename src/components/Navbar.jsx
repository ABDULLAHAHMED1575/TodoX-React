import React, { useState } from 'react';

const Navbar = ({ setBgColor, setTextColor }) => {
  const [buttonColor, setButtonColor] = useState('bg-yellow-300');
  const [position, setPosition] = useState(0);
  const handleClick = () => {
    if (position === 0) {
      setPosition(1000); 
      setButtonColor('bg-black');
      setBgColor('bg-black'); 
      setTextColor('text-white');

    } else {
      setPosition(0); 
      setButtonColor('bg-yellow-300');
      setBgColor('bg-white');
      setTextColor('text-black');
    }
  };

  return (
    <div className='h-40 w-full flex justify-center'>
      <div className='h-20 w-[1000px] flex justify-center text-center align-middle bg-amber-500 rounded-full'>
        <div className='flex space-x-80 mt-4 text-2xl'>
          <div className='text-center align-middle '> 
            Project Tracker
          </div>
          <div className='w-12 h-12 bg-white rounded-full flex justify-center items-center'>
            <div
              className={`h-12 w-12 rounded-full ${buttonColor} cursor-pointer`}
              id='btn'
              onClick={handleClick}
              style={{ right: `${position}px` }}
            >
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
