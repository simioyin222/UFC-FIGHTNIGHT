import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HomePage } from './components/homepage';
import { CateringPage } from './components/cateringpage';
import { VotingPage } from './components/votingpage';
import { StreamingPage } from './components/streamingpage';
import { TrendingPage } from './components/trendingpage';

function App() {
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