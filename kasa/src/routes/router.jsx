import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '/src/pages/App/App.jsx';
import Navbar from '../components/Navbar/Navbar.jsx';
import Footer from '../components/Footer/Footer.jsx';
import MainWrapper from '../components/MainWrapper/MainWrapper.jsx';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import CurrentAppartement from '../pages/Appartement/CurrentAppartement.jsx';
import About from '../pages/About/About.jsx';
import ErrorPage from '../pages/404/ErrorPage.jsx';

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
    errorElement: <ErrorPage />,

    children: [
      {
        index: true,
        element: <App />
      },
      {
        path: "/appartement/:id",
        element: <CurrentAppartement />,
      },
      {
        path: "/about",
        element: <About />,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
