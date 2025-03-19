import React from 'react';
import { InlineWidget } from 'react-calendly';

const CalendlyEmbed = () => {
  return (
    <>
    <h2 className='calendly--heading'>Book a time with me</h2>
    <div className='calendly--section'>
      <InlineWidget url="https://calendly.com/solanki-o/60-min-call" />
    </div>
    </>
  );
};

export default CalendlyEmbed;
