import React from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MovieDetailsPage from './MovieDetailsPage'
import Error from './Error'
import ScrollToTop from './ScrollToTop'

const Body = () => {

  const appRouter = createBrowserRouter([
      {
          path: "/",
          element: <Login />,
      },
      {
          path: "/browse",
          element: <Browse />,
      },
      {
        path: "/browse/:movieId",
        element: <MovieDetailsPage />,
      },
      {
        path: "*",
        element: <Error />,
      },
  ]);

  return (
    <div>      
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body
