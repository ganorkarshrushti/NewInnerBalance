/*import React, { useState } from 'react';

export function Chatbot() {
  const [messages, setMessages] = useState([]);

  // Function to send a message
  const sendMessage = async (message) => {
    try {
      // Send message to the backend
      const response = await fetch('http://localhost:5000/gem/fetch-data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message })
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const data = await response.json();
      
      // Update state with the received response from the backend
      setMessages([...messages, { text: message, isUser: true }, { text: data.text, isUser: false }]);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Inline CSS styles
  const styles = {
    container: {
      maxWidth: '800px',
      margin: '20px auto',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '10px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    messagesContainer: {
      marginBottom: '20px',
    },
    messageWrapper: {
      display: 'flex',
      marginBottom: '10px',
    },
    userMessage: {
      backgroundColor: '#DCF8C6',
      padding: '10px',
      borderRadius: '10px 10px 10px 0',
      marginLeft: 'auto',
      maxWidth: '70%',
    },
    botMessage: {
      backgroundColor: '#E6E6E6',
      padding: '10px',
      borderRadius: '10px 10px 0 10px',
      maxWidth: '70%',
    },
    inputContainer: {
      display: 'flex',
    },
    inputField: {
      flex: '1',
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      outline: 'none',
    },
    inputFieldFocus: {
      borderColor: '#007BFF',
    },
    sendButton: {
      marginLeft: '10px',
      padding: '10px 20px',
      backgroundColor: '#007BFF',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.container}>
      <h1>Chat Bot</h1>
      <div style={styles.messagesContainer}>
       
        {messages.map((msg, index) => (
          <div key={index} style={styles.messageWrapper}>
            {msg.isUser ? (
              <div style={styles.userMessage}>{msg.text}</div>
            ) : (
              <div style={styles.botMessage}>{msg.text}</div>
            )}
          </div>
        ))}
      </div>
      <div style={styles.inputContainer}>
        <input
          type="text"
          style={styles.inputField}
          placeholder="Type a message..."
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              sendMessage(e.target.value);
              e.target.value = '';
            }
          }}
          onFocus={(e) => {
            e.target.style = { ...e.target.style, ...styles.inputFieldFocus };
          }}
          onBlur={(e) => {
            e.target.style = { ...e.target.style, borderColor: '#ccc' };
          }}
        />
        <button
          style={styles.sendButton}
          onClick={(e) => {
            const inputField = document.querySelector('input[type="text"]');
            sendMessage(inputField.value);
            inputField.value = '';
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
}
*/
import React, { useState } from 'react';

export function Chatbot() {
  const [messages, setMessages] = useState([]);

  // Function to send a message
  const sendMessage = async (message) => {
    try {
      // Send message to the backend
      const response = await fetch('http://localhost:5000/gem/fetch-data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message })
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const data = await response.json();
      
      // Update state with the received response from the backend
      setMessages([...messages, { text: message, isUser: true }, { text: data.text, isUser: false }]);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Inline CSS styles
  const styles = {
    container: {
      maxWidth: '600px',
      margin: '20px auto',
      padding: '20px',
      border: '1px solid #E0E0E0',
      borderRadius: '15px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#F9F9F9',
      fontFamily: '"Roboto", sans-serif',
    },
    messagesContainer: {
      marginBottom: '20px',
      maxHeight: '400px',
      overflowY: 'auto',
      padding: '10px',
      backgroundColor: '#FFF',
      borderRadius: '10px',
      boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.05)',
    },
    messageWrapper: {
      display: 'flex',
      marginBottom: '10px',
    },
    userMessage: {
      backgroundColor: '#DCF8C6',
      padding: '10px',
      borderRadius: '20px 20px 0 20px',
      marginLeft: 'auto',
      maxWidth: '70%',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
    },
    botMessage: {
      backgroundColor: '#E6E6E6',
      padding: '10px',
      borderRadius: '20px 20px 20px 0',
      maxWidth: '70%',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
    },
    inputContainer: {
      display: 'flex',
      alignItems: 'center',
      padding: '10px',
      backgroundColor: '#FFF',
      borderRadius: '10px',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
    },
    inputField: {
      flex: '1',
      padding: '10px',
      border: '1px solid #E0E0E0',
      borderRadius: '20px',
      outline: 'none',
      transition: 'border-color 0.3s',
      fontFamily: '"Roboto", sans-serif',
    },
    inputFieldFocus: {
      borderColor: '#007BFF',
    },
    sendButton: {
      marginLeft: '10px',
      padding: '10px 20px',
      backgroundColor: '#007BFF',
      color: '#fff',
      border: 'none',
      borderRadius: '20px',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
      fontFamily: '"Roboto", sans-serif',
    },
    sendButtonHover: {
      backgroundColor: '#0056b3',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px', fontFamily: '"Roboto", sans-serif', color: '#333' }}>Chat Bot</h1>
      <div style={styles.messagesContainer}>
        {/* Render messages */}
        {messages.map((msg, index) => (
          <div key={index} style={styles.messageWrapper}>
            {msg.isUser ? (
              <div style={styles.userMessage}>{msg.text}</div>
            ) : (
              <div style={styles.botMessage}>{msg.text}</div>
            )}
          </div>
        ))}
      </div>
      <div style={styles.inputContainer}>
        <input
          type="text"
          style={styles.inputField}
          placeholder="Type a message..."
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              sendMessage(e.target.value);
              e.target.value = '';
            }
          }}
          onFocus={(e) => {
            e.target.style.borderColor = styles.inputFieldFocus.borderColor;
          }}
          onBlur={(e) => {
            e.target.style.borderColor = '#E0E0E0';
          }}
        />
        <button
          style={styles.sendButton}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = styles.sendButtonHover.backgroundColor;
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = styles.sendButton.backgroundColor;
          }}
          onClick={(e) => {
            const inputField = document.querySelector('input[type="text"]');
            sendMessage(inputField.value);
            inputField.value = '';
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
}


