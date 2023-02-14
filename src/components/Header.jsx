import React from 'react';
import { text } from '../style';

const Header = () => {
  return (
    <div className="h-48 w-full bg-black flex-col flex items-center justify-center">
      <p className={`${text.heading} text-white`}>Minutes Generator</p>
      <p className={`${text.small} text-white mt-2`}>February, 2023</p>
    </div>  
  )
}

export default Header