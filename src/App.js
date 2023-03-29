import React, { useEffect } from 'react';

import './App.css';
import Toast from './Commponent/Toast/Toast';
import HandlerContext from './Context/ContextProduct';
import router from './router';
import { useLocation, useRoutes } from 'react-router-dom'
import ScrollTop from './Commponent/ScrollTop/ScrollTop';
import { Provider } from 'react-redux';
import store from './Redux/store';
function App() {
  const routers = useRoutes(router)

  return (
    <>
      <Provider store={store}>
        <HandlerContext>
          {routers}
          <Toast />
        </HandlerContext>
        <ScrollTop />
      </Provider>
    </>
  );
}

export default App;
