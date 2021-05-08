import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { MiddlewareHelper, SetGlobalRerender } from './Helpers';
import { AppRoutes } from './Routes';
import { SwitchRouteComponent } from './Components/SwitchRoute/SwitchRoute.Component';
import './App.scss';

function App() {
  const [render, setRender] = useState(false);
  SetGlobalRerender(setRender, render);
  return (
    <Router>
      <MiddlewareHelper />
      <SwitchRouteComponent routes={AppRoutes} />
    </Router>
  );
}

export default App;
