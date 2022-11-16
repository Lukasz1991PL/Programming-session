import { useState } from 'react';
import { Title } from './components/Title/Title';
import React from 'react';
import { Modal } from './components/Modal/Modal';
import { EventList } from './components/EventList/EventList';
import { NewEventForm } from './components/NewEventForm/NewEventForm';
const App = () => {
  const [showModel, setShowModel] = useState('false');
  const [showEvents, setShowEvents] = useState('true');
  const [events, setEvents] = useState([
    { title: 'My birthday', id: 1 },
    { title: 'Programming session', id: 2 },
    { title: 'Meeting with sister', id: 3 },
  ]);

  console.log(showEvents);

  //handleSubmit = (id) => { setEvents }
  const handleSubmit = (id) => {
    setEvents((prevEvent) => {
      return prevEvent.filter((event) => {
        return id !== event.id;
      });
    });
  };
  const handleCloseM = () => {
    setShowModel(false);
  };
  const subtitle = 'All the lastes events in Wroclaw';
  return (
    <div className='App'>
      <Title title='Events in my area' subtitle={subtitle} />
      {showEvents && (
        <div>
          <button onClick={() => setShowEvents(false)}>hide events</button>
        </div>
      )}
      {!showEvents && (
        <div>
          <button onClick={() => setShowEvents(true)}>show events</button>
        </div>
      )}
      {showEvents && <EventList handleSubmit={handleSubmit} events={events} />}
      {showModel && (
        <Modal handleCloseModel={handleCloseM} isSalesModal={false}>
          <NewEventForm />
        </Modal>
      )}
      <br />
      <>
        <button onClick={() => setShowModel(true)}>Show modal </button>
      </>
    </div>
  );
};
export default App;
