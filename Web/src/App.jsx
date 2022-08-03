import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import RouteOne from './Routes/RouteOne';
import RouteTwo from './Routes/RouteTwo';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<RouteOne />} />
          <Route path="/details/:id" element={<RouteTwo />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;