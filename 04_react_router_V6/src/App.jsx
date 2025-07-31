
import{createBrowserRouter , RouterProvider} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Movie from './pages/Movie'
import Contact from './pages/Contact'
import AppLayout from './components/Layout/AppLayout'
import './App.css'
import { ErrorPage } from './pages/ErrorPage'
import { getMovieData } from './api/GetApiData'
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
      path : '/contact',
      element : <Contact />
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