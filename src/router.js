import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Tasks from "./pages/Tasks/Tasks";
import TaskForm from "./containers/TaskForm/TaskForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <p>Not Found</p>,
    children: [
      { path: "/", element: <Tasks /> },
      { path: "/task_form/:id?", element: <TaskForm /> },
    ],
  },
]);

const Router = () => <RouterProvider router={router} />;

export default Router;
