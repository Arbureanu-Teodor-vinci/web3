import React from 'react';
import ReactDOM from 'react-dom/client';
import App, { HomePage, BooksPage } from './App.jsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ProviderWrapper } from './contexts/bookContext';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "books",
        element: <BooksPage />,
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProviderWrapper>
      <RouterProvider router={router} />
    </ProviderWrapper>
  </React.StrictMode>,
);