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

  const handleSubmit = (e) => {
    e.preventDefault();

    const event = {
      title,
      date,
    };
    console.log(event);
    resetForm();
  };
  return (
    <form className='new-event-form' onSubmit={handleSubmit}>
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
    </form>
  );
};
