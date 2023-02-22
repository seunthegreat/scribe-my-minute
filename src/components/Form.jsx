import React from 'react';
import { text } from '../style';
import { Input } from '.';


const Form = () => {

  return (
    <div className="p-10 border m-5 rounded-[5px] ">
      {/* <div className='mb-10'>
        <p className={`${text.normal}`}>Fill in the necessary details to generate your minute</p>
      </div> */}
      <div className='flex flex-col'>
        <div className='grid grid-cols-2 gap-4'>
          <Input label={"Meeting agenda"} />
          <Input label={"Attendees"} />
        </div>
        
        <div className='my-2'>
          <Input label="Discussion notes" type={'text-area'} h="40" />
        </div>

        <div className=''>
          <Input label="Comments" type={'text-area'} h="20" />
        </div>

        <button
          className='bg-primary rounded-[5px] hover:bg-slate-100 '
        >
          <p className={`text-white hover:text-primary h-full py-3`}>Generate</p>
        </button>  
      </div>
      
    </div>
  )
}

export default Form