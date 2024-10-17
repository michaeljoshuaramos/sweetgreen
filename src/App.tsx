import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Landing, Layout, Menu, MenuItem } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "menu",
        element: <Menu />,
      },
      {
        path: "menu/:name",
        element: <MenuItem />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
