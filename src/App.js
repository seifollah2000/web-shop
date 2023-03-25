import React, { useEffect } from 'react';

import './App.css';
import Toast from './Commponent/Toast/Toast';
import HandlerContext from './Context/ContextProduct';
import router from './router';
import { useLocation, useRoutes } from 'react-router-dom'
import ScrollTop from './Commponent/ScrollTop/ScrollTop';
function App() {
  const routers = useRoutes(router)

  return (
    <>
      <HandlerContext>
        {routers}
        <Toast />
      </HandlerContext>
      <ScrollTop />
    </>
  );
}

export default App;
