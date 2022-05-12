import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/:id" element={<App />} />
        <Route exact path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);

serviceWorkerRegistration.unregister();
