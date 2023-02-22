import React from 'react';
import { text } from '../style';
import { Player } from '@lottiefiles/react-lottie-player';

const content = {
  info: {
    headline: 'ScribeMyMinute',
    body: `Fill in simple details and get a professional minute in less than a minute. Now you can save time, streamline your workflow, and get more out of your meetings. 
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
      <Player
          autoplay={true}
          loop={true}
          controls={true}
          src={"https://assets9.lottiefiles.com/packages/lf20_re3xr9zy.json"}
          className="w-[70%] h-[80%] object-contain hidden sm:block"
        />
    </div>
  )
}

export default Info