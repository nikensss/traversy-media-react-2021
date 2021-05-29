import { useState } from 'react';

export const AddTask = ({ onAdd }) => {
  const [text, setText] = useState('');
  const [day, setDay] = useState('');
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) return alert('Task has no title!');

    onAdd({ text, day, reminder });
    setText('');
    setDay('');
    setReminder(false);
  };

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label htmlFor='title'>Title</label>
        <input
          type='text'
          id='title'
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></input>
      </div>

      <div className='form-control'>
        <label htmlFor='date-and-time'>Date and time</label>
        <input
          type='text'
          id='date-and-time'
          value={day}
          onChange={(e) => setDay(e.target.value)}
        ></input>
      </div>

      <div className='form-control form-control-check'>
        <label htmlFor='reminder'>Use reminder</label>
        <input
          type='checkbox'
          id='reminder'
          checked={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        ></input>
      </div>

      <input className='btn btn-block' type='submit' value='Add task'></input>
    </form>
  );
};
