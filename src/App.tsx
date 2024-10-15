import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    children: [
      {
        index: true,
        element: <div>Landing</div>,
      },
      {
        path: "menu",
        element: <div>Menu</div>,
      },
      {
        path: "menu/:name",
        element: <div>Menu Item</div>,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
