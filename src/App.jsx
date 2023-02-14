import React from 'react';
import { Footer, Form, Header, Info } from './components';
import { layout } from './style';



const App = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full'>
      <Header />

      <div className={layout.sectionItems}>
        <Info />
        <Form />
      </div>
      <Footer />
    </div>
  )
}

export default App