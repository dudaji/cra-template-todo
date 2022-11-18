import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "routes/Root";
import Counter from "routes/Counter";
import Todo from "routes/Todo";
import ErrorPage from "./ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "counter",
        element: <Counter />,
      },
      {
        path: "todo",
        element: <Todo />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
