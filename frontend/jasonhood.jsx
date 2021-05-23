import React from 'react';
import ReactDOM from 'react-dom';
import * as ApiUtil from './util/session_api_util'
import configureStore from './store/store'
import Root from './components/root';


document.addEventListener("DOMContentLoaded", () => {
  // window.getState = store.getState;
  // window.dispatch = store.dispatch;
  let store;
  if (window.currentUser) {
    const preloadedState = {
      session: { id: window.currentUser.users.id },
      entities: {
        users: { [window.currentUser.users.id]: window.currentUser.users },
        assets: window.currentUser.assets,
        watchedAssets: window.currentUser.watched_assets
      }
    }
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  
 
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store}/>, root);
})

