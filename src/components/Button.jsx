import React from 'react';
import { text } from '../style';

const Button = ({onClick, title}) => {
  return (
    <button
      className='bg-primary rounded-[5px] hover:bg-slate-100'
      onClick={onClick}
    >
      <p className={`text-white hover:text-primary h-full py-3`}>{title}</p>
    </button>
  )
}

export default Button;