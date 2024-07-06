import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NavBar from './components/navbar/NavBar.jsx';
import ContactUs from './pages/contactus/ContactUs.jsx';

const router = createBrowserRouter(
  [
    {
      element: <NavBar />,
      children: [
        {
          path: "/",
          element: <App/>,
        },
        {
          path: "/blog",
          element: <App/>,
        },
        {
          path: "/contactus",
          element: <ContactUs/>,
        },
      ],
    },
    { errorElement: <div>erro</div> },
  ],
  {
    basename: import.meta.env.VITE_SUBDOMAIN ?? '',
  },
);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
