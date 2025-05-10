import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Doctors from './pages/Doctors';
import Login from './pages/Login';
import About from './pages/About';
import Contact from './pages/Contact';
import Myprofile from './pages/Myprofile';
import MyAppointments from './pages/MyAppointments';
import Appointment from './pages/Appointment';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import Chatbot from './Chatbot';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';

const App = () => {
  const [activeComponent, setActiveComponent] = useState(null);
  const [showButtons, setShowButtons] = useState(false);
  const [showChatbot, setShowChatbot] = useState(false);
  const [previousComponent, setPreviousComponent] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButtons(true);
      setActiveComponent('buttons');
      //console.log("Buttons should now be visible");
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  const handleOpenChatbot = () => setShowChatbot(true);
  const handleCloseChatbot = () => setShowChatbot(false);

  const handleBack = () => {
    setActiveComponent(previousComponent);
    setPreviousComponent(null);
  };

  const handleComponentChange = (component) => {
    setPreviousComponent(activeComponent);
    setActiveComponent(component);
  };

  return (
    <div className='mx-4 sm:mx-[10%]'>
      <ToastContainer />
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/doctors/:speciality' element={<Doctors />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/my-profile' element={<Myprofile />} />
        <Route path='/my-appointments' element={<MyAppointments />} />
        <Route path='/appointment/:docId' element={<Appointment />} />
      </Routes>

      <Footer />

      {/* Floating Chatbot Button */}
      <button
        onClick={handleOpenChatbot}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          backgroundColor: '#4ecdc4',
          border: 'none',
          color: 'white',
          padding: '15px',
          borderRadius: '50%',
          fontSize: '20px',
          cursor: 'pointer',
          zIndex: 1001,
          boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
        }}
      >
        <FontAwesomeIcon icon={faCommentDots} />
      </button>

      {/* Chatbot Overlay */}
      {showChatbot && <Chatbot onClose={handleCloseChatbot} />}
    </div>
  );
};

export default App;
