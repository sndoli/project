import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import Dashboard from "./Components/Dashboard/Dashboard";
import Sales from "./Components/Sales/Sales";
import Products from "./Components/Products/Products";
import Customers from "./Components/Customers/Customers";
import Transections from "./Components/Transections/Transections";
import Analytics from "./Components/Analytics/Analytics";




const router = createBrowserRouter([
  {
    path:"/",
    
    element:<Sidebar/>,
    children: [
      {
        path:"/",
        element:<Dashboard/>
      },
      {
        path:"/Products",
        element:<Products/>
      },
      {
        path:"/Sales",
        element:<Sales/>
      },

      {
        path:"/Customers",
        element:<Customers/>
      },
      {
        path:"/Transections",
        element:<Transections/>
      },
      {
        path:"/Analytics",
        element:<Analytics/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);