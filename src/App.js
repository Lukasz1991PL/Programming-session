import { useState } from 'react';
import { Title } from './components/Title/Title';

const App = () => {
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
  return (
    <div className='App'>
      <Title />
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
      {showEvents &&
        events.map((event, index) => (
          <div key={event.id}>
            <h2>
              {index}-{event.title}
            </h2>
            <button onClick={() => handleSubmit(event.id)}>delete event</button>
          </div>
        ))}
    </div>
  );
};
export default App;
