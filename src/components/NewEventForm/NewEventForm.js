import './NewEventForm.css';
import { useState } from 'react';

import React from 'react';

export const NewEventForm = () => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const resetForm = () => {
    setTitle('');
    setDate('');
  };
  //   const handleClick = (e) => {
  //     e.preventDefault();
  //     setTitle(e.target.value);
  //   };
  return (
    <form className='new-event-form'>
      <label>
        <span>Event title:</span>
        <input
          type='text'
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </label>
      <label>
        <span>Even Date:</span>
        <input
          type='date'
          onChange={(e) => setDate(e.target.value)}
          value={date}
        ></input>
      </label>
      <button>Submit</button>
      <button onClick={resetForm}>reset the form</button>
    </form>
  );
};
