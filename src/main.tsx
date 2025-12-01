import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/index.css';
import GitProfile from './components/gitprofile.tsx';

declare global {
  var CONFIG: Record<string, unknown>;
}

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element not found. Make sure index.html has <div id="root"></div>');
}

if (!CONFIG) {
  console.error('CONFIG is not defined! Check vite.config.ts define section');
  throw new Error('CONFIG is not defined');
}

console.log('CONFIG loaded:', CONFIG);

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <GitProfile config={CONFIG} />
  </React.StrictMode>,
);