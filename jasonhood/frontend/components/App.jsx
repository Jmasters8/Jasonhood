import React from 'react';
import SignupFormContainer from './session/signup_form_container'
import LoginFormContainer from './session/login_form_container'
import HomePageContainer from './home_page/home_page_container'
import NavbarContainer from './navbar/navbar_container'
import StockContainer from './stock_page/stock_page_container'
import GraphContainer from './graph/graph_container'
import { Route } from 'react-router-dom';



const App = () => (
  <div>
    <Route exact path="/" component={HomePageContainer}/>
    <Route path="/login" component={LoginFormContainer}/>
    <Route path="/signup" component={SignupFormContainer}/>
    {/* <Route path="/stocks/:symbol" component={GraphContainer}/> */}
    <Route path="/stocks/:symbol" component={StockContainer}/>
    
    
  </div>
);

export default App;