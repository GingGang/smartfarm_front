import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Login from './component/login/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));

function Root() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <React.StrictMode>
      <BrowserRouter>
        {isLoggedIn ? <App /> : <Login setIsLoggedIn={setIsLoggedIn} />}
      </BrowserRouter>
    </React.StrictMode>
  );
}

root.render(<Root />);
