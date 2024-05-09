import React from 'react';
<<<<<<< HEAD
import ReactDOM from 'react-dom/client'; // 변경된 부분
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root')); // 변경된 부분
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>
);
=======
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);
>>>>>>> e6545f23545bb395cd7fe05e4be18f5ab81c621b
