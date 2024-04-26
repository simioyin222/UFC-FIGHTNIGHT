import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import CateringPage from './components/cateringpage';
import VotingPage from './components/VotingPage';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/catering" component={CateringPage} />
          <Route path="/voting" component={VotingPage} />
          {/* Add other routes here */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
