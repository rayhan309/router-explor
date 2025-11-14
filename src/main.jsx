import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Home.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router';
import About from './Pages/About.jsx';
import RootLayout from './Components/RootLayout/RootLayout.jsx';
import Contacts from './Pages/Contacts.jsx';
import CardDetailes from './Pages/CardDetailes.jsx';
import Spinner from './Components/Spinner/Spinner.jsx';
import AddCard from './Pages/AddCard.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    hydrateFallbackElement: <Spinner></Spinner>,
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
      },
      {
        path: '/Contacts',
        Component: Contacts
      },
      {
        path: '/card-detailes/:id',
        loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/plant/${params.id}`),
          Component: CardDetailes
      },
      {
        path: '/addCard',
        Component: AddCard
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
