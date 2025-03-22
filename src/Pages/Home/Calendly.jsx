import React from 'react';
import { InlineWidget } from 'react-calendly';
// require('dotenv').config()

const CalendlyEmbed = () => {
  return (
    <>
    <h2 className='calendly--heading'>Book a time with me</h2>
    <div className='calendly--section'>
      <InlineWidget url={process.env.REACT_APP_CALENDLY} />
    </div>
    </>
  );
};

export default CalendlyEmbed;
