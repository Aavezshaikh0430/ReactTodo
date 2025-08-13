
import{createBrowserRouter , RouterProvider} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Movie from './pages/Movie'
import Contact, { contactData } from './pages/Contact'
import AppLayout from './components/Layout/AppLayout'
import './App.css'
import { ErrorPage } from './pages/ErrorPage'
import { getMovieData } from './api/GetApiData'
import { MovieDetails } from './components/UI/MovieDetails'
import { getMovieDetails } from './api/GetMoviesDetails'
const App = () => {
  const route = createBrowserRouter([

     {
      path : '/',
      element : <AppLayout />,
      errorElement: <ErrorPage />,
      children:[

        {
      path : '/',
      element : <Home />
    },
      {
      path : '/about',
      element : <About />
    },
      {
      path : '/movie',
      element : <Movie />,
      loader: getMovieData,
    },

       {
      path : '/movie/:movieId',
      element : <MovieDetails />,
      loader : getMovieDetails,
    },

      {
      path : '/contact',
      element : <Contact />,
      action : contactData,
    },
   
      ]
    },
    
  ])
  return(
    <>
    <RouterProvider router={route}/>
    </>
  )
}
export default App