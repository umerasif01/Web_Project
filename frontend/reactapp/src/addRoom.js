import React, { useState } from 'react';
import './addRoom.css'

const RoomForm = () => {
  const [roomNumber, setRoomNumber] = useState('');
  const [rollNumber, setRollNumber] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform any additional validation or data processing here

    // Create the payload object
    const payload = {
      roomNumber,
      rollNumber,
      startTime,
      endTime
    };

    // Make the API call to add the room
    // You can use libraries like Axios or fetch for making the API request

    // Reset the form after submission
    setRoomNumber('');
    setRollNumber('');
    setStartTime('');
    setEndTime('');
  };

  return (
    <form className="room-form" onSubmit={handleSubmit}>
      <label htmlFor="roomNumber">Room Number:</label>
      <input
        type="number"
        id="roomNumber"
        value={roomNumber}
        onChange={(e) => setRoomNumber(e.target.value)}
        required
      />

      <label htmlFor="rollNumber">Roll Number:</label>
      <input
        type="number"
        id="rollNumber"
        value={rollNumber}
        onChange={(e) => setRollNumber(e.target.value)}
        required
      />

      <label htmlFor="startTime">Start Time:</label>
      <input
        type="datetime-local"
        id="startTime"
        value={startTime}
        onChange={(e) => setStartTime(e.target.value)}
        required
      />

      <label htmlFor="endTime">End Time:</label>
      <input
        type="datetime-local"
        id="endTime"
        value={endTime}
        onChange={(e) => setEndTime(e.target.value)}
        required
      />

      <button type="submit">Add Room</button>
    </form>
  );
};

export default RoomForm;
