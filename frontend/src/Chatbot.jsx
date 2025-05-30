import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Container, ListGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import './Chatbot.css';

const API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';
const API_KEY = 'AIzaSyC-ZzcXuKRHJ5TGuTTAhty1WPcfDD4dmn8';

const Chatbot = ({ onClose }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const promptPrefix = `You are CureConnect's AI assistant. Answer the patient's health-related questions in a helpful, friendly, and clear way. If asked for medical advice or prescriptions, kindly suggest consulting a licensed doctor through CureConnect's appointment service. Respond concisely and appropriately for a general health assistant.\n\n`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    const userMessage = { text: message, sender: 'user' };
    setMessages([...messages, userMessage]);

    try {
      const response = await axios.post(
        `${API_URL}?key=${API_KEY}`,
        {
          contents: [
            {
              role: 'user',
              parts: [{ text: promptPrefix + message }],
            },
          ],
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      const botMessage = {
        text: response.data.candidates[0].content.parts[0].text || 'No response text',
        sender: 'bot',
      };
      setMessages([...messages, userMessage, botMessage]);
    } catch (error) {
      console.error('Error sending message:', error.response ? error.response.data : error.message);
      const botMessage = {
        text: 'Sorry, something went wrong. ' + (error.response ? error.response.data.error.message : error.message),
        sender: 'bot',
      };
      setMessages([...messages, userMessage, botMessage]);
    }

    setMessage('');
  };

  return (
    <div className="chatbot-overlay">
      <div className="chatbot-container">
        <div className="chatbot-header">
          <h2>CureConnect Assistant</h2>
          <button onClick={onClose} className="close-button">
            &times;
          </button>
        </div>
        <Container className="chat-messages">
          <ListGroup>
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`message-container ${msg.sender === 'user' ? 'user-message' : 'bot-message'}`}
              >
                <ListGroup.Item className="chat-message">{msg.text}</ListGroup.Item>
              </div>
            ))}
          </ListGroup>
        </Container>
        <div className="chat-input-container">
          <Form onSubmit={handleSubmit} className="chat-input-container">
            <Form.Group controlId="message" className="message-input-container">
              <Form.Control
                type="text"
                placeholder="Ask me about health or appointments..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="btn send-btn">
              <FontAwesomeIcon icon={faPaperPlane} />
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
