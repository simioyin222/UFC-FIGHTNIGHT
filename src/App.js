import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/homepage';
import { CateringPage } from './components/cateringpage';
import { VotingPage } from './components/votingpage';
import { StreamingPage } from './components/streamingpage';
import { TrendingPage } from './components/trendingpage';

// Import the messaging and getToken methods
import { messaging } from './firebase-init';
import { getToken } from 'firebase/messaging';

function App() {
  useEffect(() => {
    // Function to request permission and get the token
    const requestPermission = async () => {
      try {
        const token = await getToken(messaging, { vapidKey: 'BETH4MOIuzH3Np2fjxENzxCa3A9Nd8WXTsSCEQ_7VmRhghtu93zc7eWs2suflJ5zD87J3OyUUwwJbLQAPkf1jmY' });
        if (token) {
          console.log("Token obtained:", token);
          // Where I can send the token to the server for storing or subscribe to topics
        } else {
          console.log("Permission not granted for notifications.");
        }
      } catch (error) {
        console.error("An error occurred while retrieving token. ", error);
      }
    };

    // Call the function to request permission when the app loads
    requestPermission();
  }, []);

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} exact />
          <Route path="/catering" element={<CateringPage />} />
          <Route path="/voting" element={<VotingPage />} />
          <Route path="/streaming" element={<StreamingPage />} />
          <Route path="/trending" element={<TrendingPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;