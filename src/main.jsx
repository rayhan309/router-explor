import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Home.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router';
import About from './Pages/About.jsx';
import RootLayout from './Components/RootLayout/RootLayout.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: '/Home',
        Component: Home
      },
      {
        path: '/About',
        Component: About
      }
    ],
    Component: RootLayout
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
