import React  from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import Login from './Login';
import AppContent from './AppContent';
import Restricted from './Restricted';


const App = () => (
  <Router>
    <div>
      <header>
      </header>
      <main>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/main" component={Restricted(AppContent)} />
        </Switch>
      </main>
    </div>
  </Router>
);


export default App;
