

// import React, { useState, useEffect } from 'react';



// function Guestbook() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [friend, setFriend] = useState('');
//   const [message, setMessage] = useState('');
//   const [messages, setMessages] = useState([]);

//   useEffect(() => {
//     fetchMessages();
//   }, []);

//   const fetchMessages = async () => {
//     try {
//       const response = await fetch('/api/messages');
//       const { data } = await response.json();
//       setMessages(data);
//     } catch (error) {
//       console.error('Error fetching messages:', error);
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     if (name === 'name') {
//       setName(value);
//     } else if (name === 'email') {
//       setEmail(value);
//     } else if (name === 'friend') {
//       setFriend(value);
//     } else if (name === 'message') {
//       setMessage(value);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('/api/messages', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           name: name,
//           email: email,
//           friend: friend,
//           message: message,
//         }),
//       });
//       const { data } = await response.json();
//       setMessages([...messages, data]);
//       setName('');
//       setEmail('');
//       setFriend('');
//       setMessage('');
//     } catch (error) {
//       console.error('Error creating message:', error);
//     }
//   };

//   const handleUpdate = async (id, newContent) => {
//     try {
//       const response = await fetch(`/api/messages/${id}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ content: newContent }),
//       });
//       const { data } = await response.json();
//       setMessages(messages.map((msg) => (msg._id === data._id ? data : msg)));
//     } catch (error) {
//       console.error('Error updating message:', error);
//     }
//   };

//   const handleDelete = async (id) => {
//     try {
//       await fetch(`/api/messages/${id}`, { method: 'DELETE' });
//       setMessages(messages.filter((msg) => msg._id !== id));
//     } catch (error) {
//       console.error('Error deleting message:', error);
//     }
//   };

//   return (
//     <div>
//       <h1>Guestbook</h1>
//       <p>
//         Thank you for visiting our guestbook! If you would like to contribute to our special day, you can send your gift through Venmo or Zelle:
//       </p>
//       <ul>
//         <li>
//           Venmo: <a href="https://venmo.com/Sue-Park-3" target="_blank" rel="noopener noreferrer">@Sue-Park-3</a>
//         </li>
//         <li>
//           Zelle: <a href="mailto:suepark84@gmail.com">suepark84@gmail.com</a>
//         </li>
//       </ul>
//       <h2>Leave a Message</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="name">Name:</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={name}
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={email}
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="friend">Friend:</label>
//           <input
//             type="text"
//             id="friend"
//             name="friend"
//             value={friend}
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="message">Message:</label>
//           <textarea
//             id="message"
//             name="message"
//             value={message}
//             onChange={handleInputChange}
//             placeholder="Type your message here..."
//             rows={4}
//             cols={50}
//             required
//           />
//         </div>
//         <br />
//         <button type="submit">Submit</button>
//       </form>
//       {messages && messages.length > 0 ? (
//         <div>
//           <h3>Messages:</h3>
//           <ul>
//             {messages.map((msg) => (
//               <li key={msg._id}>
//                 <p>Name: {msg.name}</p>
//                 <p>Email: {msg.email}</p>
//                 <p>Friend: {msg.friend}</p>
//                 <p>Message: {msg.message}</p>
//                 <button onClick={() => handleUpdate(msg._id, 'Updated Content')}>
//                   Edit
//                 </button>
//                 <button onClick={() => handleDelete(msg._id)}>Delete</button>
//               </li>
//             ))}
//           </ul>
//         </div>
//       ) : (
//         <p>No messages available.</p>
//       )}
//     </div>
//   );
// }

// export default Guestbook;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// import '../CSS/Guestbook.css';

// const MessageList = ({ messages, handleDelete }) => {
//   if (messages.length === 0) {
//     return <p className="no-messages">No messages found.</p>;
//   }

//   return (
//     <div>
//       {messages.map((message) => (
//         <div className="guestbook-message" key={message._id}>
//           <h3>{message.name}</h3>
//           <p>{message.message}</p>
//           <button onClick={() => handleDelete(message._id)}>Delete</button>
//         </div>
//       ))}
//     </div>
//   );
// };


// const Guestbook = () => {
//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState({ name: '', email: '', friend: '', message: '' });
//   const [selectedMessage, setSelectedMessage] = useState(null);

//   useEffect(() => {
//     fetchMessages();
//   }, []);

//   const fetchMessages = async () => {
//     try {
//       const response = await axios.get('http://localhost:4000/message');
//       setMessages(response.data.data);
//     } catch (error) {
//       console.error('Error fetching messages:', error);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     if (selectedMessage) {
//       // Update existing message
//       try {
//         await axios.put(`http://localhost:4000/message/${selectedMessage}`, newMessage);
//         setSelectedMessage(null);
//         setNewMessage({ name: '', email: '', friend: '', message: '' });
//         fetchMessages();
//       } catch (error) {
//         console.error('Error updating message:', error);
//       }
//     } else {
//       // Create new message
//       try {
//         await axios.post('http://localhost:4000/message', newMessage);
//         setNewMessage({ name: '', email: '', friend: '', message: '' });
//         fetchMessages();
//       } catch (error) {
//         console.error('Error creating message:', error);
//       }
//     }
//   };
  

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`http://localhost:4000/message/${id}`);
//       fetchMessages();
//     } catch (error) {
//       console.error('Error deleting message:', error);
//     }
//   };

//   return (
//     <div className="guestbook-container">
//     <h2 className="guestbook-heading">Guestbook</h2>
//     <form className="guestbook-form" onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Name"
//           value={newMessage.name}
//           onChange={(e) => setNewMessage({ ...newMessage, name: e.target.value })}
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           value={newMessage.email}
//           onChange={(e) => setNewMessage({ ...newMessage, email: e.target.value })}
//         />
//         <input
//           type="text"
//           placeholder="Friend"
//           value={newMessage.friend}
//           onChange={(e) => setNewMessage({ ...newMessage, friend: e.target.value })}
//         />
//         <textarea
//           placeholder="Message"
//           value={newMessage.message}
//           onChange={(e) => setNewMessage({ ...newMessage, message: e.target.value })}
//         ></textarea>
//         <button type="submit">{selectedMessage ? 'Update' : 'Submit'}</button>
//       </form>
//       <MessageList messages={messages} handleDelete={handleDelete} />
//     </div>
//   );
// };

// export default Guestbook;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// import '../CSS/Guestbook.css';

// const MessageList = ({ messages, handleDelete, handleEdit }) => {
//   if (messages.length === 0) {
//     return <p className="no-messages">No messages found.</p>;
//   }

//   return (
//     <div>
//       {messages.map((message) => (
//         <div className="guestbook-message" key={message._id}>
//           <h3>{message.name}</h3>
//           <p>{message.message}</p>
//           <button onClick={() => handleEdit(message)}>Edit</button>
//           <button onClick={() => handleDelete(message._id)}>Delete</button>
//         </div>
//       ))}
//     </div>
//   );
// };

// const Guestbook = () => {
//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState({ name: '', email: '', friend: '', message: '' });
//   const [selectedMessage, setSelectedMessage] = useState(null);

//   useEffect(() => {
//     fetchMessages();
//   }, []);

//   const fetchMessages = async () => {
//     try {
//       const response = await axios.get('http://localhost:4000/message');
//       setMessages(response.data.data);
//     } catch (error) {
//       console.error('Error fetching messages:', error);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (selectedMessage) {
//       // Update existing message
//       try {
//         await axios.put(`http://localhost:4000/message/${selectedMessage._id}`, newMessage);
//         setSelectedMessage(null);
//         setNewMessage({ name: '', email: '', friend: '', message: '' });
//         fetchMessages();
//       } catch (error) {
//         console.error('Error updating message:', error);
//       }
//     } else {
//       // Create new message
//       try {
//         await axios.post('http://localhost:4000/message', newMessage);
//         setNewMessage({ name: '', email: '', friend: '', message: '' });
//         fetchMessages();
//       } catch (error) {
//         console.error('Error creating message:', error);
//       }
//     }
//   };

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`http://localhost:4000/message/${id}`);
//       fetchMessages();
//     } catch (error) {
//       console.error('Error deleting message:', error);
//     }
//   };

//   const handleEdit = (message) => {
//     setSelectedMessage(message);
//     setNewMessage(message);
//   };

//   return (
//     <div className="guestbook-container">
//       <h2 className="guestbook-heading">Guestbook</h2>
//       <form className="guestbook-form" onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Name"
//           value={newMessage.name}
//           onChange={(e) => setNewMessage({ ...newMessage, name: e.target.value })}
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           value={newMessage.email}
//           onChange={(e) => setNewMessage({ ...newMessage, email: e.target.value })}
//         />
//         <input
//           type="text"
//           placeholder="Friend"
//           value={newMessage.friend}
//           onChange={(e) => setNewMessage({ ...newMessage, friend: e.target.value })}
//         />
//        <textarea
//           placeholder="Message"
//           value={newMessage.message}
//           onChange={(e) => setNewMessage({ ...newMessage, message: e.target.value })}
//         ></textarea>
//         <button type="submit">{selectedMessage ? 'Update' : 'Submit'}</button>
//       </form>
//       <MessageList messages={messages} handleDelete={handleDelete} />
//     </div>
//   );
// };
//  export default Guestbook;

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
