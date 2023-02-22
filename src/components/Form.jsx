import React, { useState } from 'react';
import { text } from '../style';
import { Input, Minute, Button } from '.';


const Form = () => {

  const [ showMinute, setShowMinute ] = useState(false);

  return (
    <>
      { !showMinute ? (
        <div className="p-10 border m-5 rounded-[5px] ">
          <div className='flex flex-col'>
            <div className='grid grid-cols-2 gap-4'>
              <Input label={"Meeting agenda"} />
              <Input label={"Attendees"} />
            </div>

            <div className='my-2'>
              <Input label="Discussion notes" type={'text-area'} sx={`h-40`} />
            </div>

            <div className=''>
              <Input label="Comments" type={'text-area'} sx="h-20" />
            </div>

            <Button title={"Generate"} onClick={() => setShowMinute(true)}/>
          </div>

        </div>
      ) : <Minute onCreateNew={() => setShowMinute(false)}/>
      }
    </>
  )
}

export default Form