import React from 'react';
import './index.css';
import { createRoot } from 'react-dom/client';
import AppRouter from './AppRouter';
import { ContextProvider } from './contexts/ContextProvider';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <ContextProvider>
    <AppRouter/>
  </ContextProvider>
);
