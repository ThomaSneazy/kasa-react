import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';
import MainWrapper from './components/MainWrapper/MainWrapper.jsx';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// eslint-disable-next-line react-refresh/only-export-components
const HeaderFooterLayout = () => {
  return <>
  <MainWrapper>
    <Navbar />
    <Outlet />
  </MainWrapper>
    <Footer />
  </>
};


const router = createBrowserRouter([
  {
    element: <HeaderFooterLayout />,
    children: [
      {
        index: true,
        element: <App />
      },
      {
        path: "/appartement",
        element: <h2>Les apparts</h2>,
      },
      {
        path: "/about",
        element: <h2>about</h2>,
      },
      {
        path: "/",
        errorElement: <h2>404</h2>,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
