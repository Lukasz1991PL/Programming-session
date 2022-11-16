import React from 'react';

export const EventList = ({ handleSubmit, events }) => {
  return (
    <div>
      {events.map((event, index) => (
        <React.Fragment key={event.id}>
          <h2>
            {index}-{event.title}
          </h2>
          <button onClick={() => handleSubmit(event.id)}>delete event</button>
        </React.Fragment>
      ))}
    </div>
  );
};
