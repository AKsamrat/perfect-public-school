import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './Pages/Root.jsx';
import ErrorPage from './Pages/ErrorPage';
import AuthProvider from './Provider/AuthProvider.jsx';
import Homepage from './Pages/Home/Homepage.jsx';
import AboutUs from './Pages/AboutUs/AboutUs.jsx';
import Academic from './Pages/Academic/Academic.jsx';
import Notice from './Pages/Notice/Notice.jsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Homepage />,
      },
      {
        path: '/aboutUs',
        element: <AboutUs />,
      },
      {
        path: '/academic',
        element: <Academic />,
      },
      {
        path: '/notice',
        element: <Notice />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
