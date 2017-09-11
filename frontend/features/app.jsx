import React from 'react';
import { Provider } from 'react-redux';
// import {
//   Route,
//   Redirect,
//   Switch,
//   Link,
//   HashRouter
// } from 'react-router-dom';

// import SessionFormContainer from './session/session_form_container';
// import HomeContainer from './home_container';
// import { AuthRoute, ProtectedRoute } from './route_util';
import TodayContainer from './today/today_container';
import AddEditContainer from './addedit/addedit_container';
import StreaksContainer from './streaks/streaks_container';
import AvatarContainer from './avatar/avatar_container';


const App = () => (
  <div>
    <div className='top'>
      <StreaksContainer />
      <AvatarContainer />
    </div>
    <div className='bottom'>
      <AddEditContainer />
      <TodayContainer />
    </div>
  </div>
);
// const App = () => (
//   <div>
//     <Switch>
//       <Route exact path="/" component={HomeContainer} />
//       <AuthRoute path="/signup" component={SessionFormContainer} />
//     </Switch>
//
//   </div>
// );


export default App;
