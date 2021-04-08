import React from 'react';
import SignupFormContainer from './session/signup_form_container'
import LoginFormContainer from './session/login_form_container'
import HomePageContainer from './home_page/home_page_container'
import { Route } from 'react-router-dom';


const App = () => (
  <div>
    <Route exact path="/" component={HomePageContainer}/>
    <Route path="/login" component={LoginFormContainer}/>
    <Route path="/signup" component={SignupFormContainer}/>
    
  </div>
);

export default App;