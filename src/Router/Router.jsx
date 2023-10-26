import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Services from "../Pages/Services/Services";
import Blog from "../Pages/Blog/Blog";
import SignUp from "../Pages/SignUp/SignUp";
import SignIn from "../Pages/SignIn/SignIn";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        loader: () => fetch('./services.json'),
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/services',
        element: <Services />
      },
      {
        path: '/blog',
        element: <Blog />
      },
      {
        path: '/signUp',
        element: <SignUp />
      },
      {
        path: '/signIn',
        element: <SignIn />
      }
    ]
  }
])

export default router;