import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import Layout from "./Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    // errorElement: <NotFound />,
    children: [
      { path: "/", element: <Home /> },
      // { path: "/signup", element: <Signup /> },
      // { path: "/signin", element: <SignIn /> },

      // {
      //   element: <ProtectAdminPage />,
      //   children: [
      //     { path: "/admin-dashboard", element: <AdminDashboard /> },
      //     { path: "/add-card", element: <AddCard /> },
      //     { path: "/cards", element: <Cards /> },
      //     { path: "/clients", element: <Clients /> },
      //     { path: "/file-template", element: <FileTemplate /> },
      //   ],
      // },

      // { path: "*", element: <NotFound /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
