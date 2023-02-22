import React, { useState } from 'react';
import { text } from '../style';

const Input = ({label, value, onChange, type, h}) => {

  const [isFocused, setIsFocused] = useState(false);

  return (
    <>
     {!type && (
        <div className="flex flex-col mb-4">
        <p className={`${text.body} ${isFocused ? 'text-[#343995]' : ''}`}>{label}</p>
        <input
            className={`border-b-[1px] border-gray-400 py-2 outline-none focus:border-blue-500 
            transition-colors ${isFocused ? 'border-[#343995]' : ''} text-sm`}
            type="text"
            //value={value}
            //onChange={onChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
        />
    </div>
     ) }

     {type == 'text-area' && (
        <div className="flex flex-col mb-4">
          <p className={`${text.body} ${isFocused ? 'text-[#343995]' : ''}`}>{label}</p>
          <textarea
            className={`border-b-[1px] border-gray-400 py-2 outline-none focus:border-blue-500 
            transition-colors ${isFocused ? 'border-[#343995] border rounded-[5px] px-2' : ''} resize-y h-${h} text-sm`}         
            value={value}
            onChange={onChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        </div>
     )}
    </>
  )
}

export default Input