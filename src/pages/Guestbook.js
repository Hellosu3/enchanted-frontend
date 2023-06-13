
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import '../CSS/Guestbook.css';

const MessageList = ({ messages, handleDelete, handleEdit, selectedMessage, isEditing }) => {
  if (messages.length === 0) {
    return <p className="no-messages">No messages found.</p>;
  }

  return (
    <div>
      {messages.map((message) => (
        <div className="guestbook-message" key={message._id}>
          <h3>{message.name}</h3>
          <p>{message.message}</p>
          <button onClick={() => handleEdit(message)} disabled={selectedMessage === message && isEditing}>
            Edit
          </button>
          <button onClick={() => handleDelete(message._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

const Guestbook = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState({ name: '', email: '', friend: '', message: '' });
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await axios.get('http://localhost:4000/message');
      setMessages(response.data.data);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isEditing) {
      // Update existing message
      try {
        await axios.put(`http://localhost:4000/message/${selectedMessage._id}`, newMessage);
        setIsEditing(false);
        setSelectedMessage(null);
        setNewMessage({ name: '', email: '', friend: '', message: '' });
        fetchMessages();
      } catch (error) {
        console.error('Error updating message:', error);
      }
    } else {
      // Create new message
      try {
        await axios.post('http://localhost:4000/message', newMessage);
        setNewMessage({ name: '', email: '', friend: '', message: '' });
        fetchMessages();
      } catch (error) {
        console.error('Error creating message:', error);
      }
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/message/${id}`);
      fetchMessages();
    } catch (error) {
      console.error('Error deleting message:', error);
    }
  };

  const handleEdit = (message) => {
    setIsEditing(true);
    setSelectedMessage(message);
    setNewMessage({
      name: message.name,
      email: message.email,
      friend: message.friend,
      message: message.message,
    });
  };

  return (
    <div className="guestbook-container">
      <h2 className="guestbook-heading">Guestbook</h2>
      <form className="guestbook-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={newMessage.name}
          onChange={(e) => setNewMessage({ ...newMessage, name: e.target.value })}
        />
             <input
          type="email"
          placeholder="Email"
          value={newMessage.email}
          onChange={(e) => setNewMessage({ ...newMessage, email: e.target.value })}
        />
        <input
          type="text"
          placeholder="Friend"
          value={newMessage.friend}
          onChange={(e) => setNewMessage({ ...newMessage, friend: e.target.value })}
        />
        <textarea
          placeholder="Message"
          value={newMessage.message}
          onChange={(e) => setNewMessage({ ...newMessage, message: e.target.value })}
        ></textarea>
        <button type="submit">{isEditing ? 'Update' : 'Submit'}</button>
      </form>
      <MessageList
        messages={messages}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        selectedMessage={selectedMessage}
        isEditing={isEditing}
      />
    </div>
  );
};

export default Guestbook;
