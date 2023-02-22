import React from 'react';
import { text } from '../style';
import { AiOutlineShareAlt } from 'react-icons/ai';
import { TfiReload } from 'react-icons/tfi';
import { MdOutlineAdd } from "react-icons/md"

const actionItems = `Seun and Shalom to deliver copies to Ayo within one week
  Ayo to review and finalize the terms and conditions within two weeks
  All attendees to communicate progress via email by the end of each week`;
const nextStep = `Ayo to schedule a follow-up meeting in two weeks to review progress and make necessary adjustments
  The meeting was productive, with the attendees discussing the main topics of creating effective headlines for the Hero section, working on copies for other sections, writing terms and conditions, and defining "How it works" section. It was agreed that Seun and Shalom would create separate copies for the main landing page and "How it Works" section, as well as the script for the video on "How it Works". Ayo's task is to work on the terms and conditions for the website.`

const decisionMade = `Seun and Shalom to work on separate copies for the main landing page and "How it Works" section, as well as the script for the video on 
  "How it Works" Ayo to work on the terms and conditions for the website`;

const result = {
  title: "Delivery of Copies for FT9ja Landing Page",
  summary: {
    title: "Summary",
    body: `Delivery of Copies for FT9ja Landing Page
    Date and Time: 14 February 2023, 10:00 AM
    Attendees: Ayo (Product Manager for ATAfrica), Shalom (Content Creator), Seun (Software Developer)`
  },
  purpose: {
    title: "Purpose",
    body: "To determine where and when the copies for the FT9ja landing page should be delivered."
  },
  actionItems: {
    title: "Action Items",
    body: actionItems,
  },
  nextSteps : {
    title: "Next Step", 
    body: nextStep
  },
  decisionMade: {
    title: "Decision Made",
    body: decisionMade,
  },
  keyTopics: {
    title: "Key Topics",
    topics: [
      {id: 1, topics: 'Creating an effective headline for the Hero Section'},
      {id: 2, topics: 'Working on copies for the other sections'},
      {id: 3, topics: 'Writing the terms and conditions'},
      {id: 4, topics: 'Defining "How it works" section'}
    ]
  }
};

const Note = ({title, body}) => (
  <div className='mb-4'>
    <p className={`${text.normal} mb-1`}>{title}</p>
    <p className={`${text.body}`}>{body}</p>
  </div>
);

const Minute = ({onCreateNew}) => {
  return (
    <div className='p-5 '>
      <div className='flex flex-col bg-slate-100 p-5 rounded-[5px]'>
        
        <div className='flex flex-row items-center justify-between'>
          <div className='flex flex-col'>
            <p className={`${text.subHeading} mb-2`}>{result.title}</p>
            <div className='flex flex-row mb-5 items-center'>
              <p className={`${text.body} mr-3`}>Minute</p>
              <button className='hover:scale-105 flex flex-row border p-2 rounded-[5px] mr-2'>
                <AiOutlineShareAlt style={{color:"gray"}} />
                <p className={`${text.body} ml-2`}>Share</p>
              </button>

              <button className='hover:scale-105 flex flex-row border p-2 rounded-[5px] mr-2'>
                <TfiReload style={{color:"gray"}} />
                <p className={`${text.body} ml-2`}>Regenerate</p>
              </button>

              <button 
                onClick={onCreateNew}
                className='hover:scale-105 flex flex-row border p-2 rounded-[5px]'>
                <MdOutlineAdd style={{color:"gray"}} />
                <p className={`${text.body} ml-2`}>Create New</p>
              </button>
            </div>

            
          </div>
        </div>

        <Note title={result.summary.title} body={result.summary.body}/>
        <Note title={result.purpose.title} body={result.purpose.body}/>

        <div className='mb-4'>
          <p className={`${text.normal} mb-1`}>{result.keyTopics.title}</p>

          {result.keyTopics.topics.map((item, index) => (
            <p key={index} className={`${text.body} ml-2`}>{index+1} {`. `} {item.topics}</p>
          ))}

        </div>

        <Note title={result.decisionMade.title} body={result.decisionMade.body}/>
        <Note title={result.actionItems.title} body={result.actionItems.body}/>
        <Note title={result.nextSteps.title} body={result.nextSteps.body}/>
      </div>
    </div>
  )
}

export default Minute