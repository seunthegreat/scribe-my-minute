import React from 'react';
import { text } from '../style';

const content = {
  info: {
    headline: 'ScribeMyMinute',
    body: `With ScribeMyMinute, you can save time, streamline your workflow, and get more out of your meetings. 
    Say goodbye to tedious manual minutes and hello to effortless, productive meetings.`
  }
}

const Info = () => {
  return (
    <div className='flex flex-col w-full h-full p-5'>
      <div className='bg-slate-100 p-3 rounded-[5px]'>
        <p className={`${text.subHeading} mb-2`}>{content.info.headline}</p>
        <p className={`${text.body}`}>{content.info.body}</p>
      </div>
    </div>
  )
}

export default Info