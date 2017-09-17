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
    <img className="background" src="assets/starrynigh.jpg"/>
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
//     <h1>broken????</h1>
//
//   </div>
// );


export default App;
