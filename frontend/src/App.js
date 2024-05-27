import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreateAddress from './pages/CreateAddress';
import EditAddress from './pages/EditAddress';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/create" component={CreateAddress} />
        <Route path="/edit/:id" component={EditAddress} />
      </Switch>
    </Router>
  );
}

export default App;
