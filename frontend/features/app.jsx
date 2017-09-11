import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import SessionFormContainer from './session/session_form_container';
import HomeContainer from './home_container';
import { AuthRoute, ProtectedRoute } from './route_util';

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={HomeContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
      
    </Switch>

  </div>
);


export default App;
