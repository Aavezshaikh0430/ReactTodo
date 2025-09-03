import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Country } from "./pages/Country";
import { Contact } from "./pages/Contact";
import { AppLayout } from "./componets/layout/AppLayout";

const rout = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "country",
        element: <Country />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={rout}></RouterProvider>;
};
export default App;
