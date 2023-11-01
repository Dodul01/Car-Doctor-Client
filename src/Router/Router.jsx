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
import PrivateRoute from "./PrivateRoute";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import CheckOut from "../Pages/CheckOut/CheckOut";
import Bookings from "../Pages/Bookings/Bookings";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        loader: () => fetch('http://localhost:5000/services'),
        element: <Home />
      },
      {
        path: '/about',
        element: <PrivateRoute><About></About></PrivateRoute>
      },
      {
        path: '/contact',
        element: <PrivateRoute><Contact /></PrivateRoute>
      },
      {
        path: '/services',
        element: <PrivateRoute><Services /></PrivateRoute>
      },
      {
        path: '/serviceDetails/:id',
        element: <ServiceDetails />
      },
      {
        path: '/checkOut/:id',
        element: <PrivateRoute><CheckOut /></PrivateRoute>
      },
      {
        path: '/bookings',
        element: <PrivateRoute><Bookings /></PrivateRoute>
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