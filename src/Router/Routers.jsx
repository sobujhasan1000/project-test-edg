
import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Component/Main/Main";
import Home from "../Component/Home/Home";
import ContactUs from "../Component/ContactUs/ContactUs";
import About from "../Component/About/About";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },{
          path: 'contact-us',
          element: <ContactUs></ContactUs>
        },{
          path: 'about',
          element: <About></About>
        }
      ]
    },
  ]);