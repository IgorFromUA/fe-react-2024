import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.tsx';

import './styles/normalize.css';
import './styles/root.css';

ReactDOM.createRoot(document.querySelector('#root')!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
