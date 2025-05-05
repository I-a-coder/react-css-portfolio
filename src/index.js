import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { PageTitleProvider } from './context/PageTitleContext';

// Create router with future flags
const router = createBrowserRouter(
  [
    {
      path: "*",
      element: (
        <PageTitleProvider>
          <App />
        </PageTitleProvider>
      )
    }
  ],
  {
    future: {
      v7_relativeSplatPath: true
    }
  }
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
