import { createBrowserRouter as Router, Navigate } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import Dashboard from "../pages/Dashboard";
export const routes = Router([
  {
    path: "*",
    element: <Navigate to="/" />,
  },
  {
    path: "/",
    element: <Navigate to="admin/dashboard" />,
  },{
    path: "admin",
    element: <Navigate to="admin/dashboard" />,
  },
  {
    path: "admin",
    element: <DefaultLayout />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path : "marketplace",
        element: <div>Market place Page</div>
      },
      {
        path : "tables",
        element: <div>Tables Page</div>
      },
      {
        path : "kanban",
        element: <div>Kanban Page</div>
      },
      {
        path : "profile",
        element: <div>Profile Page</div>
      },
      {
        path : "sign-in",
        element: <div>Sign in Page</div>
      }
    ],
  },
]);
