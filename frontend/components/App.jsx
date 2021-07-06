import React from 'react';
import SignupFormContainer from './session/signup_form_container'
import LoginFormContainer from './session/login_form_container'
import HomePageContainer from './home_page/home_page_container'
import StockContainer from './stock_page/stock_page_container'
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_utils';

const App = () => (
  <div>
    <Route exact path="/" component={HomePageContainer}/>
    <AuthRoute path="/login" component={LoginFormContainer}/>
    <AuthRoute path="/signup" component={SignupFormContainer}/>
    <ProtectedRoute path="/stocks/:symbol" component={StockContainer}/>
  </div>
);

export default App;