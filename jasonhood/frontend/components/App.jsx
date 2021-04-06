import React from 'react';
import SignupContainer from './session/signup_container'
import { Route } from 'react-router-dom';

const App = () => (
  <div>
    {/* <h1>Jasonhood!!!</h1> */}
    <Route path="/signup" component={SignupContainer}/>
  </div>
);

export default App;